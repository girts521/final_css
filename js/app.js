const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
const header = document.querySelector('header');


window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        navLinks.setAttribute('id', 'navLinks')
    } else {
        navLinks.removeAttribute('id', 'navLinks')
    }
})

burger.addEventListener('click', () => {
    if (navLinks.hasAttribute('style')) {
        navLinks.removeAttribute('style')
        nav.removeAttribute('style', 'opacity:1;')
    } else {
        navLinks.setAttribute('style', 'display: flex; flex-direction: column;')
        nav.setAttribute('style', 'opacity:0.9; transition:0.4s;')
    }
})