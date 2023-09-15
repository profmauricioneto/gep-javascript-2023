let myobj = {};
console.log(myobj);
myobj.name = "Maurício Neto";
console.log(myobj);
myobj.age = 33;
console.log(myobj);
myobj["class"] = ["linguagens 1", "linguagens 2", "GEP"];
console.log(myobj);
// console.log(myobj.class[1]);
for(att in myobj) {
    console.log(`${att} -> ${myobj.att}`);
}