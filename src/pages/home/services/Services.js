import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../service/Service";

import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whiteing from "../../../assets/images/whitening.png";

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
          <Typography variant="h5" sx={{textAlign:'center',fontWeight:'400',textTransform:'uppercase' }}>
              OUR SERVICES
          </Typography>
          <Typography variant="h4" sx={{textAlign:'center',fontWeight:400, textTransform:'uppercase', color:'info.main',mb:2, }}>
            SERVICE we provided
          </Typography>
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
