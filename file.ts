// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, ${this.name}`);
//   }
// }

// class Student extends Person {
//   grade: number;

//   constructor(name: string, grade: number) {
//     super(name);
//     this.grade = grade;
//   }

//   greet() {
//     console.log(`Grade is ${this.grade}`);
//   }
// }

// let person1 = new Student("Aqib", 23);

// console.log(person1);
// person1.greet()

enum Role {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

let role: Role = Role.ADMIN;

if (Role.ADMIN === "admin") {
  console.log("admin");
}

console.log(Role);
