// Explain in detail what lines 7 and 8 of this code are doing.

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj}; // uses spread syntax to spread all the properties of the object assigned to obj into a new object literal assigned to obj2
let { ...obj3 } = obj; // uses destructuring syntax to separate all properties of obj and uses rest syntax to collect them in obj3

console.log(obj2);
console.log(obj3.foo);
console.log(obj3.qux);
console.log(obj3.bar);