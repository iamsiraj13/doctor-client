import { Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../shared/calendar/Calendar';
import Appoinments from '../appoinments/Appoinments';

const DashboardHome = ({date, setDate}) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Calendar date={date} setDate={setDate} />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Appoinments date={date}></Appoinments>
            </Grid>
          </Grid> 
    );
};

export default DashboardHome;