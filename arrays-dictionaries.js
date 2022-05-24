//
// File: arrays-dictionaries.js
// Date: 5/24/2022
// Desc: To run, execute: node arrays-dictionaries.js
// Refs: https://www.w3schools.com/jsref/jsref_obj_array.asp
//

const arrays = () => {
    console.log('arrays')
    const numbers = ['one', 'two', 'three']
    const numbers2 = ['one', 2, 'three', 4] // Weekly typed.
    const numbers3 = [1, 2, 3, 4] 

    console.log(numbers2[0])
    console.log(numbers2[1])
    console.log(numbers2[2])

    numbers.push('four')

    // Map...
    let newArray = numbers3.map(i => i * 2) // Double it.

    // Filter
    let newFilteredArray = numbers3.filter(i => i > 2);

    // Find
    let result = numbers3.find(i => i == 2);

    console.log(newArray)
    console.log(newFilteredArray)
    console.log(result)
}

const dictionaries = () => {
    //console.log('dictionaries')
    const dictionary1 = { firstName: "Joe", lastName: "Smith"}

    console.log(dictionary1)


}

const nested = () => {

}


//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

// arrays();
dictionaries();
// nested();
