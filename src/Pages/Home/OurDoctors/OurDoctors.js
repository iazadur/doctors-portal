import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import doctor from './../../../images/doctor-small.png'
import PhoneIcon from '@mui/icons-material/Phone'
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    doctorsName: {
        fontWeight: "bold"
    },
    doctorsPhone: {
        color: '#9499AA !important',
        margin: "5px 0 !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: '12px !important'
    },
})

const OurDoctors = () => {
    const { doctorsPhone, doctorsName } = useStyle()
    return (
        <>
            <Container sx={{ my: 12 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: "#5FC7C7", my: 3 }}>Our Doctors</Typography>
                <Grid container >
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Grid item key={idx} xs={12} sm={12} md={4}>
                            <Paper elevation={0}>
                                <img src={doctor} width="100%" alt="" sx={{}}></img>
                                <Typography className={doctorsName} variant="h6">Dr Caudi</Typography>
                                <Box className={doctorsPhone}>
                                    <PhoneIcon style={{ fontSize: "1rem", marginRight: "3px" }} /><Typography variant="body2">+88 01991666031 </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}

                </Grid>
            </Container>

        </>
    );
};

export default OurDoctors;