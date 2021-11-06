import React, { useState } from 'react';
import { Fade, Modal, Box, Backdrop, TextField, Button, Typography } from '@mui/material';
import axios from 'axios'
import swal from 'sweetalert'
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};





const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {

    const { name, time } = booking
    const { user } = useAuth()
    const initBookingInfo = { name: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initBookingInfo)

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        setBookingInfo(newInfo)
    }

    console.log(bookingInfo);

    const handleBookingSubmit = e => {

        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            date: date.toLocaleDateString(),
            serviceName: name
        }
        console.log(appointment);
        // send to the server
        axios.post('http://localhost:5000/appointments', appointment)
            .then(function (response) {
                console.log(response.data);
                if (response.data.insertedId) {
                    swal({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success",
                        buttons: false,
                        timer: 1500,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });


        e.preventDefault()

        handleBookingClose()
    }
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={user?.displayName}
                                size="small"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="Your Email"
                                defaultValue={user?.email}
                                size="small"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="Phone Number"
                                size="small"
                                name="phone"
                                onBlur={handleOnBlur}
                            />
                            <Button variant="contained" type="submit">Book Now</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;