import { Container } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import MoreProducts from '../MoreProducts/MoreProducts';

const Explore = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <MoreProducts></MoreProducts>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;