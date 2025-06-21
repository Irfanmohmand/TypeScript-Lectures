// Union 

// union denoted by | when we want to log both string and number value so we use union using |
// function combine(num1: number | string, num2: number | string) {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     result = num1 + num2;
//   }
//   else {
//     result = num1.toString() + num2.toString();
//   };
//   return result
// };

// const sum = combine(10, 20);
// const combineString = combine("Irfan", " mohmand")
// console.log(sum, combineString);



// 2. Literal Type
// in literal we can give anything to the value to accept like conversiontype instead of number,boolean and string;
// function combine2(num1: number | string, num2: number | string, coversionType: "as-number" | "as-string") {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number" || coversionType === "as-number") {
//     result = +num1 + +num2;
//   }
//   else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// };

// const sum = combine2("10", "20", "as-number");
// const sum2 = combine2(10, 50, "as-number");
// const combineName = combine2("Irfan", "mohmand", "as-string");

// console.log(sum, sum2, combineName);

// 🧪 Now Let's See the Function Calls
// 1️⃣ const sum = combine2("10", "20", "as-string");
// Inputs are: "10" and "20"(strings)

// conversionType = "as-string"

// So it joins them as strings: "10" + "20" = "1020"

// 2️⃣ const sum2 = combine2(10, 50, "as-number");
// Inputs are: 10 and 50(numbers)

// conversionType = "as-number"

// So it adds them: 10 + 50 = 60

// 3️⃣ const combineName = combine2("Irfan", "mohmand", "as-string");
// Inputs are: "Irfan" and "mohmand"(strings)

// conversionType = "as-string"

// So it joins them: "Irfan" + "mohmand" = "Irfanmohmand"


// 4. ALIAS TYPES

// type Combinable = number | string;
// type ConversionType = "as-number" | "as-string"

// function combine2(num1: Combinable, num2: Combinable, coversionType: ConversionType) {
//   let result;
//   if (typeof num1 === "number" && typeof num2 === "number" || coversionType === "as-number") {
//     result = +num1 + +num2;
//   }
//   else {
//     result = num1.toString() + num2.toString();
//   }
//   return result;
// };

// const sum = combine2("10", "20", "as-number");
// const sum2 = combine2(10, 50, "as-number");
// const combineName = combine2("Irfan", "mohmand", "as-string");

// console.log(sum, sum2, combineName);


// 5. Best example of type in Ts
type User = {
  name: string,
  age: number,
  skills: string[]
};

const user: User = {
  name: "Irfan Ullah",
  age: 24,
  skills: ["ReactJs", "NodeJs"]
};


function greet(user: User) {
  console.log(`Hi, I'm ${user.name}, my age is ${user.age} and i have skills like ${user.skills}`);
};

greet(user);

