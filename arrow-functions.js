/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwonumbers(a,b){
//     return a+b;
// }
// let sum= addTwonumbers(3,4);
// console.log(sum);

// Arrow Function With Parameters
const addTwonumbers=(a,b) =>{
    return a+b;
}
let sum= addTwonumbers(3,4);
console.log(sum);

// Single Line Arrow Function With Parameters
//const addTwonumbers2=(a,b)=>(a+b); Also valid

const addTwonumbers2=(a,b)=>a+b;
let sum2=addTwonumbers2(5,6)
console.log(sum2);

// Implicit Returns

const saysomthing =massage => console.log(messagr);
saysomthing("Hello world");

const sayHi =() => console.log('Hiiiiiiiii')
sayHi();
// Returning Multiple Lines
const returnMultilines = () => {
    <p>
        '
            This is a Multiple line code
        '
    </p>
}
console.log(returnMultilines);

