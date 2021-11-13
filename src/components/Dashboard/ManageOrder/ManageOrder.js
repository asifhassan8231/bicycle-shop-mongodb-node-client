import { Alert, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [cancelOpen, setCancelOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
    const [orderId, setOrderId] = React.useState('');


    useEffect(() => {
        fetch('https://calm-journey-16674.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    const handleStatusUpdate = id => {
        const updatedOrder = { id };
        fetch('https://calm-journey-16674.herokuapp.com/orders/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    setOpen(true);
                }
            })
    }

    useEffect(() => {
        if (confirm === true) {
            fetch(`https://calm-journey-16674.herokuapp.com/orders/${orderId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        setCancelOpen(true);
                        const remainingOrders = orders.filter(order => order._id !== orderId);
                        setOrders(remainingOrders);
                    }
                })
        }
        else {
            return;
        }
    }, [orderId, confirm, orders])


    const handleClickOpen = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleCancelClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setCancelOpen(false);
    };

    const pendingStyle = {
        color: 'orange'
    }
    const shippedStyle = {
        color: 'green'
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Manage All Orders</Typography>
            <Box>
                <Grid container spacing={2}>
                    {
                        orders.map(order => (
                            <Grid item xs={12} md={6} key={order._id}>
                                <Paper elevation={3}>
                                    <Typography variant="h5" sx={{ my: 1 }}>{order.displayName}</Typography>
                                    <Typography variant="h6" sx={{ my: 1 }}>{order.email}</Typography>
                                    <Typography variant="subtitle1" sx={{ my: 1 }}>{order.address}</Typography>
                                    <Typography variant="subtitle2" sx={{ my: 1 }}>{order.phone}</Typography>
                                    <hr />
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Product Id:</b> {order.productId}</Typography>
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Product Title:</b> {order.productTitle}</Typography>
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Quantity:</b> {order.quantity}</Typography>
                                    <Typography variant="h6" sx={{ my: 1 }} style={
                                        order?.status === 'shipped' ? shippedStyle : pendingStyle
                                    }><b>Status:</b> {order.status}</Typography>
                                    <hr />
                                    <Button variant="contained" color="warning" sx={{ my: 1, mr: 1 }} onClick={() => handleStatusUpdate(order._id)}>Update Status</Button>

                                    <Button variant="outlined" color="error" onClick={() => {
                                        handleClickOpen();
                                        setOrderId(order._id);
                                    }}>Cancel Order</Button>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Status Updated Successfully!
                    </Alert>
                </Snackbar>

                <Snackbar open={cancelOpen} autoHideDuration={6000} onClose={handleCancelClose}>
                    <Alert onClose={handleCancelClose} severity="error" sx={{ width: '100%' }}>
                        Order Cancelled!
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
                            {"Order Cancel Confirmation"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure about cancelling the order?
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
                                Cancel Order
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            </Box>
        </Container>
    );
};

export default ManageOrder;