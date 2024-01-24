//Immediately Invoked Function Expression(IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
// chai()

/* the upper way is immediately invoked but what happened when globalscop variable and operations also there. Is n't that polluted???? */

// that's why we use iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

/* ()=>first parenthesis used to write function definition and second one used to write function execution */
// ; => you have to use semiclone after excuting immediately invoked function expression other wise you can get "type error".
( ()=> {
    console.log("Db connected two");
} )();

( (name)=>{
    console.log(`${name} welcome`);
} )("sagar")