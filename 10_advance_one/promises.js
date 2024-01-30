// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve,reject){
  //Do an async task
  //Db calls,cryptographic,network

  setTimeout(()=>{
    console.log("async task is completed");
    resolve();
  },1000)

})
promiseOne.then(()=>{
  console.log("promise consumed");
})

/* ---------------------------------------------------------------------------*/

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2");
  })
  resolve();
}).then(()=>{
  console.log("async 2 resolved");
})

/* ---------------------------------------------------------------------------*/

//how to pass the data
const promiseThree = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve({username: "sagar", email:"chai@example.com"})
  },1000)
})
promiseThree.then(function(user){
  console.log(user);
})

/* ---------------------------------------------------------------------------*/

//error based checking
const promiseFour = new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error = false;
    if(!error){
      resolve({username: "safg", password: "1234"})
    }else{
      reject('ERROR:something went wrong')
    }
  },1000)
})
//promise chaining
promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


/* ---------------------------------------------------------------------------*/


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = false
      if (!error) {
          resolve({username: "javascript", password: "123"})
      } else {
          reject('ERROR: JS went wrong')
      }
  }, 1000)
});

async function consumePromiseFive(){
  try {
      const response = await promiseFive
      console.log(response);
  } catch (error) {
      console.log(error);
  }
}

consumePromiseFive()

/* ---------------------------------------------------------------------------*/

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.