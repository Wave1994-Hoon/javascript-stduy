/* before */
function Dog(name, sound) {
    this.type = '개';
    this.name = name;
    this.sound = sound;
}

function Cat(name, sound) {
    this.type = '고양이';
    this.name = name;
    this.sound = sound;
}

Dog.prototype.say = function() {
    console.log(this.sound);
}

Cat.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();


/* after */
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
}

function newDog() {
    Animal.call(this, '개', name, sound);
}

function newCat() {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;



