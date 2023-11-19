let value = 10;

function mySyncFunction(callback) {
  callback(); 
}

mySyncFunction(() => {
  value = 20;
});

console.log(value);