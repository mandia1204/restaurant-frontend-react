/* eslint-disable */

import func from './testComp';
import test from 'tape';
// var test = require('tape');
// console.log(func.default);
test('timing test', (t) => {
    let myvar = 1;
    const oli = 0;
    myvar = 1+ oli;
    const f = func();
    for(var y=0; y<=5; y++){
      myvar +=1;
    }
    console.log(myvar);
    t.equal(7, myvar);
    t.equal(1, 1);
    t.end();
});