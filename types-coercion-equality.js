// 
// File: types-coercion-equality.js
// Date: 3/21/2022
//

const types = () => {
    // (null, undefined, boolean, number, string, symbol, and BigInt)
    let b = false; // JavaScript infers the type for us: boolean.
    // Boolean b = false; // Don't have to do this in JavaScript because its a loosely typed dynamic language.

    console.log(typeof(b));
    b = 123; // Now JavaScript infers the type for us: number.
    console.log(typeof(b));
}

const typesPrimative = () => {
    //
    // Primative types (Stack):
    //  null, undefined, boolean, number, string, symbol, and BigInt
    //
    let a = null;
    let b = undefined;
    let c = false; 
    let d = 123;
    let e = "Hello World";
    let f = Symbol('foo');
    let g = 2n ** 53n;
    
    console.log(typeof(a)); // <== object???
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));
    console.log(typeof(f));
    console.log(typeof(g));

    console.log(f.description);

    // These are the important ones: null, undefined, boolean, number, string
}

const typesReference = () => {
    // Reference types point to objects (Heap).

    // Array
    let messyArray = [1, 2, 3, 'test', 1.234, null, "test"];
    console.log(messyArray);
    console.log(typeof(messyArray));
    console.log(typeof(messyArray[3])); // Arrays are zero based. 

    // Dictionary
    let dictionary = {};
    dictionary[1] = 'one';
    dictionary[2] = 'two';
    dictionary[3] = 'three';
    console.log(dictionary);
    console.log(typeof(dictionary));

    // 

}

const coercion = () => {
    
}

const equality = () => {
    // Equality works differently for primative types & reference types


}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

//types();
//typesPrimative();
typesReference();
// coercion();
// equality();