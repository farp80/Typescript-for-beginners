"use strict";
console.log(" Interfaces... ");
let username;
username = {
    age: 30,
    name: "Costapinto",
    zipCode: 33016,
    getWorkDetails(address) {
        console.log(`${this.name} works at ${address}`);
    },
};
class European {
    constructor(name) {
        this.age = 30;
        this.zipCode = 33015;
        this.name = name;
    }
}
let addFn;
addFn = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=interfaces.js.map