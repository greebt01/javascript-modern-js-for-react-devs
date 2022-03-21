//
// File: arrow-functions.mjs
// Date: 3/21/2022
//

function oldFunc1() { // <== Don't get used to this format.
    console.log("I am old.");
}

const newFunc1 = () => { // This is an anonymous function.
    console.log("I am new.")
}

function oldFunc2(name) { // <== Don't get used to this format.
    console.log(`My name is ${name}.`);
}

const newFunc2 = (name) => { // This is an anonymous function.
    console.log(`My name is ${name}.`)
}



//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

oldFunc1();
newFunc1();
oldFunc2("Mary");
newFunc2("Mary");

