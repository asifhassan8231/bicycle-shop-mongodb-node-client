import Container from '@mui/material/Container';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Banner></Banner>
                <Products></Products>
                <Reviews></Reviews>
                <Blogs></Blogs>
            </Container>
            <Footer></Footer>
        </>

    );
};

export default Home;