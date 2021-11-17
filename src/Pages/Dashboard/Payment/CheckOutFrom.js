import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';




const CheckOutFrom = ({ appointment }) => {
    const { price } = appointment
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
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

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error);
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }



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
                <button type="submit" disabled={!stripe}>
                    Pay ${price}
                </button>
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