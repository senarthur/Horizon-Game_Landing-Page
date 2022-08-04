const bar = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');
const main = document.querySelector('main');


bar.addEventListener('click', () => {
    nav.classList.toggle('active');
})