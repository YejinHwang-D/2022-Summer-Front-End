'use strict';

// Chapter 7.
// [119] 마우스 조작 이벤트 사용하기
const logArea = document.querySelector('#div');
logArea.addEventListener('mousedown', () => {
    logArea.innerHTML = '마우스 클릭 이벤트 발생';
})
logArea.addEventListener('mouseup', () => {
    logArea.innerHTML = '마우스 버튼을 떼는 이벤트 발생';
})
logArea.addEventListener('mouseover', () => {
    logArea.innerHTML = '마우스 이동 이벤트 발생';
})



// [120] 마우스 오버 이벤트 사용하기
const mouseOver = document.querySelector('#mouseover');
const mouseOverParent = document.querySelector('#parent');
mouseOverParent.addEventListener('mouseenter', () => {
    console.log('포인팅 디바이스가 요소 위에 있음');
})
mouseOverParent.addEventListener('mouseleave', () => {
    console.log('포인팅 디바이스가 요소를 벗어남');
})
mouseOver.addEventListener('mouseenter', () => {
    console.log('내부 박스에 포인팅!');
})



// [121] 마우스 오버 이벤트 사용하기 (이벤트 버블링)
const mouseOverParent2 = document.querySelector('#parent2');
const mouseOver2 = document.querySelector('#mouseover2');
mouseOverParent2.addEventListener('mouseover', () => {
    console.log("부모 요소 mouseover");
})
mouseOverParent2.addEventListener('mouseout', () => {
    console.log("부모 요소 mouseout");
})
mouseOver2.addEventListener('mouseover', () => {
    console.log('자식 요소 mouseover');
}) // 부모의 console도 함께 발생! = 이벤트 버블링

// [122] 마우스 좌표 확인하기
const targetBox = document.querySelector('#target');
targetBox.addEventListener('mousemove', (event) => {
    console.log(event.clientX, event.clientY)
})