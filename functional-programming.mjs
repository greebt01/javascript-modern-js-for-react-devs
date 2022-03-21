//
// File: functional-programming-mjs
// Date: 3/21/2022
// 

const map = () => {
    // Map: Applies an expression to every item in the collection, returns a
    // new collection.
    let a = [1,2,3];
    let b = a.map(i => i * 2);
    console.log(b)

    // c is an array that contians dictionary objects.
    let c = a.map(i => {
        return {doubleNumber: (i * 2)};
    });
    console.log(c);

    // Maps are useful for transforming collections into something we desire. 
    // *** In React, maps are the FUNDAMENTAL way in which we display a 
    // collection of data. ***
}

const sort = () => {

}

const filter = () => {

}

const find = () => {

}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

// map();
sort();
filter();
find();

