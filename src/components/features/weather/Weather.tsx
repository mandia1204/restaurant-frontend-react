import React, { useReducer } from 'react';
import { Box, Typography } from '@mui/material';
import Search from './Search';
import WeatherList from './WeatherList';
import { Forecast } from '../../../types/components/Weather';

interface State {
  forecasts: Forecast[],
  location: string,
  searching: boolean,
  noDataAfterSearch: boolean
}

const weatherReducer = (state: State, action: any) => {
  console.log('action', action);
  switch (action.type) {
    case 'weather/searchCompleted':
      return { forecasts: action.forecasts, searching: false, location: action.location, noDataAfterSearch: false };
    case 'weather/searching':
      return { ...state, searching: action.searching };
    case 'weather/recordsNotFound':
      return { searching: false, forecasts: [], location: '', noDataAfterSearch: true };
    default:
      throw new Error();
  }
};

export function Weather() {
  const [state, dispatch] = useReducer(weatherReducer, { forecasts: [], location: '', searching: false, noDataAfterSearch: false });

  const contents = (
    <Box>
      <Search dispatch={dispatch} searching={state.searching} />
      {
        state.location
      && <Typography sx={{ color: 'secondary.dark' }} variant="h5" gutterBottom>Location: {state.location}</Typography>
      }
      {
        state.forecasts
       && state.forecasts.length > 1
       && <WeatherList forecasts={state.forecasts} />
      }
      {
        state.noDataAfterSearch && (
          <Box component="p">
            <em>Your search did not return any data.</em>
          </Box>
        )
      }
    </Box>
  );
  return contents;
}
