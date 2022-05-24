const links = document.querySelectorAll('.nav__item')
const menuButton = document.querySelector('#menu__toggle');

for (let link of links) {
    link.addEventListener('click', () => menuButton.click());
}