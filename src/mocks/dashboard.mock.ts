// eslint-disable-next-line
import webpackMockServer from 'webpack-mock-server'; 
import dashboardJson2 from './FullResponse2';
import dashboardJson from './FullResponse';

export default webpackMockServer.add((app, _) => {
  app.get('/dashboardApi/dashboard', (_req, res) => {
    const { anio } = _req.query;
    let response;
    if (anio && anio === '2018') {
      response = dashboardJson2;
    } else {
      response = dashboardJson;
    }

    res.json(response);
  });
});
