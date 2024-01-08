let arr = [1, 2, 3, 4, 5, 6];

const calculate = (a, b, operation) => {
  return operation(a, b);
};

function addition(a, b) {
  return a + b;
}

const result = calculate(arr[5], arr[3], addition);

console.log(result);

const val3 = (num) => {
    return num==3;
}

const valChck=val3(find(arr));

console.log(valChck);

// Array call back functions
// find()
// findIndex()
// forEeach()
// map()
// filter()
// every()
// some()
