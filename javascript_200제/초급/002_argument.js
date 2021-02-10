/*
* 자바스크립트는 전달 인자와 매개변수가 달라도 에러를 발생시키지 않음
* 매개변수와 무난하게 함수 호출 시 더 많은 인자를 전달할 수 있음
* 매개변수 외에 함수에서만 사용 가능한 특별한 객체 --> arguments 갹채
* */

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3);

function testArg() {
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
}

testArg('a', 'b');
