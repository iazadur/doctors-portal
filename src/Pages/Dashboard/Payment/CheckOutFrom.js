import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';
import { Button } from '@mui/material';




const CheckOutFrom = ({ appointment }) => {
    const { user } = useAuth()
    const { price, name, _id } = appointment
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSectret] = useState('')
    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price: price })
            .then(res => setClientSectret(res.data.clientSecret))
    }, [price])
    console.log({ price: price });


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setProcessing(false)
            setSuccess('')
        } else {
            setError('');
            console.log(paymentMethod);
        }

        // Payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setProcessing(false)
            setSuccess('')
        } else {
            setError('')
            setProcessing(false)
            setSuccess("Your Payment Processed Successfully")
            console.log(paymentIntent);
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/appointments/${_id}`
            axios.put(url, payment)
                .then(res => console.log(res.data))
        }



    }

    if (error) {
        swal({
            title: "Oh No!",
            text: error,
            icon: "error",
            buttons: false,
            timer: 4000,
        });
    }
    if (success) {
        swal({
            title: "Good job!",
            text: success,
            icon: "success",
            buttons: false,
            timer: 2000,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress color="secondary" /> : <Button>{success ? 'Paid' : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}</Button>}
            </form>
            {
                error && <p sx={{
                    color: "red"
                }}></p>
            }
        </>
    );
};

export default CheckOutFrom;