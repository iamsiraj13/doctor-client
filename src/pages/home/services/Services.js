import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../service/Service";

import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whiteing from "../../../assets/images/whitening.png";
import './Services.css';

const services = [
  {
    id:1,
    name: "Fluoride Treatment",
    description: "lorem ipsum doler sit amet",
    img: fluoride,
  },
  {
    id:2,
    name: "Cavity Filling",
    description: "lorem ipsum doler sit amet",
    img: cavity,
  },
  {
    id:3,
    name: "Teath Whitening",
    description: "lorem ipsum doler sit amet",
    img: whiteing,
  },
];

export default function Services() {
  return (
    <Box sx={{ flexGrow: 1, py:'50px' }}>
      <Container>
          <div className="service_title">
            <h4>OUR SERVICES</h4>
            <h2>Services We Provide</h2>
          </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service.id}>
              <Service
                service={service}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
