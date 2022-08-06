'use strict';

// Chapter 2. 
//[038] 문자열과 식 함께 다루기
const userName = "cat";
const tag = `제가 기르는 반려동물은 ${userName}입니다.`;
console.log(tag)

// Chapter 2. 
//[039] 정규 표현식 사용하기
if (/iPhone|iPod|iPad/.test(navigator.userAgent)) {
    alert("접속한 브라우저는 iOS입니다.");
}
    // 정규 표현의 test() 메소드를 사용해 문자열과 패턴 일치 여부 확인.
    // 아래 if문에서 예제 확인.
if (/J/.test('Javascript')) {
    // alert('J가 포함되어있습니다.');
}

// Chapter 2. 
//[040] 정규 표현식으로 특정 문자 검색하기
const phoneNumberText = document.querySelector('#phoneNumberText');
const warningMessage = document.querySelector('#warningMessage');

phoneNumberText.addEventListener('keyup', () => {
    const phoneNumber = phoneNumberText.value;
    // 전화번호에 하이픈(-)이 포함되면 공백(' ')으로 변환
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
// 0으로 시작하지 않거나 10자리, 11자리 수가 아니라면 경고
if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
    warningMessage.innerText = '전화번호의 형식에 맞춰 입력해주세요.';
}
else {
    warningMessage.innerHTML = '';
}
})