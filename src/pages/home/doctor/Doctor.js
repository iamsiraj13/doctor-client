import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import doctorpng from '../../../assets/images/doctor.png'
import './Doctor.css';
const Doctor = () => {
    return (
        <Box sx={{ flexGrow: 1, py: "50px" }}>
        <Container>
          <div className="section_title" style={{textAlign:'center'}}>
            <h4>Our Doctors</h4> 
          </div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <div className="doctor"> 
                  <img src={doctorpng} alt="" />
                  <div className="doctor_info" style={{textAlign:'center'}}>
                    <h3>Winson herry</h3>
                    <p className="company">+896564545</p>
                  </div> 
              </div>
            </Grid>  
            <Grid item xs={4} sm={4} md={4}>
              <div className="doctor"> 
                  <img src={doctorpng} alt="" />
                  <div className="doctor_info" style={{textAlign:'center'}}>
                    <h3>Dr Caudi</h3>
                    <p className="company">+896564545</p>
                  </div> 
              </div>
            </Grid>  
            <Grid item xs={4} sm={4} md={4}>
              <div className="doctor"> 
                  <img src={doctorpng} alt="" />
                  <div className="doctor_info" style={{textAlign:'center'}}>
                    <h3>Winson herry</h3>
                    <p className="company">+896564545</p>
                  </div> 
              </div>
            </Grid>  
          </Grid>
        </Container>
      </Box>
    );
};

export default Doctor;