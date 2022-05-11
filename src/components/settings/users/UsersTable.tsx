import React from 'react';
import { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import User from '../../../types/User';

const styles: Record<string, SxProps> = {
  root: {
    width: '100%',
    mt: 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

interface Props {
  users: User[];
}

function UsersTable({ users }: Props) {
  return (
    <Paper sx={styles.root}>
      <Table sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Is Admin</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{ user.isAdmin ? <CheckIcon /> : ''}</TableCell>
              <TableCell>
                <IconButton>
                  <Link to={`/settings/users/manage/${user.id}`}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UsersTable;
