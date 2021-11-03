import React from 'react';
import { Fade, Modal, Box, Backdrop, TextField, Button, Typography } from '@mui/material';

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

    const handleBookingSubmit = e =>{
        alert('book submitted')
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
                                placeholder="Your Name"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="Your Email"
                                size="small"
                            />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                id="outlined-size-small"
                                placeholder="Phone Number"
                                size="small"
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