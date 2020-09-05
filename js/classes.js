"use strict";
console.log("Classes and Interfaces ...");
class Department {
    constructor(name, salary, address) {
        this.salary = salary;
        this.address = address;
        // public is the default
        // with private properties we cannot access them outside of the class they were defined
        // SOLUTION: Use protected.
        this.employees = [];
        this.name = name;
        // this.describe();
    }
    static createNewEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`This is the Accouting Department for the NBA ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        //this.address ="234" --> readonly we cannot set new values.
        console.log(`Department: ${this.name} Base salary: $${this.salary}`);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
const department = new Department("Programming", 7800, "8390 Nw 103rd St, apt 208");
department.describe();
department.addEmployee("Fidel");
const newEmployee = Department.createNewEmployee("Raulito");
console.log(newEmployee);
console.log("Fiscal Year: ", Department.fiscalYear);
// With private we cannot do this:
//department.employees[1] = 'Noah';
department.printEmployeeInfo();
//************************************************ */
// Inheritance
//*********************************************** */
class ITDepartment extends Department {
    constructor(id, equipments) {
        super(id, 3000, "NW");
        this.equipments = equipments;
    }
    // Overriding methods.
    addEmployee(name) {
        if (name === "Fidel") {
            return;
        }
        this.employees.push(name);
    }
}
const itDepartment = new ITDepartment("IT", ["laptops", "desktops"]);
class HumanResource extends Department {
    constructor(id, reports, lastPayment) {
        super(id, 70000, "NE");
        this.reports = reports;
        this.lastPayment = lastPayment;
    }
    get mostRecentPayment() {
        if (this.reports.length == 0) {
            console.log("NO ADDITION");
        }
        return this.lastPayment;
    }
    set mostRecentPayment(value) {
        if (value) {
            console.log("add logic...");
        }
    }
    static getInstance() {
        if (HumanResource.instance) {
            return this.instance;
        }
        this.instance = new HumanResource("d2", ["April"], "01/01/2020");
        return this.instance;
    }
}
// const humanResource = new HumanResource(
// "Skyline",
// ["May", "June"],
// "04/20/2020"
// );
// humanResource.mostRecentPayment = "August";
// const hr = humanResource.mostRecentPayment;
// console.log(hr);
/**
 * Private constructor --> Singleton pattern.
 * add private to the constructor. Make sure that just one object is created.
 */
const hr = HumanResource.getInstance();
console.log(hr);
//# sourceMappingURL=classes.js.map