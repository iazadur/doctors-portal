import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';

const Appointments = ({ date }) => {
  const { user, token } = useAuth()
  const [appointments, setAppointmets] = useState([])
  const url = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`
  useEffect(() => {
    axios.get(url, { authorization: `Bearer ${token}` })
      .then((res) => {
        console.log(res.data);
        setAppointmets(res.data)
      })
  }, [date, url, token])




  return (
    <>
      <Typography variant="">Appointments: {appointments.length}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Service</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">$ {row.price}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">{row.payment ? "Paid" : <NavLink to={`/dashboard/payment/${row._id}`}><Button>Pay</Button></NavLink>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Appointments;