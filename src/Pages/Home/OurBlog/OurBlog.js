import { Grid, Paper, Box, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import people1 from './../../../images/people-1.png'
import people2 from './../../../images/people-2.png'

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
    return (
        <>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12} md={4}>
                    <Paper >
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={people1}>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                        </ListItem>
                    </Paper>
                </Grid>
                {n.map(({ people, title, desc }, idx) => (
                    <Grid key={idx} item xs={12} sm={12} md={4}>
                        <Paper sx={{ py: 5, textAlign: "left" }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={people}>

                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                            </ListItem>
                            <Typography sx={{ my: 2, fontWeight: 600, paddingLeft: 2 }} variant="h6">{title}</Typography>
                            <Typography
                                sx={{ paddingLeft: 2,color:'gray' }}
                                variant="body2">{desc}</Typography>
                        </Paper>
                    </Grid>
                ))}

            </Grid>
        </>
    );
};

export default OurBlog;