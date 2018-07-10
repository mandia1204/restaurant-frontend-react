import test from 'tape';
import jwtParser from './jwtParser';

test('jwtParser.parse(), valid token, returns data', (assert) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6Im1hdHQiLCJpc3MiOiJzZWN1cml0eS5tYXR0Y29tcGFueS5jb20iLCJhdWQiOiJyZXN0YXVyYW50Lm1hdHRjb21wYW55LmNvbSIsImV4cCI6MTUzMTE4OTEwMn0.eedl-ZMvjbnlh1XQsNqZoaZGTah7wys2FqVvtZ8gKps';
    
    const result = jwtParser.parse(token);
    
    assert.equal(result.userName, 'matt', 'userName should match.');
    assert.equal(result.iss, 'security.mattcompany.com', 'iss should match.');
    assert.equal(result.aud, 'restaurant.mattcompany.com', 'aud should match.');
    assert.end();
});

test('jwtParser.parse(), null, undefined or empty token, returns null', (assert) => {
    let result = jwtParser.parse(null);
    assert.equal(result, null, 'should return null.');

    result = jwtParser.parse('');
    assert.equal(result, null, 'should return null.');

    result = jwtParser.parse(undefined);
    assert.equal(result, null, 'should return null.');
    assert.end();
});

test('jwtParser.parse(), invalid token, returns null', (assert) => {
    const token = 'fffeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJdd1c2VyTmFtZSI6Im1hdddHQiLCJpc3MiOiJzZWN1cml0eSff5tYXR0Y29tcGFueS5jb20iLCJhdWQiOiJyZXN0YXVyYW50Lm1hdHRjb21wYW55LmNvbSIsImV4cCI6MTUzMTE4OTEwMn0.eedl-ZMvjbnlh1XQsNqZoaZGTah7wys2FqVvtZ8gKps';
    const result = jwtParser.parse(token);
    
    assert.equal(result, null, 'should return null.');
    assert.end();
});