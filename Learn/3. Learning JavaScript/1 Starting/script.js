let a = 100;
let b = 134;
let name = "Ram";

console.log("Sum of a and b is ", a + b);

const constantVal = 33;
console.log("Constant Value = ", constantVal);
console.log("Name = ", name);
console.log("Type is ", typeof constantVal);

let c = 11;
c = String(c);
console.log(c);
c = Boolean(c);
console.log(c);
c = Number(c);
console.log(c);

function multiplyNum(a, b) {
  return a * b;
}

console.log(multiplyNum(a, b));

function sum(a, b) {
  console.log(a + b);
}

sum(c, c);