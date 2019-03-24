import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import Colors from '../../types/Colors';
import CardType from '../../types/Card';

interface Props {
  classes: any;
  card: CardType;
}

const styles = {
  card: {
    backgroundColor: ({ card }: {card: CardType}) => (card.color ? Colors[card.color][400] : Colors.amber[400]),
  },
  cardAction: {
    backgroundColor: ({ card }: {card: CardType}) => (card.color ? Colors[card.color][800] : Colors.amber[400]),
  },
  cardContent: {
    color: 'white',
  },
  title: {
    fontSize: '20pt',
  },
  cardValue: {
    fontSize: '40pt',
  },
};

const DashboardCard = ({ classes, card }: Props) => (
  <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item className={classes.title}>
          {card.title}
        </Grid>
        <Grid item className={classes.cardValue}>
          {card.valueFormatted}
        </Grid>
      </Grid>
    </CardContent>
    <CardActions className={classes.cardAction} />
  </Card>
);

export default injectSheet(styles)(DashboardCard);
