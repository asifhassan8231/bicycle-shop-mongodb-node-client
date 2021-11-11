import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner-1.jpg';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${banner})`,
                height: '40vh',
                backgroundRepeat: 'no-repeat',
                marginTop: 7, display: 'flex',
                alignItems: 'center',
            }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Grid item xs={12} md={6} >
                        <Box>
                            <Typography variant="body2" color="white">
                                &copy; 2022, Volcano Bicycle Ltd.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant='h5' color="white" sx={{ mb: 2 }}>
                            Address
                        </Typography>
                        <Typography variant='body1' color="white" sx={{ mb: 2 }}>
                            34/A Ice Factory Road, New Jersy. Zip: 1224
                        </Typography>
                        <Typography variant='h6' color="white" sx={{ mb: 2 }}>
                            Contact Us
                        </Typography>
                        <Typography variant='body2' color="white" sx={{ mb: 2 }}>
                            volcano.bicycle.business@hotmail.com
                            Phone: +0927262733
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Footer;