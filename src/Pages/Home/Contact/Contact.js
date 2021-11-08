import { Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles'
import MuiButton from '../../../StyleComponents/MuiButton';
import bg from './../../../images/appointment-bg.png'

const Contact = () => {
    const useStyle = makeStyles({
        root: {
            textAlign: 'center',
            padding: '30px',
            background: `url(${bg})`,
            backgroundColor: 'rgba(66,74,93)',
            backgroundBlendMode: 'darken, luminosity'
        },
        textArea: {
            border: 0,
            outline: 0,
            margin: "20px 0",
            width: "100%",
            borderRadius: "3px",
            fontFamily: "inherit",
            padding: "15px"

        }
    })


    const { root, textArea } = useStyle()
    return (
        <div className={root}>
            <div>
                <Container>
                    <Typography variant="h6" color="#5FC7C7">Contact us</Typography>
                    <Typography variant="h4" color="#fff">Always contact with us</Typography>
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        sx={{ background: "#fff", borderRadius: 1, p: 0 }}
                        placeholder="Email"
                    />
                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        sx={{ background: "#fff", borderRadius: 1, p: 0 }}
                        placeholder="Subject"
                    />


                    <textarea rows={9} placeholder="Your Message" className={textArea}>

                    </textarea>

                    <MuiButton>Submit</MuiButton>
                </Container>
            </div>
        </div>
    );
};

export default Contact;