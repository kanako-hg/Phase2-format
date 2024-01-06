// import { a, b } from './export'
// import d from './export'

// console.log(a) //=> 100
// console.log(b(100)) //=> 200
// console.log(d) //=> def

import { b } from "./export";

let x = do {
  let tmp = b(1);
  tmp * tmp + 1;
};

console.log(x);
