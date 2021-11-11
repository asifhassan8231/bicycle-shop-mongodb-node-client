import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

const UserReview = () => {

    const handleReviewSubmit = e => {

        e.preventDefault();
    }

    return (
        <Container>
            <Typography variant="h4" sx={{ my: 5 }}>Give Us A Review</Typography>
            <form onSubmit={handleReviewSubmit}>
                <TextField
                    id="outlined-multiline-static"
                    label="Name"
                    type="text"
                    sx={{ width: '50%' }}
                />
                <br />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Your Review"
                    multiline
                    rows={4}
                    sx={{ width: '50%' }}
                />
                <br />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Please Give Us A Score(0-5)"
                    type="number"
                    sx={{ width: '50%' }}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" sx={{ width: '50%' }} color="warning">Submit</Button>
            </form>
        </Container>
    );
};

export default UserReview;