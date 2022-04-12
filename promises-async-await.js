//
// File: promises-async-await.js
// Date: 3/21/2022
// Desc: To run, execute: node promises-async-await
//

const myPromise = () => {
    return new Promise(function(resolve, reject) {
        // Perform some sort of async operation.
        if (true) { 
            resolve("It worked.");
        }
        else {
            reject("It broke!");
        }
  }) 
}

const main1 = () => {  // Old way, not preferred.
    myPromise()
        .then(r => console.log(r))
        .catch(r => console.log(r)); 
}

const main2 = async() => { // Elegant way, preferred.
    try {
        let r = await myPromise(); // The async keyword is REQUIRED in order to use await.
        console.log(r);
    }
    catch (err) {
        console.log(err);
    }
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

main1();
//main2();