import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'

import { makeStyles } from '@mui/styles';
import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import MuiButton from '../../../StyleComponents/MuiButton';


const useStyle = makeStyles({
    socilaIcon: {
        color: '#19D3AE !important',
        border: '1px solid #19D3AE !important',
        margin: "20px 10px 30px 0 !important",
        '&:hover': {
            background: '#19D3AE !important',
            color: '#fff !important',
        }
    }
})

const Footer = () => {
    const { socilaIcon } = useStyle()
    return (
        <footer>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }} >
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List sx={{ mt: 4, color: "#9499AA" }}>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check up</ListItemText>
                            <ListItemText>Treatment of personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List sx={{ color: "#9499AA" }} >
                            <Typography sx={{ color: "#19D3AE", mb: 1, fontWeight: "600", fontSize: "25px" }}>Services</Typography>
                            <ListItemText sx={{ color: "#9499AA" }}>Emergency Dental Care</ListItemText>
                            <ListItemText>Check up</ListItemText>
                            <ListItemText>Treatment of personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List sx={{ color: "#9499AA" }}>
                            <Typography sx={{ color: "#19D3AE", mb: 1, fontWeight: "600", fontSize: "25px" }}>Oral Health</Typography>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check up</ListItemText>
                            <ListItemText>Treatment of personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <List sx={{ color: "#9499AA" }}>
                            <Typography sx={{ color: "#19D3AE", mb: 1, fontWeight: "600", fontSize: "25px" }}>Our Address</Typography>
                            <ListItemText>New York - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>
                        </List>
                        <IconButton className={socilaIcon}><GoogleIcon /></IconButton>
                        <IconButton className={socilaIcon}><TwitterIcon /></IconButton>
                        <IconButton className={socilaIcon}><InstagramIcon /></IconButton>
                        <Typography color="#9499AA">Call Now</Typography>
                        <MuiButton>+8801991666031</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;