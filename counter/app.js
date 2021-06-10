const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const current = e.currentTarget.classList;
        if (current.contains('increase')) {
            count++;
        } else if (current.contains('decrease')) {
            count--;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }

        if (count === 0) {
            value.style.color = 'black';
        }

        value.textContent = count;
    })
})