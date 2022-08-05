// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (
                    (id === 'yejin' && password === 'hwang') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (user === 'yejin') {
                    resolve({name: 'yejin', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
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
userStorage.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role!`))
.catch(console.log);


//async, await을 이용해서 변경해보기
const userStorage2 = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

async function getUserRole(input_id, input_password) {
    try {
        const user = await userStorage2.loginUser(input_id, input_password);
        const role = await userStorage2.getUserRole(user);
        alert(`Hello ${user.name}, you have a ${user.role} role!`);
    }
    catch (error) {
        console.log('not found');
    }
}
getUserRole(id, password);