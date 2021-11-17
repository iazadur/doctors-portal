import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { InfoCardData } from '../Data/InfoCardData';

const InfoCard = () => {
    return (
        <>
            <Container style={{ marginTop: -100, marginBottom: 100 }}>
                <Grid container spacing={3}>
                    {
                        InfoCardData.map(({ id,Icon, desc, title, background }) => <Grid key={id} item xs={12} sm={12} md={4} >
                            <Paper style={{ background: background, color: 'white' }} sx={{ display: 'flex', justifyContent: "space-around", p: 2 }} variant="outlined">
                                <Icon sx={{ fontSize: "60px" }} />
                                <Box>
                                    <Typography variant="body1">{title}</Typography>
                                    <Typography variant="body2">{desc}</Typography>
                                </Box>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default InfoCard;