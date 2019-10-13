import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import User from '../../../types/User';

const styles = ({ spacing }: Theme) => createStyles({
  root: {
    width: '100%',
    marginTop: spacing() * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

interface Props extends WithStyles<typeof styles> {
  users: User[];
}

const UsersTable = ({ classes, users }: Props) => (
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

export default withStyles(styles)(UsersTable);
