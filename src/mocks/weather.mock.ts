// eslint-disable-next-line
import webpackMockServer from 'webpack-mock-server'; 
import axios from 'axios';

const http = axios.create({
  baseURL: 'https://www.metaweather.com/api/',
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default webpackMockServer.add((app, _) => {
  app.get('/weatherApi/search', async (_req, res) => {
    const { locationName } = _req.query;
    const response = await http.get(`location/search/?query=${locationName}`);
    const converted = response.data.map((c: any) => ({ id: c.woeid, locationName: c.title }));
    res.json(converted);
  });

  app.get('/weatherApi/location/:woeid', async (_req, res) => {
    const { woeid } = _req.params;
    const response = await http.get(`location/${woeid}/`);
    const converted = response.data.consolidated_weather
      .map((c: any) => ({ id: c.id,
        date: new Date(c.created).toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        temperatureC: c.the_temp,
        temperatureF: c.the_temp,
        state: c.weather_state_name,
        stateAbbr: c.weather_state_abbr }));
    res.json(converted);
  });
});
