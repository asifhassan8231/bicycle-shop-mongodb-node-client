import { Alert, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    e.target.reset();
                    setOpen(true);
                }
            })
        e.preventDefault();
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="filled-multiline-flexible"
                    label="Email"
                    type="email"
                    variant="filled"
                    sx={{ width: '75%' }}
                    onBlur={handleOnBlur}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" color="warning">Submit</Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Admin Added Successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default MakeAdmin;