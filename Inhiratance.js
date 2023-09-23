// inheratance in object.create methods

let Person = {
  calSalery() {
    console.log((this.salery + this.bonus) * 12);
  },
  personInit(name, age, scale) {
    this.age = age;
    this.name = name;
    this.scale = scale;
  },
};
let Emp = Object.create(Person);
console.log(Emp);
Emp.EmpInit = function (name, age, scale, salery, bonus) {
  Emp.personInit.call(this, name, age, scale);
  this.salery = salery;
  this.bonus = bonus;
};

let Mark = Object.create(Emp);
console.log(Mark);
Mark.EmpInit("mark", 20, "a1", 20000, 2000);
console.log(Mark);
Mark.calSalery();

let Mark2 = Object.create(Emp);
Mark2.EmpInit("mark", 15, "c1", 3420, 230);
console.log(Mark2);
Mark2.calSalery();

// imhiratance using class

class car {
  constructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
  brake() {
    console.log("brakedd");
  }
  speed() {
    console.log("speed is increased");
  }
}

class saikal extends car {
  constructor(type, engine, name, model, color) {
    super(name, model, color);
    this.type = type;
    this.engine = engine;
  }
}
let c1 = new saikal("saikal", "sorab", "f10", "red");
console.log(c1);
c1.brake();
c1.speed();

//construter inhhiratance
//parent construter
let Person2 = function (name, gender, birthyear) {
  this.name = name;
  this.gender = gender;
  this.birthyear = birthyear;
};

//child constructer
let Emp = function (name, gender, birthyear, emp_id, grade, salery) {
  Person.call(this, name, gender, birthyear);
  //call keyword call parent properties by using this keyword
  this.emp_id = emp_id;
  this.grade = grade;
  this.salery = salery;
};

//used to inherit parents method
Person.prototype = Emp.prototype;

//parent prototype
Person.prototype.calAge = function () {
  let age = new Date().getFullYear - birthyear;
  console.log(age);
};

//child prototype
Emp.prototype.calSal = function () {
  console.log(this.salery * 20000);
};

let john = new Emp("john", "male", 2010, 111, "a1", 10);
console.log(john);
john.calSal();

// create.object.method or prototypll concept by using object.create methos
let person = {
  calAge() {
    let age = new Date().getFullYear() - this.birthday;
    console.log(age);
  },
  sayWelcome() {
    console.log("welcome respected Mr." + this.name);
  },
  init(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  },
};
console.log(person);
//3rd way of creating object create method

let tom = Object.create(person);
tom.init("tom", 2019);
console.log(tom);
tom.sayWelcome();
tom.calAge();
//1st way of creating object.create method

let mark = Object.create(person);
mark.name = "mark";
mark.birthday = 2000;
console.log(mark);
mark.calAge();
mark.sayWelcome();

//2nd way of creating object.create method

let bob = Object.create(person, {
  name: { value: "bob" },
  birthday: { value: 2010 },
});
console.log(bob);
bob.calAge();
bob.sayWelcome();

// static methods used
// 1) for a class

class Car {
  constructor(name, model, number) {
    this.name = name;
    this.model = model;
    this.number = number;
  }
  modelCall() {
    console.log("the model is " + this.model);
  }
  static model_Number() {
    console.log("the model number is" + this.number);
  }
}

let c2 = new Car("honda", "ferreii", 203432);
console.log(c2);
c2.modelCall();
c2.model_Number();

// 2) staic method for a constructer

let Car = function (name, color, number, horn) {
  this.name = name;
  this.color = color;
  this.number = number;
  this.horn = horn;
  this.sound = function () {
    console.log(this.horn);
  };
};

// static method
Car.greet = function () {
  console.log("wow a nice car");
};
// let c1 = new Car("HondaCivic", "red", 12112, "pong pong pong");
console.log(c1);
c1.sound();

Car.greet(); //static method called
