const btns = document.querySelectorAll('.question-btn');

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const element = e.currentTarget.parentElement.parentElement;
        element.classList.toggle('show-text');
    });
});