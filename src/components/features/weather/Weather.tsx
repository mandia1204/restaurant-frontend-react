import React, { useReducer, useEffect, useCallback, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import LocationSearch from './LocationSearch';
import WeatherList from './WeatherList';
import WeatherApi from '../../../api/WeatherApi';
import { Forecast, WeatherLocation } from '../../../types/components/Weather';
import { LocationList } from './LocationList';

interface State {
  forecasts: Forecast[],
  locations: WeatherLocation[],
  location: string,
  locationId: number,
  searching: boolean,
  noDataAfterSearch: boolean
}

const initialState: State = { forecasts: [], locations: [], location: '', locationId: 0, searching: false, noDataAfterSearch: false };
const weatherReducer = (state: State, action: any): State => {
  console.log('action', action);
  switch (action.type) {
    case 'weather/locationFoundSingle':
      return { ...state, locations: [], location: action.location, locationId: action.locationId, noDataAfterSearch: false };
    case 'weather/searching':
      return { ...state, searching: action.searching };
    case 'weather/recordsNotFound':
      return { ...initialState, noDataAfterSearch: true };
    case 'weather/recieveLocation':
      return { ...state, locations: [], location: action.location, locationId: action.locationId };
    case 'weather/receiveLocations':
      return { ...state, searching: false, locations: action.locations };
    case 'weather/receiveForecasts':
      return { ...state, searching: false, forecasts: action.forecasts };
    default:
      throw new Error();
  }
};

const api = WeatherApi();

export function Weather() {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const { location, locationId, locations, searching } = state;
  const searchEl = useRef<HTMLInputElement>(null);

  const fetchForecasts = useCallback(async (locationIdParam: number) => {
    const { data: forecasts } = await api.getLocationWeather(locationIdParam);
    dispatch({ type: 'weather/receiveForecasts', forecasts });
  }, []);

  useEffect(() => {
    if (locationId === 0) return;
    fetchForecasts(locationId);
  }, [locationId]);

  useEffect(() => {
    if (searchEl.current && !searching) {
      searchEl.current.focus();
      searchEl.current.selectionStart = searchEl.current.value.length;
      searchEl.current.selectionEnd = searchEl.current.value.length;
    }
  }, [searching]);

  const onLocationSelected = useCallback(async (selectedLocation: WeatherLocation) => {
    dispatch({ type: 'weather/searching', searching: true });
    dispatch({ type: 'weather/recieveLocation', location: selectedLocation.locationName, locationId: selectedLocation.id });
  }, []);

  const contents = (
    <Box>
      <LocationSearch ref={searchEl} dispatch={dispatch} searching={state.searching} />
      { locations.length > 1 && <LocationList locations={locations} onLocationSelected={onLocationSelected} /> }
      {
        location
      && <Typography sx={{ color: 'secondary.dark', mt: 2 }} variant="h5" gutterBottom>Location: {location}</Typography>
      }
      {
        state.forecasts.length > 0 && <WeatherList forecasts={state.forecasts} />
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
