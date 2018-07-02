import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const styles = {
    card: {
        backgroundColor: 'red'
    },
    cardAction: {
        backgroundColor: 'pink'
    }
};

const DashboardCard = ({classes}) => (
    <div>
        <Card className={classes.card}>
            <CardContent>
                Oliii
            </CardContent>
            <CardActions className={classes.cardAction}>
                <span>footer</span>
            </CardActions>
        </Card>
    </div>
);

DashboardCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardCard);