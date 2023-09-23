//destruction in arrays
let obj = {
  name: "ali",
  age: 23,
  salery: 2000,
};

// Normal methods
console.log(obj.name);
console.log(obj.age);
console.log(obj.salery);

//destriction method
let { name, age, salery } = obj;
console.log(name);
console.log(salery);
console.log(age);

//function destriction
function destriction() {
  return { bonus: 200, extra: 299 };
}
let { bonus, extra } = destriction();
console.log(bonus);
console.log(extra);

// mutation method
let x = 20;
let y = 30;

let xTester = { x: 6, y: 5 };
({ x, y } = xTester);
console.log(x, y);

// nested object and array destruction
let x1 = {
  name: "ali",
  add: { city: "peshawar", loc: "default" },
  nu: ["pakistan", "zindabad"],
};

//1)nested object
let {
  add: { city, loc },
} = x1;
console.log(city, loc);

//1)arrays within objects
let {
  nu: [state, greet],
} = x1;
console.log(state, greet);
