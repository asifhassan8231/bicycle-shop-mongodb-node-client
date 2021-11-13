import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 6, color: 'orange' }}>CUSTOMER REVIEWS</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => (
                        <Grid item xs={4} sm={4} md={4} key={review._id}>
                            <Paper sx={{ p: 3 }} style={{ height: '80%' }}>
                                <Typography variant="body1" sx={{ mb: 2 }}>{review.review}</Typography>
                                <Rating name="read-only" size="small" value={review.score} readOnly />
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Box sx={{ mr: 2 }}>
                                        <AccountBoxIcon></AccountBoxIcon>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ color: 'success.main' }}>{review.displayName}</Typography>
                                        <Typography variant="body2">{review.address}</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Reviews;