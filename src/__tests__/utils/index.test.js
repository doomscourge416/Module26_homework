// const sum = require('../../utils/index.js'); //math-utils

// test('adds 1 + 2 to equal 3', () => { // строчка - название теста
//    result = sum(1,2);
//    expect(result).toBe(3);
// });

// test('multiply 1 and 0  equal 1', () => { // строчка - название теста
//   const result = multiply(1,0);
//   expect(result).toBe(0);
// });



// -----------------------------------------------------------------



// const multiply = require('../../utils/multiply.js'); //math-utils

// // чтобы пропустить тест или сьют, предписываем х перед...
// xdescribe("test multiply",()=>{

//   it('multiply 1 and 0  equal 0', () => { // строчка - название теста
//     const result = multiply(1,0);
//     expect(result).toBe(0);
//   }),

//   it('multiply 1 and 1  equal 1', () => { // строчка - название теста
//     const result = multiply(1,1);
//     expect(result).toBe(1);
//   })

// });

// describe("test multiply 2",()=>{

//   it('multiply 2 and 0  equal 0', () => { // строчка - название теста
//     const result = multiply(2,0);
//     expect(result).toBe(0);
//   }),

//   it('multiply 2 and 1  equal 2', () => { // строчка - название теста
//     const result = multiply(2,1);
//     expect(result).toBe(2);
//   })

// });



// -----------------------------------------------------------------
// транспилируем из es6 в es5 через npm i --save-dev babel-jest @babel/core @babel/preset-env, который использует JEST 
// только установки недостаточно, необходимо добавить в проект файл babel.config.js

import {multiply} from '../../utils/multiply.js';

// чтобы пропустить тест или сьют, предписываем х перед...
xdescribe("test multiply",()=>{

  it('multiply 1 and 0  equal 0', () => { // строчка - название теста
    const result = multiply(1,0);
    expect(result).toBe(0);
  }),

  it('multiply 1 and 1  equal 1', () => { // строчка - название теста
    const result = multiply(1,1);
    expect(result).toBe(1);
  })

});

xdescribe("test multiply 2",()=>{

  it('multiply 2 and 0  equal 0', () => { // строчка - название теста
    const result = multiply(2,0);
    expect(result).toBe(0);
  }),

  it('multiply 2 and 1  equal 2', () => { // строчка - название теста
    const result = multiply(2,1);
    expect(result).toBe(2);
  })

});


// -----------------------------------------------------------------


