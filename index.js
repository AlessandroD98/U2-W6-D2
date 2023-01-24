class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static AgeCompare(person1, person2) {
    if (person1.age > person2.age) {
      console.log(person1.name + " é più vecchio di " + person2.name);
    } else {
      console.log(person2.name + " é più vecchio di " + person1.name);
    }
  }
}

let p1 = new Person("Alessandro", 24);
let p2 = new Person("Marco", 26);
let p3 = new Person("Ugo", 35);

Person.AgeCompare(p2, p3);
