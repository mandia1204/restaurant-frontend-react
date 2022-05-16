import React, { useState, useEffect, useCallback, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocationList } from './LocationList';
import useDebounce from '../../../hooks/useDebounce';
import WeatherApi from '../../../api/WeatherApi';
import './Search.scss';
import { WeatherLocation } from '../../../types/components/Weather';

interface Props {
  dispatch: React.Dispatch<any>,
  searching: boolean
}

const api = WeatherApi();
function Search({ dispatch, searching }: Props) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const isValidInput = (searchTerm.length > 2);

  const processFoundLocations = useCallback(async (foundLocations: WeatherLocation[]) => {
    if (foundLocations.length === 1) {
      setLocations([]);
      const { data: forecasts } = await api.getLocationWeather(foundLocations[0].id.toString());
      dispatch({ type: 'weather/searchCompleted', forecasts, location: foundLocations[0].locationName });
    } else if (foundLocations.length > 1) {
      setLocations(foundLocations);
      dispatch({ type: 'weather/searching', searching: false });
    } else {
      setLocations([]);
      dispatch({ type: 'weather/recordsNotFound', forecasts: [] });
    }
  }, []);

  useEffect(
    () => {
      if (!isValidInput) {
        return;
      }
      const fetchLocations = async () => {
        const { data: foundLocations } = await api.getLocations(searchTerm);
        processFoundLocations(foundLocations);
      };

      if (debouncedSearchTerm) {
        dispatch({ type: 'weather/searching', searching: true });
        fetchLocations();
      } else {
        setLocations([]);
        dispatch({ type: 'weather/searching', searching: false });
      }
    },
    [debouncedSearchTerm],
  );

  useEffect(() => {
    if (inputEl.current && !searching) {
      inputEl.current.focus();
      inputEl.current.selectionStart = inputEl.current.value.length;
      inputEl.current.selectionEnd = inputEl.current.value.length;
    }
  }, [searching]);

  const onLocationSelected = useCallback(async (selectedLocation: WeatherLocation) => {
    dispatch({ type: 'weather/searching', searching: true });
    processFoundLocations([selectedLocation]);
    if (inputEl.current) {
      inputEl.current.value = selectedLocation.locationName;
    }
  }, []);
  return (
    <Box>
      <Box>
        <TextField
          disabled={searching}
          inputRef={inputEl}
          className="search-input"
          placeholder="enter location"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        { searchTerm && !isValidInput && <Box>Enter at least 3 characters</Box>}
        {searching && <span className="searching"><em>Searching...</em></span>}
      </Box>
      { locations.length > 1 && <LocationList locations={locations} onLocationSelected={onLocationSelected} /> }
    </Box>
  );
}

export default Search;
