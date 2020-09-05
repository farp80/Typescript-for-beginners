"use strict";
// Types
/// <reference path="working_with_namespaces.ts" />
// add namespace name the same for each file used as reference.
function add(num1, num2) {
    return num1 + num2;
}
const result = add(33, 45);
console.log(result);
//Functions as Type
let combineValues; // return type;
// functions types and callback
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(3, 4, (result) => {
    console.log(result);
});
// never type
function generateError(message, code) {
    throw { message: message, status: code };
}
generateError(" No able to compile", 500);
/**
 * Array and object destructuring
 * ... spread operator
 */
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
const activeHobbies2 = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
let [hobby, hobby2] = hobbies;
let [hobby5, hobby3, ...remainingHobbies] = hobbies;
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const { firstName: userName, age } = person; // {value1, value2} => properties in the object
/**
 * Rest Parameters (list of values)
 */
const addSpreaded = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const resultAdded = addSpreaded(1, 2, 3, 4, 5.5);
//# sourceMappingURL=app.js.map