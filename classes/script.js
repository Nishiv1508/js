class myClass {
  name = "Nishiv";
  _age = 20;
  #birthYear = 2005;
  msg = " ";
  constructor() {
    console.log(this.#birthYear);
  }
}

class secondClass extends myClass {
  constructor() {
    super();
    this._age = 99;
  }
  set setName(fname) {
    this.name = fname;
  }
  get getName() {
    return this.name;
  }

  myFunc() {
    console.log(this._age);
  }
}

let obj1 = new myClass();
let obj2 = new secondClass();
console.log(obj1.name);
obj2.myFunc();

//prototype
const john = {
  hobby: "Sports",
  age: 29,
  set setName(n) {
    this.name = n;
  },
  get getName() {
    return this.name;
  },
};

const doe = {
  __proto__: john,
};

const alpha = {
  name: "alpha",
};
alpha.prototype = john;
console.log(john.hobby, doe.age);
console.log(alpha.name, alpha.prototype.hobby, alpha.prototype.age);
console.log(alpha);
alpha.prototype.setName = "Giga";
console.log(alpha.prototype.getName);
