import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddProduct = () => {

    const handleProductSubmit = e => {

        e.preventDefault();
    }

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
                        sx={{ width: '50%' }}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Price"
                        multiline
                        type="number"
                        maxRows={2}
                        sx={{ width: '50%' }}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Image Url"
                        multiline
                        maxRows={4}
                        sx={{ width: '50%' }}
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Product Details"
                        multiline
                        rows={4}
                        sx={{ width: '50%' }}
                    />
                    <br />
                    <br />
                    <Button variant="contained" type="submit" sx={{ width: '50%' }} color="warning">ADD</Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddProduct;