const f = () => 1;
let x = function () {
  let tmp = f();
  return tmp * tmp + 1;
}();
console.log(x);
