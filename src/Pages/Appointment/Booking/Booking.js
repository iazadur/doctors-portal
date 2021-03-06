import { Grid, Paper, Typography, Button } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space, price } = booking
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: '600' }} variant="h5" gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant="" gutterBottom component='div'>
                       Price ${price}
                    </Typography>
                    <Typography variant="caption" gutterBottom component='div'>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal handleBookingClose={handleBookingClose} openBooking={openBooking} booking={booking} date={date} />
        </>
    );
};

export default Booking;