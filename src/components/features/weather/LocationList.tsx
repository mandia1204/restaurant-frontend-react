import React from 'react';
import Box from '@mui/material/Box';
import './LocationList.scss';
import { WeatherLocation } from '../../../types/components/Weather';

interface Props {
  locations: WeatherLocation[],
  onLocationSelected: any
}

export function LocationList({ locations, onLocationSelected }: Props) {
  return (
    <div className="location-list">
      <div className="title">Select location:</div>
      <div className="location-list-items">
        {locations.map((location: WeatherLocation) => (
          <Box
            className="location-list-item"
            key={location.id}
            onClick={() => onLocationSelected(location)}
          >{location.locationName}
          </Box>
        ))}
      </div>
    </div>
  );
}
