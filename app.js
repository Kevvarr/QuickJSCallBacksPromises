const oyear = Math.floor(Math.random(0, 100)*100)
// -------------- Callback explanation -------------- //
// in my own words



// function
function caller(name, year, funcFull){

    const rnYear = 2024
    const result = rnYear - year;
    //simulate delay
    setTimeout(() => {
        // call function in parameter
        funcFull(name, result, year);
    }, 1000);
}

// caller, params ( name, oyear, funcFull )
// funcFull is a function
caller("Paul", oyear, (name, result, year) => {
    console.log(`Callback: ${name} was born in ${result}, now has ${year}`);
});



// -------------- Promise explanation -------------- //



// function promises
function callerPromises(name, year){

    const rnYear = 2024
    const result = rnYear - year;

    return new Promise((resolve, reject) => {
        // simulate delay
        setTimeout(() => {
            // can only send 1 param, so we need to wrap it in an object
            resolve({name,result, year})
        }, 1000)
    })
}

// caller, params ( name, year)
callerPromises("Paul", oyear)
    // in case of success
    .then((result) => {
        console.log(`Promises: ${result.name} was born in ${result.result}, now has ${result.year}`);
    })
    // in case of error
    .catch((err) => console.log(err))













