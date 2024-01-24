// if you want to use current context you have to use 'this'. That means , 'this' refers to the current context.

const user = {
    username: "sagar",
    price: 444,
    welcomeMsg: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "sag";
// user.welcomeMsg()

// so the context means values what is holding the current variables it is called current context.

// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// } //this is called explicit return


// const addTwo = (num1, num2) =>  num1 + num2 //this is called implicit return

// you can write also below

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()