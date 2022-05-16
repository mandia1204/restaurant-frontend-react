import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useDebounce from '../../../hooks/useDebounce';
import WeatherApi from '../../../api/WeatherApi';
import './Search.scss';
import { WeatherLocation } from '../../../types/components/Weather';

interface Props {
  dispatch: React.Dispatch<any>,
  searching: boolean
}

const api = WeatherApi();

const Search = forwardRef(({ dispatch, searching }: Props, ref : any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);
  const isValidInput = (searchTerm.length > 2);

  const processFoundLocations = useCallback(async (foundLocations: WeatherLocation[]) => {
    if (foundLocations.length === 1) {
      dispatch({ type: 'weather/locationFoundSingle', location: foundLocations[0].locationName, locationId: foundLocations[0].id });
    } else if (foundLocations.length > 1) {
      dispatch({ type: 'weather/receiveLocations', locations: foundLocations });
    } else {
      dispatch({ type: 'weather/recordsNotFound' });
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
        dispatch({ type: 'weather/receiveLocations', locations: [] });
      }
    },
    [debouncedSearchTerm],
  );

  return (
    <Box>
      <Box>
        <TextField
          disabled={searching}
          inputRef={ref}
          className="search-input"
          placeholder="enter location"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        { searchTerm && !isValidInput && <Box>Enter at least 3 characters</Box>}
        {searching && <span className="searching"><em>Searching...</em></span>}
      </Box>
    </Box>
  );
});

export default Search;
