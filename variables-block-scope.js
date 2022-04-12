// 
// File: variables-block-scope.js
// Date: 3/21/2022
//

const MEANING_OF_LIFE = 42;

const variables = () => {
    let num1 = 10;  // Delcare a variable called num1 and initialize it to 10.
    let num2 = 20;  // Delcare a variable called num1 and initialize it to 20.
    
    console.log(num1, num2); // Display the contents of these variables on the console.
}

const constants = () => {
    const num1 = 10; // Delcare a constant called num1 and initialize it to 10.
    const num2 = 20; // Delcare a constant called num1 and initialize it to 20.

    num1 = 55; // Error!  Cannot change a constant.

    // ProTip: Always favor const over let, never use var.
    console.log(num1, num2);
}

const scope = () => {
    // let and const have block scope, between the curly braces.
    const MEANING_OF_LIFE = 5150; // <== this is used, not the one on line 6.
    let num1 = 70; // <== this is used, not the ones on line 9, 16.
    var num2 = 54; // <== Old ES 5 approach, DO NOT USE VAR.

    console.log(MEANING_OF_LIFE); 
}


//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

variables();
//constants();
//scope();

