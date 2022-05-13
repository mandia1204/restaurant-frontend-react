import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
import { selectEvents } from '../../state/selectors';
import { AppEvent } from '../../types/Events';

const styles: Record<string, SxProps> = {
  title: {
    color: 'secondary.main',
  },
  main: {
    backgroundColor: 'info.main',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: { lg: 500, sm: 200 },
  },
  header: {
    borderBottom: 'solid 1px',
    borderBottomColor: 'secondary.main',
    display: 'flex',
    justifyContent: 'space-between',
    p: 1,
  },
};

function EventViewer() {
  const events = useSelector(selectEvents);
  const [eventList, setEventList] = useState<(AppEvent | null)[]>([]);
  useEffect(() => {
    if (events && events.notifications) {
      setEventList((list) => ([...list, events.notifications]));
    }
    if (events && events.settingsMenuChanged) {
      setEventList((list) => ([...list, events.settingsMenuChanged]));
    }
  }, [events]);

  return (
    <Box sx={styles.main}>
      <Box sx={styles.header}>
        <Box sx={styles.title}>Events ({eventList.length}):</Box>
        <Button color="secondary" variant="outlined" onClick={() => { setEventList([]); }}>Clear</Button>
      </Box>
      <Box component="ul" sx={{ p: 1 }}>
        {eventList.map((e) => <li key={e?.id}>id: {e?.id}, payload: {JSON.stringify(e?.payload)}</li>)}
      </Box>
    </Box>
  );
}

export default EventViewer;
