import tape from 'tape';
import _test from 'tape-promise';
import sinon from 'sinon';
import * as wrapperFunctions from '../wrappers/HttpWrapper';

const test = _test(tape);

test('[DashboardClient]', (t) => {
  t.test('--getDashboard, passing filters, calls the api and returns promise', (a) => {
    const filters = { year: 2018, month: 2, ops: 'ABC' };

    const spyGet = sinon.spy(url => new Promise((resolve) => {
      resolve({ data: url });
    }));

    const httpWrapperStub = sinon.stub(wrapperFunctions, 'HttpWrapper').callsFake(() => ({
      get: spyGet,
    }));

    const dashboardClient = require('./DashboardClient').DashboardClient;// eslint-disable-line global-require

    const expectedUrl = '/dashboard?anio=2018&mes=2&ops=ABC';
    return dashboardClient().getDashboard(filters).then((response) => {
      a.ok(spyGet.calledOnceWith(expectedUrl), 'http called once with correct url');
      a.equal(response.data, expectedUrl, 'Data should be returned');
      httpWrapperStub.restore();
      a.end();
    });
  });
  t.skip('');
});
