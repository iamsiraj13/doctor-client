import { Box, Container, Grid } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./footer.css";

const footer = () => {
  return (
    <Box sx={{ flexGrow: 1, py: "80px" }} style={{backgroundColor:'#eee'}}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={3}>
            <ul style={{marginTop:'35px'}}>
              <li>
                <a href="#">Digital Care</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
              <li>
                <a href="#">Treatment</a>
              </li>
              <li>
                <a href="#">Total Extraction</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
              <h2>Services</h2>
            <ul>
              <li>
                <a href="#">Digital Care</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
              <li>
                <a href="#">Treatment</a>
              </li>
              <li>
                <a href="#">Total Extraction</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
          <h2>Oral Helth</h2>
            <ul>
              <li>
                <a href="#">Digital Care</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
              <li>
                <a href="#">Treatment</a>
              </li>
              <li>
                <a href="#">Total Extraction</a>
              </li>
              <li>
                <a href="#">Check Up</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <h2>Our Address</h2>
            <p>New York - 10100</p>
            <div className="social">
                <span><FacebookOutlinedIcon/></span>
                <span><GoogleIcon/></span>
                <span><TwitterIcon/></span> 
            </div>
            <div className="call">
                <p>Call Now</p>
                <button>+088521512</button>
            </div>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default footer;
