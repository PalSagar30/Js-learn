//singleton =>if you build an obkject with constructor that is singleton but if you build this with literals then it is not singleton


// Object.create => this is constructor type object , this is singleton

//object literals

const mySy = Symbol("key1")
const jsUser = {
    name: "sagar",
    "full Name" : "Sagar Pal",
    age: 18,
    [mySy]: "mykey1",
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Staurday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full Name);
// console.log(jsUser["full Name"]);
// console.log(jsUser.mySy); => this gives undefined
// console.log(jsUser[mySy]);

// jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greetings = function (){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());