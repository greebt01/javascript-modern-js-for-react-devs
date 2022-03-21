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
    // Maps are useful for transforming collections into something we desire.
    let c = a.map(i => {
        return {doubleNumber: (i * 2)};
    });
    console.log(c);

    // IMPORTANT!
    // In React, maps are the FUNDAMENTAL way in which we display a 
    // collection of data to the user.
    const p1 = { firstName: "Marty"};
    const p2 = { firstName: "Jane"};
    const p3 = { firstName: "Sally"};
    const personList = [p1, p2, p3];

    const htmlTableStart = "<table><tr>";
    const htmlTableEnd = "</tr></table>";

    let htmlTd = personList.map(p => { // This will be in our JSX expression (React).
        return (`<td>${p.firstName}</td>`);
    })

    const htmlTable = htmlTableStart + htmlTd.join('') + htmlTableEnd;
    console.log(htmlTable);
    // <table>
    //    <tr>
    //      <td>Marty</td>
    //      <td>Jane</td>
    //      <td>Sally</td>
    //    </tr>
    // </table>
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

