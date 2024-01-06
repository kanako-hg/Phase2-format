const f = () => 1;

let x = do {
  let tmp = f();
  tmp * tmp + 1;
};

console.log(x);
