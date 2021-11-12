import { Alert, Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const ProductPurchase = () => {
    const [open, setOpen] = React.useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState({});

    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                const initialInfo = { displayName: user.displayName, email: user.email, productId: data._id, productTitle: data.title };
                setOrder(initialInfo);
            })
    }, [id, user.displayName, user.email])

    const { detail, img, price, title } = product;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order };
        newOrder[field] = value;
        setOrder(newOrder);
    }

    const handlePurchase = e => {
        axios.post('http://localhost:5000/orders', order)
            .then(response => {
                if (response.data.acknowledged) {
                    e.target.reset();
                    setOpen(true);
                }
            })
        e.preventDefault();
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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
                                    defaultValue={user.displayName}
                                    size="small"
                                    type="text"
                                    name="displayName"
                                />
                                <br />
                                <br />
                                <TextField
                                    disabled
                                    type="email"
                                    sx={{ width: '80%' }}
                                    label="Email"
                                    id="outlined-size-small"
                                    defaultValue={user.email}
                                    size="small"
                                    name="email"
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
                                    type="text"
                                    name="address"
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <br />
                                <TextField
                                    type="number"
                                    sx={{ width: '80%' }}
                                    label="Phone Number"
                                    id="outlined-size-small"
                                    size="small"
                                    name="phone"
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <br />
                                <TextField
                                    type="number"
                                    sx={{ width: '80%' }}
                                    label="Quantity"
                                    id="outlined-size-small"
                                    size="small"
                                    name="quantity"
                                    onBlur={handleOnBlur}
                                />
                                <br />
                                <br />
                                <Button variant="contained" type="submit" sx={{ width: '80%' }} color="warning">Order</Button>
                            </form>
                        </Box>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                Order Successfully Made!!
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ProductPurchase;