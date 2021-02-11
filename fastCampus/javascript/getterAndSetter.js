const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('run sum method')
        return this.a + this.b;
    }
};

console.log(numbers.sum)
numbers.b = 5;
console.log(numbers.sum)

const dog = {
    _name: '멍멍이',
    set name(value) {
        console.log('이름이 바뀐다.')
        this._name = value;
    },
    get name() {
        console.log('name을 조회')
        return this._name;
    }
}

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);