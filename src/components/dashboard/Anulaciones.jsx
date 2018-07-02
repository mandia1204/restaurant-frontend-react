import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const styles = {
    card: {
        width: '100%',
        backgroundColor: 'Yellow'
    },
    cardAction: {
        backgroundColor: 'orange'
    }
};

const Anulaciones = ({classes}) => (
    <div>
        <Card className={classes.card}>
            <CardContent>
                ANULACIONES
            </CardContent>
            <CardActions className={classes.cardAction}>
                <span>Lista de anulaciones ...soon</span>
            </CardActions>
        </Card>
    </div>
);

Anulaciones.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Anulaciones);