import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

import Paper from '@mui/material/Paper';
import BookingModal from '../bookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking; 

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Grid item xs={12} sm={6} md={4}>  
            <Paper elevation={3} sx={{textAlign:'center', p:5}}>
                <Typography variant="h5" gutterBottom component="div" sx={{color:'info.main'}}>
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleOpen} variant="contained">Book Appoinment</Button>
                <BookingModal
                    setBookingSuccess={setBookingSuccess}
                    booking={booking}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    open={open}
                    setOpen={setOpen}
                    date={date}
                />
            </Paper>
        </Grid> 
    );
};

export default Booking;