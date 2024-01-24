function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result = number1 + number2
    // return result
   return num1+num2;
}
const result = addTwoNumbers(3,5);
// console.log(result);

function loginUserMsg(userName = "sam"){
    if(!userName){
        console.log("please enter user name");
        return
    }
    return `${userName} just logged in`;
}
// console.log(loginUserMsg());


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    userName: "sagar",
    price: 500
}
function handleobject(anyobj){
    console.log(`username is ${anyobj.userName} and its price is ${anyobj.price}`);

}
// handleobject(user)
handleobject({
    userName: "sag",
    price: 199
})

const myNewArray = [200,400,500]

function returnSecondValue(anyArray){
    console.log(anyArray[0]);
}
returnSecondValue(myNewArray)