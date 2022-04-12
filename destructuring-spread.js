//
// File: destructuring-spread.mjs
// Date: 3/21/2022
//

const destructuring = () => {

    //
    // Destructuring: Pulling a small thing out of a much larger thing.
    //

    // Our nicely structured object.
    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    // Old way...
    let fn = person.firstName;
    let ln = person.lastName;

    // New way...
    // Curly braces indicate we want to pull (destructure) the 
    // firstName out of the nicely structured object.
    let { firstName } = person; 

    console.log(firstName)
    
    // Another example...
    const { PI, LN10, SQRT2 } = Math;
}

const spread = () => {
    // ... AKA: Unpack operator.

    let a = [1,2,3];
    console.log(a);
    console.log(...a); // <== spread operator.

    let b = [a, 4, 5, 6];
    let c = [...a, 4, 5, 6];
    console.log(b);
    console.log(c);

    // Spread is often used in React to create new collections
    // and assign to a React component's state (which will force
    // the component to render).
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

// destructuring();
spread();
