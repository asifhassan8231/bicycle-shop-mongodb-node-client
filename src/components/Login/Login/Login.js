import { Alert, Button, Container, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, loading, user, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Paper elevation={3} sx={{ width: '40%', mx: 'auto', p: 8, my: 10 }}>
                <Typography variant="h4" sx={{ mb: 4, letterSpacing: 6 }}>Continue With Email</Typography>
                <Box>
                    {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%' }}
                            id="outlined-required"
                            label="Your Email"
                            type="email"
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
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
                            onBlur={handleOnBlur}
                        />
                        <NavLink to="/register" style={{ textDecoration: "none" }} >
                            <Typography variant="body2"
                                sx={{ width: '1', my: 2, color: 'orangeRed' }}>I don't have an Account</Typography>
                        </NavLink>
                        <br />
                        <Button sx={{ width: '75%' }} variant="contained" color="warning" type="submit" >Login</Button>
                    </form>}
                    {loading && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
                    {user &&
                        <Alert severity="success">Login Successful!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;