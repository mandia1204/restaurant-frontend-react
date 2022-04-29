import React from 'react';
import { withStyles, createStyles, WithStyles } from '@mui/styles';
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
import { Theme } from '@mui/material/styles';
import User from '../../../types/User';

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    width: '100%',
    marginTop: spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

interface Props extends WithStyles<typeof styles> {
  users: User[];
}

function UsersTable({ classes, users }: Props) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
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

export default withStyles(styles)(UsersTable);
