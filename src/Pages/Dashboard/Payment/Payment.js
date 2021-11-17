import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutFrom from './CheckOutFrom';
import {  Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51JvwwTG7xPMj979d0d1yr0E8NSx2FAf8lCdXkB5eSCmkDajjbU63KLSX8bcnt4KUw0M5ma010L3gG5c3o6jJUqd200CRYYIWFd');

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => setAppointment(res.data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.name} for {appointment.serviceName}</h2>
            <h4>Pay: $ {appointment.price}</h4>

            {appointment.price && <Elements stripe={stripePromise}>
                <CheckOutFrom appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;