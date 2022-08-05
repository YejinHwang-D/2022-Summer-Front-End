'use strict'

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[fruits.length - 1])

// 3. Looping over an array
// print all fruits
for (let value of fruits) {
    console.log(value)
}

// another way
fruits.forEach(function(fruit, index, array) {
    console.log('he');
}); 
// shorter!
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'orange');
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('lemmon', 'melon');
console.log(fruits);
// shift: remove and item from the benigging
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('peach', 'lemmon');
console.log(fruits);
fruits.splice(1,1, 'hi~', 'not fruit');
console.log(fruits);

// combine two arrays
const fruits2 = ['lemmon', 'apple'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('lemmon'));
// includes
console.log(fruits.includes('apple'));

// lastIndexOf
console.log(fruits);
fruits.push('lemmon');
console.log(fruits);
console.log(fruits.indexOf('lemmon'));
console.log(fruits.lastIndexOf('lemmon'));