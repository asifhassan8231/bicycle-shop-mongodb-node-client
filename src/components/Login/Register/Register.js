import { Alert, Button, Container, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { registerUser, loading, user, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };
        newRegistrationData[field] = value;
        setRegistrationData(newRegistrationData);
    }

    const handleRegisterSubmit = e => {
        if (registrationData.password !== registrationData.password2) {
            alert('Your Password Did not matched');
            return;
        }
        registerUser(registrationData.email, registrationData.password, registrationData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Paper elevation={3} sx={{ width: '40%', mx: 'auto', p: 8, my: 10 }}>
                <Typography variant="h4" sx={{ mb: 4, letterSpacing: 6 }}>Create An Account</Typography>
                <Box>
                    {!loading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-required"
                            label="Your Name"
                            type="text"
                            size="small"
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-required"
                            label="Your Email"
                            type="email"
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
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
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '1', m: 1 }}
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            name="password2"
                            onBlur={handleOnBlur}
                        />
                        <NavLink to="/login" style={{ textDecoration: "none" }} >
                            <Typography variant="body2"
                                sx={{ width: '1', my: 2, color: 'orangeRed' }}>Already have an Account? Please Login </Typography>
                        </NavLink>
                        <br />
                        <Button sx={{ width: '75%' }} variant="contained" color="warning" type="submit" >Register</Button>
                    </form>}
                    {loading && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
                    {user &&
                        <Alert severity="success">Registration Successful!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;