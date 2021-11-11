import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React from 'react';

const Reviews = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ my: 6, color: 'orange' }}>CUSTOMER REVIEWS</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ mr: 2 }}>
                                <AccountBoxIcon></AccountBoxIcon>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ mr: 2 }}>
                                <AccountBoxIcon></AccountBoxIcon>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body1" sx={{ mb: 2 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos tempore obcaecati eligendi minima dolor, iusto cumque velit molestiae blanditiis eaque deleniti corrupti nobis ipsam facere placeat quia, voluptates magni illo.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ mr: 2 }}>
                                <AccountBoxIcon></AccountBoxIcon>
                            </Box>
                            <Box>
                                <Typography variant="h6" sx={{ color: 'success.main' }}>Winson Henry</Typography>
                                <Typography variant="body2">California</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Reviews;