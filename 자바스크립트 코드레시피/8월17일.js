'use strict';

// Chapter 7.
// [123] 스크롤 이벤트 처리하기
window.addEventListener('scroll', () => {
    // console.log("스크롤 작업 ", window.scrollX, window.scrollY)
})

// [124] 텍스트 선택 이벤트 처리하기
// 말풍선 요소
const balloon = document.querySelector('#balloon');

// 대상 문자열 요소
const paragraph = document.querySelector('.paragraph');

// 선택 작업 시 처리
paragraph.addEventListener('selectstart', () => {
  // 클릭 해제 시 처리
  paragraph.addEventListener(
    'mouseup',
    (event) => {
      // 선택한 문자열 가져오기※
      const selectionCharacters = window.getSelection().toString();

      if (selectionCharacters.length > 0) {
        // 한 글자 이상인 경우 문자를 표시
        balloon.innerHTML = selectionCharacters;
        balloon.classList.add('on');
      } else {
        // 선택된 문자열이 없으면 말풍선 닫기
        removePopup();
      }
    },
    {
      once: true
    }
  );
});

balloon.addEventListener('click', removePopup);

function removePopup() {
  balloon.classList.remove('on');
}

// [127] 키보드 입력 이벤트 처리하기
// 125번, 126번은 스마트폰 관련
const textarea2 = document.querySelector('.textarea');
textarea2.addEventListener('keydown', () => {
    console.log('keydown')
})
textarea2.addEventListener('keypress', () => {
    console.log("keypress")
})
textarea2.addEventListener('keyup', () => {
    console.log('keyup')
})

const inputText = document.querySelector('.textarea2');
const stringNum = document.querySelector('.string_num');
inputText.addEventListener('keyup', onKeyUp);
function onKeyUp() {
    const text = inputText.value;
    stringNum.innerText = text.length;
}
