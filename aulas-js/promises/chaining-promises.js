"use strict";

new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Ola"), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + " essa eh ";
  })
  .then(function (result) {
    console.log(result); // 3
    return result + "meu exemplo de ";
  })
  .then(function (result) {
    console.log(result); // 9
    return result + " promises!";
  });
