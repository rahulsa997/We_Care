import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount,tempx) {
  return { id, date, name, shipTo, paymentMethod, amount ,tempx};
}

const rows = [
  createData(0, '22 June, 2020', 'Ram Singh', '7-B', 'RS7B23', 98.6,'Yes'),
  createData(1, '22 June, 2020', 'Gopal Yadav', '4-B', 'GY4B14', 98.5,'Yes'),
  createData(2, '22 June, 2020', 'Ansh Bansal', '8-C', 'AB8C7', 98.9,'Yes'),
  createData(3, '22 June, 2020', 'Krish Agwarwal', '9-A', 'KA9A18', 98.2,'Yes'),
  createData(4, '22 June, 2020', 'Tanmay Singh', '10-A, ', 'TS10A23', 100.1, 'No'),
];

function preventDefault(event) {'Yes'
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Class Section</TableCell>
            <TableCell>Student Unique ID</TableCell>
            <TableCell align="right">Body Temp</TableCell>
            <TableCell align="right">Yes/No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.tempx}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Students
        </Link>
      </div>
    </React.Fragment>
  );
}