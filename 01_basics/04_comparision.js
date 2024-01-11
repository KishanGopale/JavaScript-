// ************ simple operator ************
// console.log(2 == 5);
// console.log(2 < 5);
// console.log(2 > 5);
// console.log(2 <= 5);
// console.log(2 != 5);

// **** here string is convert into numaric value
// console.log("2"==2);
// console.log("02"==2);

// console.log(null > 0);   //output is false
// console.log(null == 0);  //output is false
// console.log(null >= 0);  //output is true

/* the reason is tihe an equality check == and comparisons > <> >= <= work differently
comparisons convert null to a number, treating ti as 0.
thats why >= 0 is true and null > 0 is false*/



console.log("2" ===3); //here === is for strict checkt it check datatype as well

