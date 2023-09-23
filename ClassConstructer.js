// how classes used in javascript

class Person1 {
  constructor(name, birthDate, gender) {
    this.name = name;
    this.gender = gender;
    this.birthDate = birthDate;
  }
  calcAge() {
    let age = new Date().getFullYear() - this.birthDate;
    console.log(age);
  }
}
Person1.prototype.department = "Cs";
let p1 = new Person1("john", 2010, "Male");
console.log(p1);
p1.calcAge();

// how to constructer worked

let Person2 = function (name, fName, gender, birthYear) {
  this.name = name;
  this.fName = fName;
  this.gender = gender;
  this.birthYear = birthYear;

  // this.calculateAge = function(){
  //  let age = new Date().getFullYear() - this.birthYear;
  //  console.log(age)
  // }
};
// inharitance protype

Person2.prototype.city = "london";

Person2.prototype.calculateAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

let p2 = new Person2("Ahmad", "Sudais", "Male", 2021);
console.log(p2);
p2.calculateAge();
