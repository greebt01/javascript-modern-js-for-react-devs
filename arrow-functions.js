//
// File: arrow-functions.mjs
// Date: 3/21/2022
//

function oldFunc1() { // <== Do not use.
    console.log("I am old.");
}

const newFunc1 = () => { // <== Anonymous function.
    console.log("I am new.")

    // This is a function: () => {}
    // This is not a function anymore: foo() {}
}

//

function oldFunc2(name) { // <== Do not use.
    console.log(`My name is ${name}.`);
}

const newFunc2 = (name) => {
    console.log(`My name is ${name}.`)
}

const newFunc2Again = name => { // <== Parens not required for one arguement.
    console.log(`My name is ${name}.`)
}

//

function oldFunc3(name) { // <== Do not use.
    return `My name is still ${name}.`;
}

const newFunc3 = (name) => {
    return `My name is still ${name}.`;
}

// Functions can define other functions.  This is extremely common
// in React functional components.

const newFunc4 = (a, b) => {
   
    const sub = (a, b) => {  // Defined, not used.
        return a - b;
    }

    const add = (a, b) => { // Defined and used.
        return a + b;
    }

    const doubleNumber = n => { // Defined, not used.
        return n * 2;
    }

    const result = add(a, b);
    return result;
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

oldFunc1();
newFunc1();
//
oldFunc2("Mary");
newFunc2("Mary");
//
let message1 = oldFunc3("Mary");
let message2 = newFunc3("Mary");
console.log(message1);
console.log(message2);
//
let result = newFunc4(1, 2);
console.log(result);
