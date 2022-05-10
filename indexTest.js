const testsContext = require.context('./src/', true, /.test$/);
// const testsContext = require.context('./src/', true, /Home.test$/);

testsContext.keys().forEach(testsContext);
