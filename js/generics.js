"use strict";
const names = [];
// <string> --> Generics
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is OK");
    });
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "fifo" }, { age: 30 });
mergeObj.age;
/***
 * If we do not use Generics then mergeObj does not know about any properties (name nor age)
 */
// constraint: extends
//keyof
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
/**
 * Generic Classes
 */
class CustomStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get items() {
        return [...this.data];
    }
}
const customStorage = new CustomStorage();
customStorage.addItem("Microwave");
function createCourseGoal(title, name, date) {
    let courseGoal = {};
    courseGoal.completion = date;
    courseGoal.description = name;
    courseGoal.title = title;
    return courseGoal;
}
//# sourceMappingURL=generics.js.map