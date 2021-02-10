/*
* 원시 타입 (Primitive type)
* - 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장
* - 변경 불가능(Immutable Value) 특징
* - 종류: Number, Boolean, String, Symbol, null, undefined
*
* 참조 타입 (Reference Type)
* - 값의 메모리 주소 참조
* */

var x = 5; // Number
var y = "five"; // String
var isTrue = true; // Boolean
var empty = null; // null
var nothing; // undefined
var symbol = Symbol('me'); // Symbol

var item = {
    price: 5000,
    count: 10
}; // 객체

var fruits = ['apple', 'oragne', 'kiwi'] // Array
var addFruit = function (fruit) {
    fruits.push(fruit)
}; // function

addFruit("melon");
console.log(fruits)

