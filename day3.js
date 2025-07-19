const person = {
  name: "joe",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.greet());

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2);

const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);

fruits.push("orange");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
console.log(fruits.includes("banana"));
console.log(fruits.indexOf("cherry"));
console.log(fruits.slice(0, 2));
console.log(fruits.splice(1, 1));

function greet(name) {
  return `Hello, ${name}`;
}

const add = (a, b) => a + b;

console.log(greet("Prede"));
console.log(add(5, 3));

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(n => n * n);
console.log(squared);

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

const joined