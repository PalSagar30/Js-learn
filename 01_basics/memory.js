// Stack(primitive data type) && Heap(non-primitive Data-type)

let myYoutubeName = "hotsagar@gmail.com"

let anotherName = myYoutubeName
anotherName = "chai aur code"

console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne;

userTwo.email = "sagar@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)