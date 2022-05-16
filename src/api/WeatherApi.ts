import config from './apiConfig';
import { HttpWrapper } from '../wrappers/HttpWrapper';
import { Forecast, WeatherLocation } from '../types/components/Weather';

const http = HttpWrapper(config.weatherUri);
const WeatherApi = () => {
  const getLocations = (locationName: string) => http.get<WeatherLocation[]>(`/search?locationName=${locationName}`);
  const getLocationWeather = (woeid: number) => http.get<Forecast[]>(`/location/${woeid}`);

  return {
    getLocations,
    getLocationWeather,
  };
};

export default WeatherApi;
