/**
 * More Useful Decorators
 */
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
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

function Logger(constructor: Function) {
  console.log("Logger ... ");
  console.log(constructor);
}

@Logger
@FactoryLogger("Factory Logger")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Perez";

  constructor() {
    console.log(`Name: ${name}`);
  }
}

const persona = new Person();
console.log(persona);

/**
 * Decorator factory
 */

function FactoryLogger(message: string) {
  return function (constructor: Function) {
    console.log(constructor);
    console.log(message);
  };
}
