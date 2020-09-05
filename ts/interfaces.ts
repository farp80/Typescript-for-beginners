console.log(" Interfaces... ");
interface Person {
  age: number;
  name: string;
  getWorkDetails?(address: string): void;
  readonly zipCode: number;
  // it does not allow public nor private access modifiers.
}

interface American extends Person {
  state: string;
}

let username: Person;
username = {
  age: 30,
  name: "Costapinto",
  zipCode: 33016,
  getWorkDetails(address: string) {
    console.log(`${this.name} works at ${address}`);
  },
};

class European implements Person {
  name: string;
  age = 30;
  constructor(name: string) {
    this.name = name;
  }
  zipCode = 33015;
}

interface AddFunction {
  (a: number, b: number, c?: string): number;
}

let addFn: AddFunction;
addFn = (n1: number, n2: number) => {
  return n1 + n2;
};
