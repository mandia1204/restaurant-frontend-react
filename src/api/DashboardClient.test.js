import tape from 'tape';
import _test from 'tape-promise';
const test = _test(tape);
import sinon from 'sinon';
import proxyquire from 'proxyquire';

test('DashboardClient.getDashboard(), passing filters, calls the api and returns promise', (assert) => {
    const filters = { year:2018, month: 2, ops:'ABC'};
    const spyGet = sinon.spy((url) => new Promise((resolve) => { resolve({data: url}); }));

    const HttpWrapperStub = () => {
        return {
            get: spyGet
        };
    };

    var client = proxyquire('./DashboardClient', {
        '../wrappers/HttpWrapper': { HttpWrapper: HttpWrapperStub }
    }).DashboardClient;
    
    const expectedUrl = '/dashboard?anio=2018&mes=2&ops=ABC';
    return client().getDashboard(filters).then(response => {
        assert.ok(spyGet.calledOnceWith(expectedUrl) , 'http called once with correct url');
        assert.equal(response.data, expectedUrl, 'Data should be returned');
        assert.end();
    });
    
});