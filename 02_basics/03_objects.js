const mySym = Symbol("single")

myObj = {
    name : "kishan",
    "full name" : "kishan gopale",
    [mySym] : "couple", // [] is for symbol
    age : 20,
    gmail : "kishan@gmail.com",
    isUserLogin : true
}

// console.log(myObj);

// console.log(myObj["name"]); // +> best way to acces objects value
// console.log(myOnj["full name"]);
// console.log(myObj.age);

// myObj.gmail = "ksihan09@gmail.com";

// Object.freeze(myObj)

// myObj.gmail = "kkggmm@gmail.com"

// console.log(myObj);

// console.log(myObj);

// console.log(typeof myObj[mySym])

// *********** wiht function

myObj.greeting = function(){
    console.log("hello user");
}
console.log(myObj.greeting());  

myObj.greetingTwo = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(myObj.greetingTwo()); 