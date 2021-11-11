import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const handleRegisterSubmit = e => {

        e.preventDefault();
    }

    return (
        <Container>
            <Paper elevation={3} sx={{ width: '40%', mx: 'auto', p: 8, my: 10 }}>
                <Typography variant="h4" sx={{ mb: 4, letterSpacing: 6 }}>Create An Account</Typography>
                <Box>
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-required"
                            label="Your Name"
                            type="text"
                            size="small"
                            name="name"
                        />
                        <br />
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-required"
                            label="Your Email"
                            type="email"
                            size="small"
                            name="email"
                        />
                        <br />
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            name="password"
                        />
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            name="password2"
                        />
                        <NavLink to="/login" style={{ textDecoration: "none" }} >
                            <Typography variant="body2"
                                sx={{ width: '1', my: 2, color: 'orangeRed' }}>Already have an Account? Please Login </Typography>
                        </NavLink>
                        <br />
                        <Button sx={{ width: '75%' }} variant="contained" color="warning" type="submit" >Register</Button>
                    </form>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;