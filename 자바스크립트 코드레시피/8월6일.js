'use strict';

// Chapter 6.
// [094] 경고 표시하기
const btn = document.querySelector('#alertBtn');
btn.addEventListener('click', (e) => {
    alert('안녕하세요!');
});

// [095] 확인창 표시하기
const btn2 = document.querySelector('#confirmBtn');
btn2.addEventListener('click', (e) => {
    const result = confirm('잘 지내고 계세요?')
    if (result) {
        alert("다행이에요!");
        document.querySelector('.log').innerHTML = "오늘의 기분 좋음";
    }
    else {
        alert("저런.. 무슨 일이 있으신가요?");
    }
});

// [096] 입력 프롬프트 표시하기
const btn3 = document.querySelector('#promptBtn');
btn3.addEventListener('click', () => {
    const value = prompt('오늘 무엇을 하셨어요?', 'input your answer');
    document.querySelector('.log').innerHTML = value;
})

// [097] 윈도우 사이즈 확인하기
const width = window.innerWidth;
const height = window.innerHeight;
console.log(`width= ${width}, height=${height}`);

window.addEventListener('resize', resizeHandler); //함수를 넣을 수도 있다!
function resizeHandler(event) {
    const w = innerWidth;
    const h = innerHeight;
    document.querySelector('.width').innerHTML = w;
    document.querySelector('.height').innerHTML = h;
}

// [098] 디바이스 화소 확인하기
const pixel = window.devicePixelRatio;
console.log(pixel)
    // 일반적인 디스플레이 비율이 1, 아이폰&안드로이드는 2, 고급 사양의 아이폰&안드로이드는 3
    // Windows와 macOS가 2인 경우가 많으며, 대부분 2.

// [099] 캔버스에 디바이스 화소 맞추기
const px = window.devicePixelRatio;
    // 캔버스의 논리적인 크기
const w = 200;
const h = 200;

    // 캔버스 요소 사이즈 조정
const canvas = document.querySelector('canvas');
canvas.width = w * px; // 실제 크기는 배가 됨
canvas.height = h * px;
canvas.style.width = w + 'px'; // 화면 표시 단위
canvas.style.height = h + 'px';

const context = canvas.getContext('2d');
context.scale(px, px);
context.fillStyle = 'red';
context.arc(w/2, h/2, 100, 0, 2*Math.PI);
context.fill();

document.querySelector('.log').innerHTML = `디바이스의 화소 비율은 ${px}입니다.`;

// [100] 터치 디바이스 사용 확인하기
const isSupported = !!(
    'ontouchstart' in window ||
    (navigator.pointerEnabled && navigator.maxTouchPoints > 0)
);
console.log(isSupported) // macbook이라 false.

// [101] 페이지 이동하기
console.log(location.href); // 현재 페이지이의 URL
// location.href = '8월5일.html';

// [102] 페이지 리로드하기
const reloadBtn = document.querySelector('#reload');
reloadBtn.addEventListener('click', () => {
    location.reload();
    // 만약 reload(true)로 하면 브라우저의 캐시를 무시.
    // 데이터를 동적으로 표시하는 페이지에서 사용.
})

// [103] 페이지 이동하기(앞/뒤로 가기)
const back = document.querySelector('#back');
const forward = document.querySelector('#forward');
const go = document.querySelector('#go');

back.addEventListener('click', () => {
    history.back();
})
forward.addEventListener('click', () => {
    history.forward();
})
go.addEventListener('click', () => {
    history.go(-1); // 뒤로 가기와 동일
})

// [104] 해시(#) 처리하기
const hash = location.hash;
location.hash = 'app';

// [105] 해시 변경 확인하기
    // 1. 페이지 내 앵커 링크를 클릭할 때
    // 2. 브라우저의 '뒤로 가기', '앞으로 가기' 버튼을 눌렀을 때
    // 3. 유저가 URL의 해시를 변경할 때
window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
    const hash = location.hash;
    document.querySelector('.log').innerHTML = `현재 앵커는 ${hash}입니다.`;
    console.log(hash)
}

// [106] 새 윈도우 창 열기
const openBtn = document.querySelector('#open');
openBtn.addEventListener('click', () => {
    const open = window.open('8월5일.html');
    open.focus();
})

// [107] 스크롤 크기 확인하기
console.log(window.scrollX);
console.log(window.scrollY);

// [108] 스크롤 설정하기
const scrollBtn = document.querySelector('#scroll');
scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

// [109] 타이틀 변경하기
const title = document.title;
document.querySelector('#apple').addEventListener('click', ()=>{
    document.title = 'apple';
})
document.querySelector('#orange').addEventListener('click', ()=>{
    document.title = 'orange';
})

// [110] 포커스 확인하기
window.addEventListener('focus', ()=>{
    document.querySelector('#focusLog').innerHTML = 'focus';
})
window.addEventListener('blur', ()=>{
    document.querySelector('#focusLog').innerHTML = 'blur';
})

// [111] 전체 화면 표시하기
const fullBtn = document.querySelector('#full');
fullBtn.addEventListener('click', ()=>{
    myRequesetFullScreen(document.body);
});

function myRequesetFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
        // 표준
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        // 사파리, 크롬
    } 
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        // 파이어폭스
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

const exitBtn = document.querySelector('#exit');
exitBtn.addEventListener('click', ()=> {
    myCancelFullScreen();
});

function myCancelFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        // 표준
    }
    else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
        // 사파리, 크롬
    }
    else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
    else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

// [112] 온라인/오프라인 대응하기
const isOnline = navigator.onLine;
if (isOnline === true) {
    console.log('online');
}
else {
    console.log('offline');
}

window.addEventListener('online', ()=>{
    console.log('event: online');
})
window.addEventListener('offline', ()=>{
    console.log('event: offline');
})