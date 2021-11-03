import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <>
            <h2>Available Appointment {date.toDateString()}</h2>
        </>
    );
};

export default AvailableAppointment;