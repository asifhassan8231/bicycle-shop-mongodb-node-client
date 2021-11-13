import { Alert, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [cancelOpen, setCancelOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    const [productId, setProductId] = React.useState('');


    useEffect(() => {
        fetch('https://calm-journey-16674.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])


    useEffect(() => {
        if (confirm === true) {
            fetch(`https://calm-journey-16674.herokuapp.com/products/${productId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        setCancelOpen(true);
                        const remainingProducts = products.filter(product => product._id !== productId);
                        setProducts(remainingProducts);
                    }
                })
        }
        else {
            return;
        }
    }, [productId, confirm, products])


    const handleClickOpen = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleCancelClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setCancelOpen(false);
    };


    return (
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Manage Products</Typography>
            <Box>
                <Grid container spacing={2}>
                    {
                        products.map(product => (
                            <Grid item xs={12} md={6} key={product._id}>
                                <Paper elevation={3}>
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Product Id:</b> {product._id}</Typography>
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Product Title:</b> {product.title}</Typography>
                                    <hr />
                                    <Button variant="contained" sx={{ my: 1 }} color="error" onClick={() => {
                                        handleClickOpen();
                                        setProductId(product._id);
                                    }}>Remove Product</Button>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>

                <Snackbar open={cancelOpen} autoHideDuration={6000} onClose={handleCancelClose}>
                    <Alert onClose={handleCancelClose} severity="error" sx={{ width: '100%' }}>
                        Product Removed!
                    </Alert>
                </Snackbar>
                <>
                    <Dialog
                        open={alertOpen}
                        onClose={handleAlertClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Product Remove Confirmation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure about removing the product?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => {
                                handleAlertClose();
                                setConfirm(false);
                            }}>No</Button>
                            <Button onClick={() => {
                                handleAlertClose();
                                setConfirm(true);
                            }} autoFocus>
                                Remove Product
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            </Box>
        </Container>
    );
};

export default ManageProduct;