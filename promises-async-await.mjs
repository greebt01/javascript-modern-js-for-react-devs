//
// File: promises-async-await.mjs
// Date: 3/21/2022
// 

const myPromise = () => {
    return new Promise(function(resolve, reject) {
        if (true) {
            resolve("Stuff worked.");
        }
        else {
            reject("It broke!");
        }
  }) 
}

const main1 = () => {  // Old way, not preferred.
    myPromise()
        .then(r => console.log(r))
        .catch(r =>console.log(r)); 
}

const main2 = async() => { // Elegant way, preferred.
    let r = await myPromise();
    console.log(r);
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

// main1();
main2();