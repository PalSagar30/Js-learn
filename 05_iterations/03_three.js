// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world";

for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`);
}

/* maps => it should give unique value. If duplicate present in the array it removes it and print which order you give input.
*/

const map= new Map();

map.set('IN', "India")
map.set('USA', "United states of america");

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
for (const [key, value] of map) { //this is array destructuring
    // console.log(key , ":-" , value);
}

const myObj = {
    "game1": "NFS",
    "game2": "Spiderman"
}
for (const {key,value} of myObj) {
    console.log(key , ":-" , value);
}