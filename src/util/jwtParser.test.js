import test from 'tape';
import { parse } from './jwtParser';

test('[jwtParser]', (t) => {
  t.test('--parse, valid token, returns data', (a) => {
    // eslint-disable-next-line
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6Im1hdHQiLCJpc3MiOiJzZWN1cml0eS5tYXR0Y29tcGFueS5jb20iLCJhdWQiOiJyZXN0YXVyYW50Lm1hdHRjb21wYW55LmNvbSIsImV4cCI6MTUzMTE4OTEwMn0.eedl-ZMvjbnlh1XQsNqZoaZGTah7wys2FqVvtZ8gKps';

    const result = parse(token);

    a.equal(result.userName, 'matt', 'userName should match.');
    a.equal(result.iss, 'security.mattcompany.com', 'iss should match.');
    a.equal(result.aud, 'restaurant.mattcompany.com', 'aud should match.');
    a.end();
  });

  t.test('--parse, null, undefined or empty token, returns null', (a) => {
    let result = parse(null);
    a.equal(result, null, 'should return null.');

    result = parse('');
    a.equal(result, null, 'should return null.');

    result = parse(undefined);
    a.equal(result, null, 'should return null.');
    a.end();
  });

  t.test('--parse, invalid token, returns null', (a) => {
    // eslint-disable-next-line
    const token = 'fffeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJdd1c2VyTmFtZSI6Im1hdddHQiLCJpc3MiOiJzZWN1cml0eSff5tYXR0Y29tcGFueS5jb20iLCJhdWQiOiJyZXN0YXVyYW50Lm1hdHRjb21wYW55LmNvbSIsImV4cCI6MTUzMTE4OTEwMn0.eedl-ZMvjbnlh1XQsNqZoaZGTah7wys2FqVvtZ8gKps';
    const result = parse(token);

    a.equal(result, null, 'should return null.');
    a.end();
  });
  t.skip('');
});
