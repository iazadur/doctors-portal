import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res=>setAppointment(res.data))
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay For: {appointment.name} for {appointment.serviceName}</h2>
            <h4>Pay: $ {appointment.price}</h4>
        </div>
    );
};

export default Payment;