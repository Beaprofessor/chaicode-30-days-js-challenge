//  Day 14

// Activity 1: Class Definitions

// Task 1 && Task 2

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} year old.`;
  }

  updatedAge(newAge) {
    this.age = newAge;
    console.log(`My age is updated to ${this.age}`);
  }
}

const person1 = new person("Alice", 22);
// console.log(person1.getGreeting())

// person1.updatedAge(69)

// Activity 2: Class Inheritance

// Task 3 && Task 4

class student extends person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getGreeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }

  getStudentId() {
    return `My name is ${this.name} and my studentID is ${this.studentId}`;
  }

  static getTotalStudents() {
    return `Total number of students: ${student.studentCount}`;
  }
}

const student1 = new student("Lucky", 22, 22022);
console.log(student1.getGreeting());

// Activity 3: Static Methods and Properties

// Task 5

class person2 {
  static sMethod(greet) {
    this.greet = greet;
    return `${greet} Harry`;
  }
}

// console.log(person2.sMethod("Hey buddy How u doing"))

// Task 6

class stud extends person {
  static studentCount = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    student.studentCount += 1;
  }

  static getTotalStudents() {
    return `Total number of students: ${student.studentCount}`;
  }
}

const student11 = new student("Alice", 20, 22022);
console.log(student11.getGreeting());
console.log(stud.getTotalStudents());

const student2 = new student("Bob", 22, 22023);
console.log(student2.getGreeting());
console.log(stud.getTotalStudents());

const student3 = new student("Charlie", 21, 22024);
console.log(student3.getGreeting());
console.log(stud.getTotalStudents());




// Activity4: Getters and Setters

// Task 7   &&   Task 8

class professional {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get() {
    return `My firstName is ${this.firstName} and lastName is ${this.lastName}`;
  }

  set(newFirstName , newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }
}

let itProfessional = new professional("Harry", "Li");
console.log(itProfessional.get());


itProfessional.set('Jerry','love')
console.log(itProfessional.get());

