// spread method in javascript
// represented in symbols called dots (...)
let arr = [4, 5, 3, 9];
console.log(arr);
console.log(...arr); //used it
console.log(arr[1], arr[2], arr[0], arr[3]);

// passing argumnet for a funcation
function add(num1, num2, num3) {
  return num1 + num2 + num3;
}
let arrResult = add(...arr);
console.log(arrResult);

//used to combined two arrays
let arr1 = [3, 5, 6, 7];
let arr2 = [33, 8, 5];
console.log(...arr1, ...arr2);

//used to copy one arrays to another
let arr3 = [39, 45, 46, ...arr1];
console.log(arr3);

//--------------rest operater and rest parameter

let a1 = [2, 3, 4, 5];
let [age, name, address, exp] = a1;
console.log(age, name, address, exp);

//rest oprater is used before the assignment
let a2 = [2, 3, 4, 5];
let [age2, name2, ...ali] = a2; //rest operater used
console.log(age2, name2, ali);

//its is also used for objects refrencing
let obj = {
  x: 1,
  y: 2,
  z: 4,
  a: 5,
};
let { y, x, ...al } = obj; //rest operater used
console.log(x, y, al);

function add(...num) {
  let sum = 0;
  for (let f = 0; f < num.length; f++) {
    sum = sum + num[f];
  }
  return sum;
}
console.log(add(3, 4));
console.log(add(3, 4, 50));
console.log(add(30, 4, 5, 6));
