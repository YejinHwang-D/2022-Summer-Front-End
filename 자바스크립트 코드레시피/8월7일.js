'use strict';

// Chapter 7.
// [113] 이벤트 처리 이해하기
const click = document.querySelector('#click');
click.addEventListener('click', () => {
    console.log("클릭!");
})

// [114] 이벤트 추가하기
const eventFunction = document.querySelector('#eventFunction');
eventFunction.addEventListener('click', func2);

function func () {
    console.log("이벤트 발생")
}

function func2 (event) {
    console.log(event.target)
}

// [115] 이벤트 리스너 1회 실행하기
const option = {
    once: true, // 한번만 실행
};
document.querySelector('#option').addEventListener('click', onClickButton, option);

function onClickButton() {
    alert("버튼 클릭!")
}

// [116] 이벤트 리스너 삭제하기
const box = document.querySelector('.box');

setTimeout(()=>{
    box.removeEventListener('click', onClickButton2);
}, 3000);

function onClickButton2() {
    alert("이벤트 실행!");
}

// [117] 페이지 로드 시 이벤트 사용하기
window.addEventListener('DOMContentLoaded', () => {
    const boxNum = document.querySelectorAll('.box').length;
    console.log(boxNum)
})
    // 그러나 script 태그에 defer 옵션을 사용하면 된다. 위 방법 필요 X.

// [118] 클릭 이벤트 사용하기
document.querySelector('.button').addEventListener('click', () => {
    alert('버튼!')
})