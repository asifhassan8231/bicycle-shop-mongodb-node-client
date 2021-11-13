import { Alert, Button, Container, Grid, Paper, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])

    const handleStatusUpdate = id => {
        const updatedOrder = { id };
        fetch('http://localhost:5000/orders/update', {
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

    const handleCancelButton = (id) => {
        const confirm = window.confirm('Are you sure about that?')
        if (confirm) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };



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
                                    <Typography variant="h6" sx={{ my: 1 }}><b>Status:</b> {order.status}</Typography>
                                    <hr />
                                    <Button variant="contained" color="warning" sx={{ my: 1, mr: 1 }} onClick={() => handleStatusUpdate(order._id)}>Update Status</Button>
                                    <Button variant="outlined" color="error" onClick={() => handleCancelButton(order._id)}>Cancel Order</Button>
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
            </Box>
        </Container>
    );
};

export default ManageOrder;