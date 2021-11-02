import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import banner from '../../../images/bg.png'
import { Button, Container, paperClasses, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${banner})`,
    height: '450px'
}
const verticalCenter = {
    display:'flex',
    alignItems:'center',
    border:'1px solid' paperClasses.

}
const Banner = () => {
    return (
        <>
            <Container >
                <Box sx={{ flexGrow: 1 }} style={bannerBg}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} sx={{textAlign:'left'}}>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, color: 'text.secondary', fontWeight: '300' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dicta autem ratione asperiores voluptate, incidunt suscipit facere nesciunt commodi temporibus!
                            </Typography>
                            <Button sx={{ mt: 3, backgroundColor: '#5CE7ED' }} variant="contained">Get Appointment</Button>
                        </Grid>
                        <Grid item xs={12} md={7} style={verticalCenter}>
                            <img style={{ width: '200px' }} src={chair} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            </Container>

        </>
    );
};
export default Banner;