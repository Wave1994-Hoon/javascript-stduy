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

Dog.prototype.say = () => {
    console.log(this.sound);
}

Cat.prototype.say = () => {
    console.log(this.sound);
}

const dog = new Dog('멍멍이', '멍멍');
const dog = new Dog('야옹이', '야옹');


