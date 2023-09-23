// Lets talk aboout number types and intiger

// in javascript number is stored as floating points
console.log(45 === 45.0);

// javascript store numbers in 64 bits
console.log(0.3 + 0.4);
console.log(0.3 + 0.5 === 0.8);

// different ways of writng a number
let bilion1 = 100000000;
let bilion2 = 10_000_000_00;
let bilion3 = 1e3;
let bilion4 = 1e-3;

console.log(bilion1);
// writng number different bases
let binary = 0b001001;
console.log(binary);
let decimal = 0o212;
console.log(decimal);
let hexa_decimal = 0xaf;
console.log(hexa_decimal);

// converting a number into a string
let num = 2000;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));

// converting a string into a number
console.log(Number("37"));
console.log(+"37");
console.log(Number("37A"));
console.log(+"37B");
console.log(parseInt("37px"));
console.log(parseFloat("37.66 km"));

//when start it from character return NaN
console.log(parseInt("A37px"));
console.log(parseFloat("B37.66 km"));

//the parseint have another parameter also
console.log(parseInt("0xddd", 16));

// ---------------Special methods
// 1)isNaN
// if string not converted into number it return true
// if string converted into number return false
console.log(isNaN("hello"));
console.log(isNaN("29201"));
console.log(isNaN(parseInt("200 km")));

// 1)isfinite
// if a number is regular number it return true
// if not return false
console.log(isFinite("200 km"));
console.log(isFinite("200"));
console.log(isFinite(Infinity));
console.log(isFinite(parseFloat("km")));
console.log(isFinite(parseFloat("200.99 km")));
