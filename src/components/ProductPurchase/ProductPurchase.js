import { Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductPurchase = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id])

    const { detail, img, price, title, _id } = product;

    const handlePurchase = e => {

        e.preventDefault();
    }

    // const user = { displayName: "asif", email: "asif@hassan.com" };

    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Typography variant="h5" sx={{ my: 5, color: 'orangeRed' }}>Place Your Order</Typography>

                <Grid container spacing={2} sx={{ my: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ maxWidth: 345, mx: 'auto' }}>
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
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <form onSubmit={handlePurchase}>
                                <TextField
                                    disabled
                                    sx={{ width: '80%' }}
                                    label="Name"
                                    id="outlined-size-small"
                                    // defaultValue={user.displayName}
                                    size="small"
                                />
                                <br />
                                <br />
                                <TextField
                                    disabled
                                    type="email"
                                    sx={{ width: '80%' }}
                                    label="Email"
                                    id="outlined-size-small"
                                    // defaultValue={user.email}
                                    size="small"
                                />
                                <br />
                                <br />
                                <TextField
                                    multiline
                                    rows={3}
                                    sx={{ width: '80%' }}
                                    label="Address"
                                    id="outlined-size-small"
                                    size="small"
                                />
                                <br />
                                <br />
                                <TextField
                                    type="number"
                                    sx={{ width: '80%' }}
                                    label="Phone Number"
                                    id="outlined-size-small"
                                    size="small"
                                />
                                <br />
                                <br />
                                <TextField
                                    type="number"
                                    sx={{ width: '80%' }}
                                    label="Quantity"
                                    id="outlined-size-small"
                                    size="small"
                                />
                                <br />
                                <br />
                                <Button variant="contained" type="submit" sx={{ width: '80%' }} color="warning">Order</Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ProductPurchase;