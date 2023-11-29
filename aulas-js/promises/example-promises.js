"use strict";

let mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000); 
});

let mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Promise rejected"));
    }, 2000); 
});

mypromise.then(
    result => console.log(result),
    error => console.log(error)
);

// mypromise2.then(
//     result => console.log(result),
//     error => console.log(error)
// );

mypromise2.catch(
    error => console.log(error)
);