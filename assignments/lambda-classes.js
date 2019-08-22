// CODE here for your Lambda Classes


// - We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of people.
//     - Instructors - extensions of Person
//     - Students - extensions of Person
//     - Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:
// ​
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person{
  constructor(attributes){
    this.newName = attributes.name
    this.newAge = attributes.age
    this.newLocation = attributes.location
  }
  speak(){
    return `Hello my name is ${this.newName}, I am from ${this.newLocation}. `
  }
}
  // const fred = new Instructor({
  //     name: 'Fred',
  //     location: 'Bedrock',
  //     age: 37,
  //     favLanguage: 'JavaScript',
  //     specialty: 'Front-end',
  //     catchPhrase: `Don't forget the homies`
  //   });


// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

// * If the student's grade is above a 70% let them graduate! 
//   * Otherwise go back to grading their assignments to increase their score.

class Instructor extends Person{
  constructor(teacher){
    super(teacher);
    this.newSpeciality = teacher.speciality
    this.newFavLanguage = teacher.favLanguage
    this.newCatchPhrase = teacher.catchPhrase
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, subject){
    return `${this.newName} recieves a perfect score on ${subject}`
  }
}


// * ProjectManagers are extensions of Instructors
// * Project Manger has the following unique props:
// * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor{
  constructor(pm){
    super(pm);
    this.newGradClassName = pm.gradClassName;
    this.newFavInstructor = pm.favInstructor;
  }
  standup(chanel){
    return `${this.newName} announces to ${chanel}, @channel standy times!`
  }
  debugsCode (student, subject){
    return `${this.newName} debugs ${student.name}'s code on ${subject}`
  }
}
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
  constructor(students){
    super(students)
    this.newPreviousBackground = students.previousBackground;
    this.newClassName = students.className;
    this.newFavSubjects = students.favSubjects;
  }
  listsSubjects(){
    return `${this.newFavSubjects}`
  }
  PRAssignment(subject){
    return `${this.newName} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject){
    return `${this.newName} has begun sprint challenge on ${subject}`
  }
}
const Timothy = new Student({
  name: 'Timothy',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'Web23',
  favInstructor: 'Fred'
});

const Laila = new Instructor({
  name: 'Laila',
  location: 'Seattle',
  age: 23,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Please work`
});
const Jordan = new ProjectManagers({
  name: 'Jordan',
  location: 'New York',
  age: 21,
  favLanguage: 'Ruby on Rails',
  specialty: 'Back-end',
  catchPhrase: `I rock`,
  gradClassName: 'Web 21'
})
// console.log(Timothy.PRAssignment('Javascript'));
// console.log(Timothy.sprintChallenge('Javascript'));
// console.log(Laila.newCatchPhrase);
console.log(Jordan.newFavLanguage);
console.log(Jordan.newAge);
console.log(Jordan.newGradClassName);
console.log(Jordan.standup('mikaela23'));
console.log(Laila.grade());
/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/
