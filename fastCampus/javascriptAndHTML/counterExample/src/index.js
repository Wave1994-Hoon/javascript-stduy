const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

increase.onclick = () => {
    const currentNumber = parseInt(number.innerText, 10);
    number.innerText = currentNumber + 1;
}

decrease.onclick = () => {
    const currentNumber = parseInt(number.innerText, 10);
    number.innerText = currentNumber - 1;
}