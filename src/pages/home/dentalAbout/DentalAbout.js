import React from 'react';
import './DentalAbout.css';
import treatment from '../../../assets/images/treatment.png'
import { Box, Container, Grid } from '@mui/material';
const DentalAbout = () => {
    return (
        <Box sx={{ flexGrow: 1, py: "50px" }}>
        <Container> 
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{display:'flex', alignItems:'center'}}
          >
            <Grid item xs={4} sm={4} md={4}>
              <div className="dentalbox">
              <img src={treatment} alt="" />
              </div>
            </Grid> 
            <Grid item xs={4} sm={4} md={6}>
              <div className="dental_info"> 
              <h2>Exception Dental Care, on Your Terms</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ducimus dolorem dolor provident incidunt ullam quas in asperiores nesciunt consectetur hic? At perspiciatis minus totam tempora doloribus. Quae, quod cupiditate. </p>
              <button>learn more</button>
              </div>
            </Grid> 
          </Grid>
        </Container>
      </Box>
    );
};

export default DentalAbout;