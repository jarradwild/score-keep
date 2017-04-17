import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  
});

// Object Spread Operator:
// Allows you to copy the properties from one object to another
// let user = {
//   name: 'Jarrad',
//   localtion: 'Townsville'
// };
// let person = {
//   ...user,
//   age: 28
// };
// console.log(person);

// Object Propert Shorthand:
// let bike = 'Scott';
// let stuff = {
//   bike,
//   laptop: 'Mac'
// }
// console.log(stuff);
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995;
// let myHome = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// };
// console.log(myHome);


// Meteor.startup(() => {
//   class Person {
//     constructor(name = 'Annonymous', age = 0){
//       this.name = name;
//       this.age = age;
//     }
//
//     getGreeting() {
//       // return 'Hi! I am ' + this.name + '.';
//       return `Hi! I am ${this.name}.`;
//     }
//
//     getPersonDescription() {
//       return `${this.name} is ${this.age} year(s) old.`;
//     }
//   }
//
//   class Employee extends Person{
//     constructor(name, age, title) {
//       super(name, age);
//       this.title = title;
//     }
//
//     getGreeting() {
//       if (this.title) {
//         return `Hi! I am ${this.name}. I work as a ${this.title}.`;
//       } else {
//         return super.getGreeting();
//       }
//     }
//
//     hasJob(){
//       return !!this.title;
//     }
//   }
//
//   class Programmer extends Person {
//     constructor(name, age, preferredLanguage = 'JS'){
//       super(name, age);
//       this.preferredLanguage = preferredLanguage;
//     }
//
//     getGreeting() {
//       if (this.preferredLanguage) {
//         return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
//       } else {
//         return super.getGreeting();
//       }
//     }
//   }
//
//   let me = new Employee('Tanya', 27, 'db admin');
//   console.log(me.getGreeting());
//   console.log(me.hasJob());
//
//   let person = new Employee('Shane', 30);
//   console.log(person.getPersonDescription());
//   console.log(person.hasJob());
//   console.log(me.getGreeting());
//
//   let dev = new Programmer('Jarrad', 28, 'Javascript');
//   console.log(dev.getGreeting());
//
//   let devTwo = new Programmer('Jarrad', 28);
//   console.log(devTwo.getGreeting());
// });
