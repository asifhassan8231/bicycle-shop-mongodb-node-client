import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image from '../../../images/dashboard.jpg';

const DashboardMain = () => {
    return (
        <Container>
            <Typography variant="h3" style={{ fontWeight: 200 }}>Welcome To Dashboard!</Typography>
            <Box>
                <img src={image} alt="" width="75%" />
            </Box>
        </Container>
    );
};

export default DashboardMain;