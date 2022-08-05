'use strict';

//Promise is a Javascript object for asynchronous operation.
//state: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work..(network, read files)
    console.log('doing somthing');
    setTimeout(()=> {
        resolve('yejin');
        // reject(new Error('no network'));
    }, 2000);
});

// 2. Consumer: then, catch, finally
promise
    .then((value) => {
    console.log(value);
})
    .catch(error => {
    console.log(error)
})
    .finally(() => {
        console.log('end')
    })

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
})

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('chicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg!`), 1000);
        // setTimeout(() => reject(new Error(`error! ${hen} => egg...`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${egg} => cooked!`), 1000);
        setTimeout(() => reject(new Error(`error! ${egg} => cook...`)), 1000);
    });

getHen()
.then(hen => getEgg(hen)) //callback를 전달할 때 받아오는 value 하나를 다른 함수로 바로 전달할 때
                            //.then(getEgg) 로 축약할 수 있다.
.catch(error => {
    return `bread`;
})
.then(egg => cook(egg))
.catch(error => {
    return `not cooked...`;
})
.then(meal => console.log(meal))
.catch(console.log);