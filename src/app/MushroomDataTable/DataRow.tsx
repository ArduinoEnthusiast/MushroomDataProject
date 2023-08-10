import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface RowProps {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export default function TableRowComponent(props: RowProps) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell align="right">{props.calories}</TableCell>
      <TableCell align="right">{props.fat}</TableCell>
      <TableCell align="right">{props.carbs}</TableCell>
      <TableCell align="right">{props.protein}</TableCell>
    </TableRow>
  );
}



