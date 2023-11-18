"use strict";
const prompt = require("prompt-sync")();
let stock = [];

// Main function
function main() {
  let option;
  let product;
  do {
    product = {};
    product.name = prompt("Product name: ");
    product.price = prompt("Product price: ");
    product.quantity = prompt("Product quantity: ");

    stock.push(product);
    option = prompt("Do you want to add a product? (y/n) ");
  } while (option == "y");

  console.log(stock);
  let productName = prompt("What product do you want to check? ");
  checkInventory(productName);
  updateProductQuantity(productName);
  console.log(stock);
}

// Check if the product is available
let checkInventory = (productName) => {
    stock.forEach(element => {
        if (element.name === productName) {
            if (element.quantity > 0) {
                console.log(`The product ${element.name} is available.`);
                console.log(`It has ${element.quantity} units in stock.`);
            } else {
                console.log(`The product ${element.name} is not available.`);
            }
        }
    });
};

let updateProductQuantity = (productName) => {
    stock.forEach(element => {
        if(element.name === productName) {
            element.quantity = prompt('New quantity: ');
        } 
    });
};

// Main loop
main();
