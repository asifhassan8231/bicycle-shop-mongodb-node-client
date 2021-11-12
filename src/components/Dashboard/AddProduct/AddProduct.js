import { Alert, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
    const [addProduct, setAddProduct] = useState({});
    const [open, setOpen] = React.useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...addProduct };
        newProduct[field] = value;
        setAddProduct(newProduct);
    }

    const handleProductSubmit = e => {
        axios.post('https://calm-journey-16674.herokuapp.com/products', addProduct)
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
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Add A Product</Typography>
            <Box>
                <form onSubmit={handleProductSubmit}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Product Title"
                        multiline
                        maxRows={4}
                        sx={{ width: '75%' }}
                        type="text"
                        name="title"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Price"
                        multiline
                        type="number"
                        maxRows={2}
                        sx={{ width: '75%' }}
                        name="price"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Image Url"
                        multiline
                        maxRows={4}
                        sx={{ width: '75%' }}
                        type="text"
                        name="img"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Product Details"
                        multiline
                        rows={4}
                        sx={{ width: '75%' }}
                        type="text"
                        name="detail"
                        onBlur={handleOnBlur}
                    />
                    <br />
                    <br />
                    <Button variant="contained" type="submit" sx={{ width: '75%' }} color="warning">ADD</Button>
                </form>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Added Product Successfully!!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default AddProduct;