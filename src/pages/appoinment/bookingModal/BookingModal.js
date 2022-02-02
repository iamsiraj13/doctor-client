import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade'; 
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
  };
const BookingModal = ({open,setOpen,handleClose,handleOpen,booking, date, setBookingSuccess}) => {
 
  const {user} = useAuth();
    const {name, time,space}= booking;
    const initialBookingInfo = {
      patientName: user.displayName,
      email: user.email,
      phone: ''
    }

    const [ bookingInfo, setBookingInfo] = useState(initialBookingInfo);



  

    const handleOnBlur=(e)=>{

      const field = e.target.name;
      const value= e.target.value;

      const newInfo = {...initialBookingInfo};
      newInfo[field] = value; 
      setBookingInfo(newInfo);
      
    }

    const handleBookingSubmit=(e)=>{

      const appointment = {
        ...initialBookingInfo,
        time,
        date:date.toLocaleDateString(),
        serviceName: name
      }
      // send to server
      fetch('http://localhost:5000/appointments',{
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
        if( data?.insertedId){
          setBookingSuccess(true);
          handleClose(); 
        }
      });

      e.preventDefault(); 
  }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography> 
            <form onSubmit={handleBookingSubmit}>
                <TextField 
                disabled
                size="small"
                sx={{my:2, width:'100%'}}
                defaultValue={time}  
                />
                <TextField
                onBlur={handleOnBlur}
                name="patientName"
                label="Your Name"
                size="small"
                defaultValue={user.displayName}
                sx={{mb:2, width:'100%'}}
                /> 
                <TextField
                onBlur={handleOnBlur}
                name="phone"
                label="Phone Number"
                size="small"
                sx={{mb:2, width:'100%'}}
                /> 
                <TextField
                onBlur={handleOnBlur}
                name="email"
                label="E-mail"
                size="small"
                defaultValue={user.email}
                sx={{mb:2, width:'100%'}}
                /> 
                <TextField
                disabled
                label="Date"
                size="small" 
                defaultValue={date.toDateString()}
                sx={{mb:2, width:'100%'}}
                /> 
                <Button variant="contained" type="submit">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;