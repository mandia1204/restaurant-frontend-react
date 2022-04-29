import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import injectSheet from 'react-jss';
import Grid from '@mui/material/Grid';
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

function DashboardCard({ classes, card }: Props) {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Grid container direction="column" alignItems="center" justifyContent="center">
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
}

export default injectSheet(styles)(DashboardCard);
