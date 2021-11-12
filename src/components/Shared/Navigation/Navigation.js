import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();
    console.log(user);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#d84315' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <DirectionsBikeIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        VOLCANO BICYCLE
                    </Typography>
                    {user ? <Button color="inherit" onClick={logout}>Logout</Button> : <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login/Register</Button></Link>}
                </Toolbar>
            </AppBar>
            <AppBar position="static" sx={{ bgcolor: '#ff9e80', color: 'black' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>

                    <Link to="/home" style={{ textDecoration: 'none', marginRight: '20px' }}>
                        <Button sx={{ bgcolor: '#ff8a65', color: 'maroon', borderBottom: 1, borderColor: 'error.main', fontWeight: 600 }}>
                            Home
                        </Button>
                    </Link>

                    <Link to="/explore" style={{ textDecoration: 'none', marginRight: '20px' }}>
                        <Button sx={{ bgcolor: '#ff8a65', color: 'maroon', borderBottom: 1, borderColor: 'error.main', fontWeight: 300 }}>
                            Explore More
                        </Button>
                    </Link>

                    {user && <Link to="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>
                        <Button sx={{ bgcolor: '#ff8a65', color: 'maroon', borderBottom: 1, borderColor: 'error.main', fontWeight: 300 }}>
                            Dashboard
                        </Button>
                    </Link>}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;