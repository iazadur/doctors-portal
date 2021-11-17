import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone'
import { makeStyles } from '@mui/styles';
import axios from 'axios';
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
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        axios.get('https://limitless-forest-77951.herokuapp.com/doctors')
            .then(res => setDoctors(res.data))
    }, [])
    console.log(doctors);
    return (
        <>
            <Container sx={{ my: 12 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: "#5FC7C7", my: 3 }}>Our Doctors</Typography>
                <Grid container >
                    {doctors.map(({ _id, image, name, email }) => (
                        <Grid item key={_id} xs={12} sm={12} md={4}>
                            <Paper elevation={0}>
                                <img src={`data:image/png;base64,${image}`} width="100%" alt="" sx={{}}></img>
                                <Typography className={doctorsName} variant="h6">{name}</Typography>
                                <Box className={doctorsPhone}>
                                    <PhoneIcon style={{ fontSize: "1rem", marginRight: "3px" }} /><Typography variant="body2">{email} </Typography>
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