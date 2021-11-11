import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner-1.jpg';

const Banner = () => {

    return (
        <Box
            sx={{
                backgroundImage: `url(${banner})`,
                height: '100vh',
                backgroundSize: '100vw 110vh',
                backgroundRepeat: 'no-repeat',
                marginTop: '0', display: 'flex',
                alignItems: 'center'
            }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Grid item xs={12} md={6} >
                        <Typography variant='h2' sx={{ mb: 3, fontWeight: 'bold' }} style={{
                            background: 'linear-gradient(to right, #fbe9e7 0%, #ffab91 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            A New Journey Begins...
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant='subtitle1' color="white" sx={{ mb: 2 }}>
                            The first range of bicycles launched by Volcano is the Pro Series. The premium quality and reliability has contributed highly towards the brand. The first range of bicycles launched by Veloce is the Legion Series. The premium quality and reliability has contributed highly towards the brand.
                        </Typography>
                        <Button variant="contained" color="warning">
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;