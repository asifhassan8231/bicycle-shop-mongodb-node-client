import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                const slicedArray = data.slice(0, 6);
                setProducts(slicedArray);
            })
    }, [])

    return (
        <Container>
            <Box sx={{ my: 6, color: 'orange' }}>
                <Typography variant="h4">
                    OUR COLLECTION
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(prd => <Product key={prd.title} product={prd}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default Products;