//
// File: loops-operators.mjs
// Date: 3/21/2022
// 

const loops = () => {
    
    // For loop.
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log("*".repeat(5));

    // Nested for loop.
    for (let i = 0; i < 3; i++) {
        console.log(`i: ${i}`);
        for (let k = 0; k < 3; k++) {
            console.log(`  k: ${k}`);
        }
    }
    console.log("*".repeat(5));

    // while loop.
    let i = 0;  // <== Note this i does not "conflict" with the i on line 9.
    while (i < 3) {
        console.log(i);
        i++;
    }
    console.log("*".repeat(5));

    // do while loop.
    i = 0;
    do {
        i++;
        console.log(i);
    }
    while (i < 3);
    console.log("*".repeat(5));
}

const operatorPrecendence = () => {
    //
    // High: ()
    //       *
    //       /
    //       +
    // Low:  -
    //

    let r = 0;
    r = 3 * 2 + 4;
    console.log(r);

    r = 3 * 2 + 6 * 1;
    console.log(r);

    r = (3 * 2 + 2)/ 2;
    console.log(r);
}

const shortCircuit = () => {

    const showContents = true;
    let anotherCondition = false; // doesn't matter if this is true or false.
    let htmlContents = "<html><head></head><body>Hello World</body></html>";

    if (showContents || anotherCondition) { // anotherCondition will never be evaluated.
        console.log(htmlContents);
    }

    if (showContents && htmlContents) {
        console.log(htmlContents);
    }
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

//loops();
//operatorPrecendence();
shortCircuit();
