import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Review.css";
import review1 from "../../../assets/review/review1.jpg";
import review2 from "../../../assets/review/review2.jpg";
import review3 from "../../../assets/review/review3.jpg";

const Review = () => {
  return (
    <Box sx={{ flexGrow: 1, py: "50px" }}>
      <Container>
        <div className="section_title">
          <h4>Testimonial</h4>
          <h2>what's our patients says</h2>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={4}>
            <div className="reviewtext">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less distribu to
                using content here.
              </p>
              <div className="reviewer">
                <img src={review1} alt="" />
                <div className="reviewer__info">
                  <h5>Winson herry</h5>
                  <p className="company">California</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <div className="reviewtext">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less distribu to
                using content here.
              </p>
              <div className="reviewer">
                <img src={review2} alt="" />
                <div className="reviewer__info">
                  <h5>Winson herry</h5>
                  <p className="company">California</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <div className="reviewtext">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less distribu to
                using content here.
              </p>
              <div className="reviewer">
                <img src={review3} alt="" />
                <div className="reviewer__info">
                  <h5>Winson herry</h5>
                  <p className="company">California</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Review;
