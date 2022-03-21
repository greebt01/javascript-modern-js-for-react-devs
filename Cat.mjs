//
// File: Cat.mjs
// Auth: Martin Burolla
// Date: 3/21/2022
// Desc: Simple Cat class.
//

export default class Cat {

    //
    // Data members
    //
    
    name = ""; // Public: Accessible outside of this class.
    #age = 0;  // Private: Accessible only with in this class (AKA Hash name)
  
    //
    // Constructors
    //
  
    constructor(name) {
      this.name = name;
    }
  
    //
    // Public 
    //
  
    speak() {
        return `Meow my name is: ${this.name}.`;
    }

    speak2() {
        if (this.#amIHungry()) {
            return "I am hungry!";
        }
    }

    //
    // Private
    //

    #amIHungry() {
        return true;
    }

  }
  