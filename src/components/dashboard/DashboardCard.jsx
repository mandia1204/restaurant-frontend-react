import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import * as colors from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';


const styles = {
    card: {
        backgroundColor: props => colors[props.card.color][400]
    },
    cardAction: {
        backgroundColor: props => colors[props.card.color][800]
    },
    cardContent: {
        color:'white'
    },
    title: {
        fontSize: '20pt'
    },
    cardValue: {
        fontSize: '40pt'
    }
};

const DashboardCard = ({classes, card}) => {
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid item className= {classes.title}>
                        {card.title}
                    </Grid>
                    <Grid item className= {classes.cardValue}>
                        {card.valueFormatted}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
            </CardActions>
        </Card>
    ); 
};

DashboardCard.propTypes = {
    classes: PropTypes.object.isRequired,
    card: PropTypes.object.isRequired
};

export default injectSheet(styles)(DashboardCard);