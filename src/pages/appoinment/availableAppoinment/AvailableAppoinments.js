import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Booking from "../booking/Booking";
import {Alert, Container, Typography} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "04.00 PM - 05.00 PM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "03.00 PM - 04.00 PM",
    space: 15,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "02.00 PM - 03.00 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "06.00 PM - 07.00 PM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Transform",
    time: "09.00 PM - 10.00 PM",
    space: 8,
  },
  {
    id: 6,
    name: "Teeth Renew",
    time: "07.00 PM - 08.00 PM",
    space: 12,
  },
];

const AvailableAppoinments = ({ date }) => {

  const [ bookingSuccess, setBookingSuccess ] = useState(false);

  return (
    <Container>
      <Typography variant='h4' style={{textAlign:'center',marginBottom:'20px'}}>Available Appoinments <span style={{color:'green' , fontWeight:'bold'}}>{date.toDateString()}</span></Typography>
      {
       bookingSuccess && <Alert serverity="success">Booking Successfull</Alert> 
      }
        
      <Grid container spacing={2}>
        {
            bookings.map(booking=><Booking setBookingSuccess={setBookingSuccess} date={date} key={booking.id} booking={booking}/>)
        }
      </Grid>
      <ToastContainer />
    </Container>
  );
};

export default AvailableAppoinments;
