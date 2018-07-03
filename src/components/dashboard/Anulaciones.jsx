import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import AnulacionesItem from './AnulacionesItem';

const styles = {
    root: {
      backgroundColor: 'white'
    },
    list: {
        maxHeight: '350px',
        overflow:'auto'
    }
};

const Anulaciones = ({classes, anulaciones}) => (
    <div className={classes.root}>
        <List className={classes.list}>
            {anulaciones.map((a, k) => (
                <AnulacionesItem key={k} anulacion={a} />
            ))}
      </List>
    </div>
);

Anulaciones.propTypes = {
    classes: PropTypes.object.isRequired,
    anulaciones: PropTypes.array.isRequired
};

export default withStyles(styles)(Anulaciones);