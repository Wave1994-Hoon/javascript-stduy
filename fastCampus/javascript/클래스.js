/*
* ES6에서 클래스가 추가됨
* 앞에서 배운 객체 생성자를 클래스로 구현 가능
* */

class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    /* 클래스 내에서 함수를 선언하면 자동으로 프로토타입으로 생성 */
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

console.log(Animal.prototype);

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('고양이', '야옹')

dog.say();
cat.say();

