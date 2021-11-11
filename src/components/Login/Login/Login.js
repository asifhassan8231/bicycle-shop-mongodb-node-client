import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

    const handleLoginSubmit = e => {

        e.preventDefault();
    }

    return (
        <Container>
            <Paper elevation={3} sx={{ width: '40%', mx: 'auto', p: 8, my: 10 }}>
                <Typography variant="h4" sx={{ mb: 4, letterSpacing: 6 }}>Continue With Email</Typography>
                <Box>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            required
                            sx={{ width: '75%' }}
                            id="outlined-required"
                            label="Your Email"
                            type="email"
                            size="small"
                            name="email"
                        />
                        <br />
                        <br />
                        <TextField
                            sx={{ width: '75%' }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            name="password"
                        />
                        <NavLink to="/register" style={{ textDecoration: "none" }} >
                            <Typography variant="body2"
                                sx={{ width: '1', my: 2, color: 'orangeRed' }}>I don't have an Account</Typography>
                        </NavLink>
                        <br />
                        <Button sx={{ width: '75%' }} variant="contained" color="warning" type="submit" >Login</Button>
                    </form>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;