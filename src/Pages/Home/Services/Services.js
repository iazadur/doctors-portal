import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'fluoride Treatment',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi natus impedit maiores, dignissimos laborum architecto, reprehenderit deleniti suscipit libero iste ducimus commodi eaque dolor modi nostrum laboriosam ipsa nesciunt necessitatibus.",
        img: fluride
    },
    {
        name: 'Cavity Filling',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi natus impedit maiores, dignissimos laborum architecto, reprehenderit deleniti suscipit libero iste ducimus commodi eaque dolor modi nostrum laboriosam ipsa nesciunt necessitatibus.",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi natus impedit maiores, dignissimos laborum architecto, reprehenderit deleniti suscipit libero iste ducimus commodi eaque dolor modi nostrum laboriosam ipsa nesciunt necessitatibus.",
        img: whitening
    }

]



const Services = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography variant="h6" sx={{ fontWeight: 500, color: 'success.main', m: 2 }} component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, m: 4 }} component="div">
                        services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => (
                            <Grid item xs={4} sm={4} md={4} key={index}>
                                <Service service={service} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Services;