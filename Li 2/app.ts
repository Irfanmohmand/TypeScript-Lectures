// Object Array Tuple enum
// 
// 1. Object
// const person: {
//   firstName: string;
//   age: number;
//   xyz: {
//     address: string;
//     code: number
//   }
// } = {
//   firstName: "Irfan Ullah",
//   age: 24,
//   xyz: {
//     address: "Takht Bhai",
//     code: 12
//   }
// };

// 2. Array
// const person: {
//   firstName: string;
//   age: number;
//   skills: string[] // If we want just numbers in skills like [1,2,3,4] so we can define numbers like that --> skills: number[]
// } = {
//   firstName: "Irfan Ullah",
//   age: 24,
//   skills: ["ReactJs", "NodeJs"]
// };



// let favouriteLanguage1: string[];
// favouriteLanguage1 = ["English", "Urdu"];


// let favouriteLanguage2: any[];
// favouriteLanguage2 = ["English", "Urdu", 12, true]; // Loose typeScript power

// console.log(favouriteLanguage1, favouriteLanguage2);


// console.log(person)


// 3. Tuple
// const person: {
//   firstName: string,
//   age: number,
//   skills: string[],
//   products: [number, string] // Fixed array of two types 0-> index 10, and 1-> index Dell
// } = {
//   firstName: "Irfan Ullah",
//   age: 24,
//   skills: ["ReactJs", "NodeJs"],
//   products: [10, "Dell"]
// };

// console.log(person);


// person.products = [10, "Dell", "Dell2"]; // Not valid bcs tuple have fixed two thing number and string, so we are going to add another string

// person.products[1] = 20 // This is invalid bcs in the product the first index have Dell mean string we can't add number

// console.log(person);



// 4. enum

enum Role { ADMIN, AUTHOR, READ_USER_ONLY };

const person = {
  name: "Irfan Ullah",
  age: 24,
  skills: ["REACTJS", "NODEJS"],
  products: ["dell", 10],
  role: Role.READ_USER_ONLY
};

if (person.role === Role.ADMIN) {
  console.log("Admin");
} else if (person.role === Role.AUTHOR) {
  console.log("Author");
}
else {
  console.log("Read User Only");

}
