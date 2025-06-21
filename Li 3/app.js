// Union 
var user = {
    name: "Irfan Ullah",
    age: 24,
    skills: ["ReactJs", "NodeJs"]
};
function greet(user) {
    console.log("Hi, I'm ".concat(user.name, ", my age is ").concat(user.age, " and i have skills like ").concat(user.skills));
}
;
greet(user);
