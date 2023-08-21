class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInformation() {
        return `${this.brand} - ${this.model} - ${this.year}`;
    }
}

let jetta = new Vehicle("Volkswagen", "jetta", 2020);
console.log(jetta.showInformation());
let gol = new Vehicle("Volkswagen", "Gol Bolinha", 2002);
console.log(gol.showInformation());