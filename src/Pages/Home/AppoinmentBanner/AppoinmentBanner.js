import { Grid, Box, Typography, Button, Container } from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appoinmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(66,74,93)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppoinmentBanner = () => {
    return (
        <>
            <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img
                                style={{ width: 400, marginTop: -115 }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                            <Box >
                                <Typography variant={'h6'} sx={{ color: '#13D1D6' }}>
                                    Appointment
                                </Typography>
                                <Typography variant={'h4'} sx={{ color: 'white', my: 3 }}>
                                    Make An Appointment Today
                                </Typography>
                                <Typography variant={'h6'} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, assumenda obcaecati sapiente eius voluptatem voluptas nisi nostrum quaerat neque cupiditate.
                                </Typography>
                                <Button variant="contained" sx={{ mt: 3, backgroundColor: '#5CE7ED' }}>Learn more</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AppoinmentBanner;