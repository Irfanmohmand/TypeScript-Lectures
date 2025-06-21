// 1. Function return type

// function add(num1: number, num2: number): number {
//   return num1 + num2;
// };

// function greet(name: string): void {
//   console.log(`Hi ${name}`);
// };


// let combineFunction = 10; // invalid bcs we should add function
// let combineFunction = function () { };
// combineFunction = add;
// combineFunction = greet;
// console.log(combineFunction(1, 2));

// let combineFunction: (a: number, b: number) => number;

// // we can call add function not greet bcs the number a and b and the type number match to add function.
// combineFunction = add;

// console.log(combineFunction(100, 200));



// 2. Function types and callbacks
// type CB = (n: number) => void;
// function addHandle(num1: number, num2: number, cb: CB) {
//   const result = num1 + num2;
//   cb(result);
// };

// addHandle(10, 20, (result: number) => {
//   console.log("the result is: ", result);
// })


// 2. Function types and callbacks other example
function addHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
};

function showResult(n: number) {
  console.log(`The result is: `, n);
};

addHandle(10, 20, showResult);



