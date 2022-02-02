import React from "react";
import bannerHero from "../../../assets/images/chair.png";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1,padding:'50px' }}>
      <Container>
        <Grid container spacing={2} sx={{display:'flex', alignItems:'center'}}>
          <Grid item xs={12} md={5}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="h6" sx={{fontWeight:300, color:'gray'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              qui cum repudiandae distinctio eligendi similique nihil
              voluptatibus quidem molestiae ducimus!
            </Typography>
            <Button variant="contained">Get Started</Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src={bannerHero} alt=""  style={{height:'350px', width:'100%'}}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
