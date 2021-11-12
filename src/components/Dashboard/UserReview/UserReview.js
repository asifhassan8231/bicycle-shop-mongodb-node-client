import { Alert, Button, Container, Rating, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const UserReview = () => {
    const [open, setOpen] = React.useState(false);
    const { user } = useAuth();
    const initialInfo = { displayName: user.displayName };
    const [review, setReview] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleReviewSubmit = e => {
        axios.post('https://calm-journey-16674.herokuapp.com/reviews', review)
            .then(response => {
                if (response.data.acknowledged) {
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
            <Typography variant="h4" sx={{ my: 5 }}>Give Us A Review</Typography>
            <form onSubmit={handleReviewSubmit}>
                <TextField
                    disabled
                    defaultValue={user.displayName}
                    id="outlined-multiline-static"
                    label="Name"
                    type="text"
                    name="displayName"
                    sx={{ width: '75%' }}
                />
                <br />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={2}
                    sx={{ width: '75%' }}
                    type="text"
                    name="address"
                    onBlur={handleOnBlur}
                />
                <br />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Your Review"
                    multiline
                    rows={4}
                    sx={{ width: '75%' }}
                    type="text"
                    name="review"
                    onBlur={handleOnBlur}
                />
                <br />
                <br />
                <Typography component="legend">Help us to improve by giving a rating</Typography>
                <Rating
                    name="score"
                    size="large"
                    value={parseInt(review?.score)}
                    onChange={handleOnBlur}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" sx={{ width: '75%' }} color="warning">Submit</Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Thank You For Helping!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default UserReview;