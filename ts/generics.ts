const names: Array<string | string> = [];
// <string> --> Generics

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is OK");
  });
});

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "fifo" }, { age: 30 });
mergeObj.age;

/***
 * If we do not use Generics then mergeObj does not know about any properties (name nor age)
 */

// constraint: extends

//keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

/**
 * Generic Classes
 */
class CustomStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  get items() {
    return [...this.data];
  }
}

const customStorage = new CustomStorage<string>();
customStorage.addItem("Microwave");

/**
 * Utility Types
 * Partial: It turns an object with optional properties
 */

interface CourseGoal {
  title: string;
  description: string;
  completion: Date;
}

function createCourseGoal(title: string, name: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.completion = date;
  courseGoal.description = name;
  courseGoal.title = title;
  return courseGoal as CourseGoal;
}
