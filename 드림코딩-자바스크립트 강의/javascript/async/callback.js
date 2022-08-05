'use strict';


// Javascript if synchronous. 동기적!
// Execte the code block by orger after hoisting.
// 호이스팅이 된 이후부터 코드가 작성한 순서에 맞춰 동기적으로 실행된다.
// hoisting: var, function declaration이 자동으로 제일 위로 올라가는 것.
console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('3');

// Synchronous callback
function printImmediately(print)  {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'yejin' && password === 'hwang') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'yejin') {
                onSuccess({name: 'yejin', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 실전 예제
// 1. id, password 입력
// login 입력
// login 시 받아온 id를 통해 role 확인
// role 시 받아온 객체를 통해 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role!`);
            },
            error => {
                console.log(error);
            })
    }, 
    error => {
        console.log(error)
    }
);