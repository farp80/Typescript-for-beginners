"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * More Useful Decorators
 */
function WithTemplate(template, hookId) {
    return function (_) {
        console.log("With Template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
/**
 * decorators are for classes
 */
function Logger(constructor) {
    console.log("Logger ... ");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Perez";
        console.log(`Name: ${name}`);
    }
};
Person = __decorate([
    Logger,
    FactoryLogger("Factory Logger"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const persona = new Person();
console.log(persona);
/**
 * Decorator factory
 */
function FactoryLogger(message) {
    return function (constructor) {
        console.log(constructor);
        console.log(message);
    };
}
//# sourceMappingURL=decorators.js.map