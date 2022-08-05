'use strict'
// Objects
// 1. Literals and properties
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all obecjts in JavaScript are instances of Object

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const yejin = { name: 'yejin', age:23};
print(yejin);

// 2. Computed properties
console.log(yejin.name);
console.log(yejin['name']);
yejin['hasJob'] = true;
console.log(yejin.hasJob)

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(yejin, 'name')

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age:4};
// 이런 방법은 매우 귀찮고 비효율적이다.

function makePerson(name, age) {
    return {
        //Javascript에는 Key와 Value의 이름이 동일하면 생략해도 된다. (property value shorthand)
        name, 
        age,
    };
}

const person4 = makePerson('yejin', 23);
console.log(person4) 

// 4. Constructor function
function Person2(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person5 = new Person2('yejin2', 23);
console.log(person5)

// 5. in operator: property existence check (key on object)
console.log('name' in yejin);
console.log('age' in yejin);
console.log('no' in yejin);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in yejin) {
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4,5];
for (value of array) {
    console.log(value);
}

//7. Fun cloning 
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'yejin', age:'23'};
const user2 = user;
user2.name = 'coder';
console.log(user)

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// new way!
const user4 = {}
Object.assign(user4, user);
console.log(user4)
// or~
const user5 = Object.assign({}, user);
console.log(user5)
//another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color, mixed.size) 