import * as React from "react";
import "./Table.css";
import { TableBody,Table ,Paper , TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import tweetts from "../../Data/tweets";

export default function BasicTable() {
  console.log(tweetts);

  return (
    <div className="Table mt-3">
      <h3>Twitts</h3>
      <TableContainer  component={Paper}>
        <Table  sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Twitt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tweetts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.created_at}
                </TableCell>
                <TableCell>{row.user.name}</TableCell>
                <TableCell>{row.text}</TableCell>
              </TableRow>
            ))}           
            
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
