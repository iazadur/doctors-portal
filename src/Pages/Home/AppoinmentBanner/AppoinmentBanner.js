import { Grid, Box, Typography, Container } from '@mui/material';
import MuiButton from '../../../StyleComponents/MuiButton';
import React from 'react';
import { NavLink } from "react-router-dom";
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appoinmentBg = {
    background: `url(${bg})`,
    marginTop: 175,
    marginBottom: 100,
    backgroundColor: 'rgba(66,74,93)',
    backgroundBlendMode: 'darken, luminosity'
}



const AppoinmentBanner = () => {
    return (
        <>
            <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5}>
                            <img
                                width="100%"
                                style={{ marginTop: -110, marginBottom: -7 }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center', p: 2 }}>
                            <Box >
                                <Typography variant={'h6'} sx={{ color: '#13D1D6' }}>
                                    Appointment
                                </Typography>
                                <Typography variant={'h4'} sx={{ color: 'white', my: 1 }}>
                                    Make An Appointment Today
                                </Typography>
                                <Typography variant={'body1'} style={{ color: '#fff', fontSize: 14, fontWeight: 300 }} sx={{ my: 2 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, assumenda obcaecati sapiente eius voluptatem voluptas nisi nostrum quaerat neque cupiditate.
                                </Typography>
                                <MuiButton><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">Get Appointment</NavLink> </MuiButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AppoinmentBanner;