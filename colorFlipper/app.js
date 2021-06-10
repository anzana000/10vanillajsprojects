const colors = ['green', 'yellow', '#0984e3', 'rgb(232, 67, 147)', '#55efc4','#2d3436','#341f97'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
    const randomNumber = getRandom();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

const getRandom = () => {
    return Math.floor(Math.random() * colors.length);
}