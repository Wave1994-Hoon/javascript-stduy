/*
* const
* - let 키워드와 마찬가지로 블록 단위로 스코프 정의
* - 단, 수정 불가능하고 선언 시 값이 할당 되어야함
* */

const URL = 'http://js.com';
// URL = 'http://com'; ---> error

if (true) {
    const URL2 = 'http://js.com';
}

// onsole.log(URL2); --> error