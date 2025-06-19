function add(num1: number, num2: number, printResult: boolean, someText: string) {
  if (printResult) {
    console.log(`${someText} ${num1 + num2}`);
  }
  else {
    return num1 + num2;
  }
};


const n1 = 30;
const n2 = 30;
const printResult = true;
const someText = "Sume of two numbers is: "

add(n1, n2, printResult, someText);