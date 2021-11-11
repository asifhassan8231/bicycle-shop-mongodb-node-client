import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import pic1 from '../../../images/blog-2.jpg';
import pic2 from '../../../images/blog-3.jpg';
import pic3 from '../../../images/blog-4.jpg';

const Blogs = () => {
    return (
        <Container>
            <Box sx={{ my: 6, color: 'orange' }}>
                <Typography variant="h4">
                    LATEST NEWS
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pic1}
                            alt=""
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                20 July, 2021
                            </Typography>
                            <Typography variant="body2">
                                Cycling is one of the healthiest and low-impact forms of exercise - meaning it causes less strain and injuries than most other work outs. So it's a hobby you can continue to enjoy throughout you long life. And, unlike other forms of exercise, you won't dread doing it
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="warning">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pic2}
                            alt=""
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                10 September, 2021
                            </Typography>
                            <Typography variant="body2">
                                Even if you take cycling seriously and go at it hard, the blood pumping and wind in your face is still exhiliarating, even when it's difficult. But the good news is, you don't have to take cycling seriously to enjoy it's numerous benefits., unlike other forms of exercise, you won't dread doing it
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="warning">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pic3}
                            alt=""
                        />
                        <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                1 November, 2021
                            </Typography>
                            <Typography variant="body2">
                                Cycling is a hobby you can continue to enjoy throughout you long life. And, unlike other forms of exercise, you won't dread doing it. Even if you take cycling seriously and go at it hard, the blood pumping and wind in your face is still exhiliarating, even when it's difficult.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="warning">Read More</Button>
                        </CardActions>
                    </Card>
                </Grid>


            </Grid>
        </Container>
    );
};

export default Blogs;