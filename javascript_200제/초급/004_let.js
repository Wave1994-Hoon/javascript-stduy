/*
* 변수 선언
* - var
* 함수 단위의 스코프
* - let
* 블록 단위의 스코프 if {} 안에 선언되었다면, 밖에서 접근 불가
* */

if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}

console.log(functionScopeValue); // global
console.log(blockScopeValue); // ReferenceError