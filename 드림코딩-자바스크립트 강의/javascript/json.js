'use strict';

//JSON
//JavaScript Object Natation

// 1. Object to JSON
// stringfiy(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json)

const rabbit = {
    name: 'yejin',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit, ["name"]);
console.log(json)
json = JSON.stringify(rabbit, (key, value) => {
    return key == 'name' ? 'tori' : value;
});
console.log(json)


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj)
rabbit.jump();

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate()) 
//다시 obj로 만들 때 string으로 왔기 때문..
//위에서 콜백 함수를 통해 다시 Date 객체로 만들었기에 오류 없이 출력 가능