import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import banner from '../../../images/bg.png'
import {  Container, Typography } from '@mui/material';
import MuiButton from '../../../StyleComponents/MuiButton';

import { NavLink } from "react-router-dom";

const bannerBg = {
    height: '450px'
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center'

}
const style = {
    minHeight: 500,
    height: '100vh',
    display: "flex",
    alignItems: 'center',
    background: `url(${banner})`,
}
const Banner = () => {
    return (
        <div style={style}>
            <Container>
                <Box sx={{ flexGrow: 1 }} style={bannerBg}>
                    <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                                    Your New Smile <br />
                                    Starts Here
                                </Typography>
                                <Typography variant="body1" sx={{ my: 3, fontWeight: '300', lineHeight: 2 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta autem ratione asperiores voluptate, incidunt suscipit facere nesciunt commodi temporibus!
                                </Typography>

                                <MuiButton><NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">Get Appointment</NavLink> </MuiButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} style={verticalCenter}>
                            <img style={{ width: '100%' }} src={chair} alt="" />
                        </Grid>

                    </Grid>
                </Box>
                
            </Container>

        </div>
    );
};
export default Banner;