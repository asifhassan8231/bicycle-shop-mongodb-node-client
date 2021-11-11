import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {

    const handleAdminSubmit = e => {

        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Make An Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    id="filled-multiline-flexible"
                    label="Email"
                    type="email"
                    variant="filled"
                    sx={{ width: '50%' }}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" color="warning">Submit</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;