//
// File: Person.mjs
// Auth: Martin Burolla
// Date: 3/21/2022
// Desc: Simple Person class.
//

export default class Person {

  //
  // Data members
  //
  
  name;

  //
  // Constructors
  //

  constructor(name) {
    this.name = name;
  }

  //
  // Methods
  //

  introduceSelf() {
    console.log(`Hi! My name is ${this.name}.`);
  }
}
