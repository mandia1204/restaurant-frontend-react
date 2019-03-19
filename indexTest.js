import { configure } from 'enzyme'; //eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; //eslint-disable-line

configure({ adapter: new Adapter() });

const testsContext = require.context('./src/', true, /.test$/);

testsContext.keys().forEach(testsContext);
