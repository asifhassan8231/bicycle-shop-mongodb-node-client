import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product }) => {

    const { title, img, price, detail } = product;

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
                        {detail.slice(0, 132)}
                    </Typography>
                    <Typography variant="h6" color="#d84315">
                        $ {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained" color="warning">Buy Now!</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;