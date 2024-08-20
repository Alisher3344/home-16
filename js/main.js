// class1
// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;
//   constructor(leftSide, rightSide, width) {
//     this.#leftSide = leftSide;
//     this.#rightSide = rightSide;
//     this.#width = width;
//   }
//   getLeftSide() {
//     return this.#leftSide;
//   }
//   getRightSide() {
//     return this.#rightSide;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }
// const myTriangle = new Triangle(3, 4, 5);
// console.log(myTriangle.getLeftSide());
// console.log(myTriangle.getRightSide());
// console.log(myTriangle.getWidth());
// myTriangle.setSides(3, 2, 1);
// console.log(myTriangle.getLeftSide());
// console.log(myTriangle.getRightSide());
// console.log(myTriangle.getWidth());

// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   constructor(id, firstName, lastName, salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }
//   getId() {
//     return this.#id;
//   }
//   getFirstName() {
//     return this.#firstName;
//   }
//   getLastName() {
//     return this.#lastName;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   setId(a) {
//     this.#id = a;
//   }
//   setFirstName(first) {
//     this.#firstName = first;
//   }
//   setLastName(last) {
//     this.#lastName = last;
//   }
//   setSalary(s) {
//     this.#salary = s;
//   }
//   getFullName() {
//     return `eski id ${this.#id} yangi id ${this.a}`;
//   }
//   getAnnualSalary() {
//     return (this.#salary *= 12);
//   }
// }
// const pr1 = new Employee(2, "ALISHER", "BEKORCHI", 1);
// console.log(pr1.getId());
// console.log(pr1.getFirstName());
// console.log(pr1.getLastName());
// console.log(pr1.getSalary());
// pr1.setId(22);
// console.log(pr1.getId());
// pr1.setFirstName("Alisher Aliqulov");
// console.log(pr1.getFirstName());
// pr1.setLastName("G'irt bekorchi");
// console.log(pr1.getLastName());
// pr1.setSalary(2);
// console.log(pr1.getSalary());
// console.log(pr1.getFullName());
// console.log(pr1.getAnnualSalary());

// class3
// class CustomDate {
//   #day;
//   #month;
//   #year;
//   constructor(month, day, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }
//   getDay() {
//     return this.#day;
//   }
//   getMonth() {
//     return this.#month;
//   }
//   getYear() {
//     return this.#year;
//   }
//   setDay(dey) {
//     this.#day = dey;
//   }
//   setMonth(moth) {
//     this.#month = moth;
//   }
//   setYear(yearr) {
//     this.#year = yearr;
//   }
//   getISOdate() {
//     return `${this.#month}-${this.#day}-${this.#year}`;
//   }
// }
// const el = new CustomDate("08", "24", "2010");
// console.log(el.getDay());
// console.log(el.getMonth());
// console.log(el.getYear());
// console.log("");

// el.setDay("05");
// el.setMonth("12");
// el.setYear("2023");

// console.log(el.getISOdate());

// // class4
// class Time {
//   #hour;
//   #minute;
//   #second;
//   constructor(hour, minute, second) {
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#second = second;
//   }
//   getHour() {
//     return this.#hour;
//   }
//   getMinute() {
//     return this.#minute;
//   }
//   getSecond() {
//     return this.#second;
//   }
//   setHour(soat) {
//     this.#hour = soat;
//   }
//   setMinute(minut) {
//     this.#minute = minut;
//   }
//   setSecond(soniya) {
//     this.#second = soniya;
//   }
//   getnextSecond() {
//     return `${this.#hour}-${this.#minute}-${--this.#second}`;
//   }
//   previousSecond() {
//     return `${this.#hour}-${this.#minute}-${(this.#second += 2)}`;
//   }
// }
// const el = new Time(4, 3, 40);
// el.setHour(6);
// el.setMinute(20);
// el.setSecond(10);
// console.log(el.getnextSecond());
// console.log(el.previousSecond());

// // class5
// class Shape {
//   #color;
//   #filled;
//   constructor(color, filed) {
//     this.#color = color;
//     this.#filled = filed;
//   }
//   getColor() {
//     return this.#color;
//   }
//   setColor(rang) {
//     this.#color = rang;
//   }
//   isFilled() {
//     return this.#filled;
//   }
//   setFilled(felid) {
//     this.#filled = felid;
//   }
// }

