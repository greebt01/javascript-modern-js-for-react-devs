//
// File: classes.mjs
// Date: 3/21/2022
// 

import Cat from "./Cat.mjs";
import Person from "./Person.mjs";


const foo = () => {

    let p1 = new Person('Joe');
    p1.introduceSelf();

    let c1 = new Cat("Gypsy");
    // let c2 = new Cat("Gypsy", "black"); // Constructor overloading is not supported in JavaScript.
    //console.log(c1.age) // Private!  Returns undefined.
    
    console.log(c1.speak2());

}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

foo();
