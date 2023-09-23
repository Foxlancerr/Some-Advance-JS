// working the time properties

let x1 = new Date();
let x2 = new Date(2000,4,23,12);
console.log(x1);
console.log(x2);
if(x1 < x2){
    console.log("x1 is past date");
}
else if(x1 > x2){
console.log("x1 is future date");
}
else{
    console.log("both are same date")
}

let past_date = new Date(2000,9,29);

console.log(past_date);

console.log("same changes is perform")
past_date.setFullYear(past_date.getFullYear()+12);
console.log(past_date);

// maths Object Properties

// Default values
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

console.log(Math.round(2.4)); //return the nerest integer
console.log(Math.round(2.8)); //return the nerest integer
console.log(Math.round(-2.8)); //return the nerest integer
console.log(Math.round(-2.2)); //return the nerest integer

console.log(Math.ceil(7.4)); //return integer value to nerest upper integer
console.log(Math.floor(3.4)); //return integer value to nerest down integer
console.log(Math.trunc(12.4)); //return integer part of a given frictional number

console.log(Math.sqrt(9)); //return the square root of any given value
console.log(Math.sqrt(64)); //return the square root of any given value

console.log(Math.max(4, 6, 19, 6)); //return the maximum value
console.log(Math.min(4, 6, 19, 6)); //return the minimum value
console.log(Math.max(4, 6, "19", 6)); //convert the string into number and then return value
console.log(Math.max(4, 6, "19 px", 6)); //it does not parsing a alphanumeric value and return NaN by default

console.log(Math.random()); //randam genrate a frictional number between 0 to 1
console.log(Math.random() * 10); //randam genrate a frictional number between 0 to 10
console.log(Math.trunc(Math.random() * (10 - 6) + 6)); //We can convert the frictional number into integer by using Math.trunk method
console.log(Math.trunc(Math.random() * 10)); //We can convert the frictional number into integer by using Math.trunk method

//user input a number and we can random it
function random_key(max, min) {
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}
y = random_key(10, 5);

console.log(y);