// class Circle extends Shape {
//   #radius;
//   constructor(radius, color, filed) {
//     super(color, filed);
//     this.#radius = radius;
//   }
//   getRadius() {
//     return this.#radius;
//   }
//   setRadius(ali) {
//     this.#radius = ali;
//   }
//   getArea() {
//     return Math.PI * this.#radius ** 2;
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this.#radius;
//   }
// }
// class Rectangle extends Shape {
//   #width;
//   #height;
//   constructor(width, height, color, filed) {
//     super(color, filed);
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setWidth(widt) {
//     this.#width = widt;
//   }
//   getHeight() {
//     return this.#height;
//   }
//   setHeight(heigh) {
//     this.#height = heigh;
//   }
//   getArea() {
//     return this.#width * this.#height;
//   }
//   getPerimeter() {
//     return 2 * (this.#width + this.#height);
//   }
// }

// const pet = new Shape("qora", true);
// console.log(pet.getColor());
// console.log(pet.isFilled());

// const pet1 = new Circle(3);
// console.log(pet1.getRadius());
// console.log(pet1.getArea());
// console.log(pet1.getPerimeter());

// const pet2 = new Rectangle(2, 2);
// console.log(pet2.getWidth());
// console.log(pet2.getHeight());
// console.log(pet2.getArea());
// console.log(pet2.getPerimeter());

// // class 6
// class Person {
//   #name;
//   #address;
//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }
//   getName() {
//     return this.#name;
//   }
//   setName(ism) {
//     this.#name = ism;
//   }
//   getAddress() {
//     return this.#address;
//   }
//   setAddress(manzil) {
//     this.#address = manzil;
//   }
// }
// class Student extends Person {
//   #faculty;
//   #year;
//   #universty;
//   constructor(faculty, year, universty, name, address) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#universty = universty;
//   }
//   getFaculty() {
//     return this.#faculty;
//   }
//   getYear() {
//     return this.#year;
//   }
//   getUniversity() {
//     return this.#universty;
//   }
//   setFacultya(facultet) {
//     this.#faculty = facultet;
//   }
//   setYear(yil) {
//     this.#year = yil;
//   }
//   setUniversity(universitet) {
//     this.#universty = universitet;
//   }
// }
// class Employee extends Person {
//   #salary;
//   #work;

//   constructor(salary, work, name, address) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   getWork() {
//     return this.#work;
//   }
//   setSalary(salar) {
//     this.#salary = salar;
//   }
//   setWork(ish) {
//     this.#work = ish;
//   }
// }
// const pr = new Person("Alisher", "Bekorchi");
// console.log(pr.getName());
// console.log(pr.getAddress());

// console.log("");

// const st = new Student("yiut", "2010", "qarsh");
// console.log(st.getFaculty());
// console.log(st.getYear());
// console.log(st.getUniversity());

// console.log("");

// const Ee = new Employee("bilmadim", "o'quvchi");
// console.log(Ee.getSalary());
// console.log(Ee.getWork());

// class 7
class Animal {
  #name;
  #speed;
  #weight;
  constructor(name, speed, weight) {
    this.#name = name;
    this.#speed = speed;
    this.#weight = weight;
  }
}
class Mammal extends Animal {
  #legs;
  constructor(legs, name, speed, weight) {
    super(name, speed, weight);
    this.#legs = legs;
  }
  getLegs() {
    return this.#legs;
  }
  setLegs(panja) {
    this.#legs = panja;
  }
}

class Cat extends Mammal {
  #sound;
  constructor(sound, name, speed, weight) {
    super(name, speed, weight);
    this.#sound = sound;
  }
  getSound() {
    return this.#sound;
  }
}
class Dog extends Mammal {
  #sound;
  constructor(sound, name, speed, weight) {
    super(name, speed, weight);
    this.#sound = sound;
  }
  getSound() {
    return this.#sound;
  }
}
class fish extends Animal {
  #size;
  constructor(size, name, speed, weight) {
    super(name, speed, weight);
    this.#size = size;
  }
  getSize() {
    return this.#size;
  }
  setSize(olcham) {
    this.#size = olcham;
  }
}
class Whale extends fish {
  #sound;
  constructor(sound, name, speed, weight) {
    super(name, speed, weight);
    this.#sound = sound;
  }
  getSound() {
    return this.#sound;
  }
}

class shark extends fish {
  #sound;
  constructor(sound, name, speed, weight) {
    super(name, speed, weight);
    this.#sound = sound;
  }
  getSound() {
    return this.#sound;
  }
}
const ani = new Animal("as", 22, 22);

const mel = new Mammal("!!");
console.log(mel.getLegs());

const cat = new Cat("Meow");
console.log(cat.getSound());

const dog = new Dog("Woof");
console.log(dog.getSound());

const fi = new fish("1m");
console.log(fi.getSize());

const kit = new Whale("Poof");
console.log(kit.getSound());

const akua = new shark("Sheef");
console.log(akua.getSound());
