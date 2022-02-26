import { Container } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import './Schedule.css';

const Schedule = () => {
  const schedules = [
    {
      id: 1,
      title: "Opening Hours",
      dec: "10.00 am - 6.00 pm",
      icon: <AccessTimeIcon />,
      background: "#1CC7C1",
    },
    {
      id: 2,
      title: "Visit Our Location",
      dec: "New York - 10100 Seatle",
      icon: <LocationOnIcon />,
      background: "#3A4256",
    },
    {
      id: 3,
      title: "Contact us now",
      dec: "+8909065652",
      icon: <PhoneInTalkIcon />,
      background: "#1CC7C1",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, py: "50px" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {schedules.map((schedule) => (
            <Grid item xs={4} sm={4} md={4} key={schedule.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: schedule.background,
                  padding:'20px',
                  borderRadius:'5px',
                  color:'#fff'
                }}
              >
                <div className="icon">{schedule.icon}</div>
                <div className="info">
                  <h2>{schedule.title}</h2>
                  <p>{schedule.dec}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Schedule;
