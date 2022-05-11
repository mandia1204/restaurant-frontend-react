import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createStyles, WithStyles, withStyles } from '@mui/styles';
import { selectEvents } from '../../state/selectors';
import { AppEvent } from '../../types/Events';

const styles = createStyles({
  title: {
    color: 'red',
  },
  body: {
    backgroundColor: 'teal',
    textAlign: 'center',
  },
});

type Props = WithStyles<typeof styles>

function EventViewer({ classes }: Props) {
  const events = useSelector(selectEvents);
  const [eventList, setEventList] = useState<(AppEvent | null)[]>([]);

  useEffect(() => {
    if (events && events.notifications) {
      setEventList((list) => ([...list, events.notifications]));
    }
  }, [events]);

  return (
    <div className={classes.body}>
      <div className={classes.title}>Events ({eventList.length}):</div>
      <button type="button" onClick={() => { setEventList([]); }}>clear</button>
      <ul>
        {eventList.map((e) => <li key={e?.id}>id: {e?.id}, payload: {JSON.stringify(e?.payload)}</li>)}
      </ul>
    </div>
  );
}

export default withStyles(styles)(EventViewer);
