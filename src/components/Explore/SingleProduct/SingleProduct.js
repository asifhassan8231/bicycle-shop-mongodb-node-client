import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {

    const { title, img, price, detail, _id } = product;
    const url = `/explore/${_id}`;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt=""
                />
                <CardContent>
                    <Typography variant="body1" color="text.secondary">
                        {detail}
                    </Typography>
                    <Typography variant="h6" color="#d84315">
                        $ {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={url} style={{ textDecoration: 'none' }}>
                        <Button size="small" variant="contained" color="warning">Buy Now!</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;