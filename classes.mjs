//
// File: classes.mjs
// Date: 3/21/2022
// 

import Cat from "./Cat.mjs";
import Dog from "./Dog.mjs";
import Person from "./Person.mjs";

const test = () => {
    let p1 = new Person('Joe'); // Instaniate a Person.
    p1.introduceSelf();

    let c1 = new Cat("Gypsy"); // Instaniate a Cat.
    // let c2 = new Cat("Gypsy", "black"); // Constructor overloading is not supported in JavaScript.
    //console.log(c1.age) // Private!  Returns undefined.
    console.log(c1.speak2());
    console.log(c1.speak3());

    // Pass a Cat into a Person.
    p1.setCat(c1);
    console.log(`The name of my cat is: ${p1.getCatName()}.`);
}

const inheritence = () => {
    let d1 = Dog();
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

// test();
inheritence();
