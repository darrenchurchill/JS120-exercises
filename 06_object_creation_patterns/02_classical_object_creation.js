/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS120 - Object Oriented JavaScript
 * Object Creation Patterns
 *
 * Classical Object Creation
 *
 * https://launchschool.com/exercises/a66716f6
 */

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.communicate = function() {
  console.log("Communicating");
};

Person.prototype.eat = function() {
  console.log("Eating");
};

Person.prototype.sleep = function() {
  console.log("Sleeping");
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Object.getPrototypeOf(Doctor.prototype).constructor(
    firstName,
    lastName,
    age,
    gender
  );
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log("Diagnosing");
};

function Professor(firstName, lastName, age, gender, subject) {
  Object.getPrototypeOf(Professor.prototype).constructor(
    firstName,
    lastName,
    age,
    gender
  );
  this.subject = subject;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log("Teaching");
};

function Student(firstName, lastName, age, gender, degree) {
  Object.getPrototypeOf(Student.prototype).constructor(
    firstName,
    lastName,
    age,
    gender
  );
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log("Studying");
};

function GraduateStudent(
  firstName,
  lastName,
  age,
  gender,
  degree,
  graduateDegree
) {
  Object.getPrototypeOf(GraduateStudent.prototype).constructor(
    firstName,
    lastName,
    age,
    gender,
    degree
  );
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log("Researching");
};

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor("foo", "bar", 21, "gender", "Pediatrics");
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent(
  "foo",
  "bar",
  21,
  "gender",
  "BS Industrial Engineering",
  "MS Industrial Engineering"
);
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'