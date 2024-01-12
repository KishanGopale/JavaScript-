// data types

// primitive = string, number, boolean, null, undefined, symbol, BigInt

// non primitive(Reference) = Array, Object, Function

// const marvel = ["ironman", "thor", "hulk"]; //=> array

// const myObj = {
//     name:"kishan",
//     age:20,
//     gender:"male"
// }                      //=> Object


// const myFun1 = function(){
//     console.log("kishan")
// }                               //=> Function




// ******************** MEMORY **********************

// 1. Stack is used for primitive data types
// 2. Heap is used for non-primitive data types


let myName = "kishan"

let mySecondName = myName

mySecondName = "Vyankatesh"

console.log(myName);
console.log(mySecondName);


/////// output willl be differrent 
// kishan
// vyankatesh


const userOne = {
    email : "ABC@gmail",
    name : "ABC"
}

let userTwo = userOne 

userTwo.email="PQR@gmail"

console.log(userOne.email);
console.log(userTwo.email);

////// output will be same 
//PQR@gmail
//PQR@gmail
