import { Grid, Paper, Box, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Container } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'

import people1 from './../../../images/people-1.png'
import people2 from './../../../images/people-2.png'
const useStyle = makeStyles({
    firstBlog: {
        color: 'white',
        background: 'linear-gradient(90deg, #19D3AE, #0FCFEC)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "15px",
        borderRadius: 5
    }
})


const OurBlog = () => {
    const n = [
        {
            people: people1,
            title: "2 Times of brush in a day can Keep You healthy",
            desc: "It is a long established fact that by the readable content of a lot layout. The Point"
        },
        {
            people: people2,
            title: "The tooth cancer is taking a challenge",
            desc: "It is a long established fact that by the readable content of a lot layout. The Point"
        }
    ]
    const { firstBlog } = useStyle()
    return (
        <>
            <Container>
                <Typography variant="h6" color="#5FC7C7">OUR BLOG</Typography>
                <Typography variant="h4" color="#000" sx={{ mb: 10, fontWeight: 600 }}>From Our Blog News</Typography>
                <Grid container spacing={3} >
                    <Grid className={firstBlog} item xs={12} sm={12} md={4} sx={{ py: 5, textAlign: "left" }}>
                        <Box>
                            <Typography variant="subtitle2">Rashed Kabir</Typography>
                            <Typography variant="subtitle2">22 Aug 2018</Typography>
                        </Box>
                        <Typography variant="h6">Check at least a doctor in a year for your teeth</Typography>
                        <Typography><ArrowLeftIcon /></Typography>
                    </Grid>
                    {n.map(({ people, title, desc }, idx) => (
                        <Grid key={idx} item xs={12} sm={12} md={4}>
                            <Paper sx={{ p: 5, textAlign: "left" }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar src={people}>

                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                </ListItem>
                                <Typography sx={{ my: 2, fontWeight: 600, paddingLeft: 2 }} variant="h6">{title}</Typography>
                                <Typography
                                    sx={{ paddingLeft: 2, color: 'gray' }}
                                    variant="body2">{desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </>
    );
};

export default OurBlog;