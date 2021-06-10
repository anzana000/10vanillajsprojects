const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.btn-close');
const modalContainer = document.querySelector('.modal-container');

openBtn.addEventListener('click', () => {
    modalContainer.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    modalContainer.classList.remove('open-modal')
})
