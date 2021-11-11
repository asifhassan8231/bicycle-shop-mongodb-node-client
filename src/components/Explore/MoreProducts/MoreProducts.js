import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const MoreProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <Container>
            <Box sx={{ my: 6 }}>
                <Typography variant="h4">
                    TOTAL PRODUCTS {products.length}
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(prd => <SingleProduct key={prd._id} product={prd}></SingleProduct>)
                }
            </Grid>
        </Container>
    );
};

export default MoreProducts;