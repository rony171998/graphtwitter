import * as React from "react";
import "./Table.css";
import { TableBody,Table ,Paper , TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import tweetts from "../../Data/tweets";

export default function BasicTable() {
  const formaterdate = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    const hour = newDate.getHours();
    const minutes = newDate.getMinutes();
    const year = newDate.getFullYear();
    return `${hour}:${minutes} ${day}/${month}/${year}`;
    
  };

  return (
    <div className="Table">
      <h3>Tweets</h3>
      <TableContainer  component={Paper}>
        <Table  sx={{ minWidth: 650  }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Twitt</TableCell>
              <TableCell>Followers</TableCell>
              <TableCell>Frients</TableCell>
              <TableCell>Likes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tweetts.map((tweet , index) => (
              <TableRow
                key={tweet.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {formaterdate(tweet.created_at)}
                </TableCell>
                <TableCell>{tweet.user.name}</TableCell>
                <TableCell >{tweet.text}</TableCell>
                <TableCell>{tweet.user.followers_count}</TableCell>
                <TableCell>{tweet.user.friends_count}</TableCell>
                <TableCell>{tweet.favorite_count}</TableCell>
                
              </TableRow>
            ))}           
            
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
}
