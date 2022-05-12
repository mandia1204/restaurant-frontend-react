import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';
import { selectEvents } from '../../state/selectors';
import { AppEvent } from '../../types/Events';

const styles: Record<string, SxProps> = {
  title: {
    color: 'purple',
  },
  main: {
    backgroundColor: 'teal',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: { lg: 500, sm: 200 },
  },
};

function EventViewer() {
  const events = useSelector(selectEvents);
  const [eventList, setEventList] = useState<(AppEvent | null)[]>([]);

  useEffect(() => {
    if (events && events.notifications) {
      setEventList((list) => ([...list, events.notifications]));
    }
  }, [events]);

  return (
    <Box sx={styles.main}>
      <Box sx={styles.title}>Events ({eventList.length}):</Box>
      <button type="button" onClick={() => { setEventList([]); }}>clear</button>
      <ul>
        {eventList.map((e) => <li key={e?.id}>id: {e?.id}, payload: {JSON.stringify(e?.payload)}</li>)}
      </ul>
    </Box>
  );
}

export default EventViewer;
