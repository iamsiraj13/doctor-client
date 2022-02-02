import { 
  Card, 
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Service = ({ service }) => {
  return (
    <Card sx={{ minWidth: 275, boxShadow:0 }}>
      <CardMedia
        style={{width:'auto', height:'80px', margin:'0 auto'}}
        component="img"
        alt="green iguana"
        height="140"
        image={service.img}
      />
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign:'center' }} color="text.secondary" gutterBottom>
          {service.name}
        </Typography>
        <Typography variant="h5" component="div"></Typography> 
        <Typography variant="body2" sx={{textAlign:'center'}} color="text.secondary">
            {service.description}
        </Typography>
      </CardContent> 
    </Card>
  );
};

export default Service;
