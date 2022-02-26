import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from '../../../hooks/useAuth'
import { Typography } from "@mui/material";
 

const Appoinments = ({date}) => {
  const { user, token } = useAuth();
  const [appoitments, setAppointments] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date}`,{
        headers:{
          'authorization': `Bearer ${token}`
        }
      })
      .then( res => res.json())
      .then( data => setAppointments(data))
  }, [date, user.email]);
  return (
    <>
      <Typography variant='h5'>All the Appointments:{appoitments.length}</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Schedule</TableCell> 
              <TableCell>Service</TableCell> 
              <TableCell>Action</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {appoitments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell>{row.time}</TableCell> 
                <TableCell>{row.serviceName}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Appoinments;
