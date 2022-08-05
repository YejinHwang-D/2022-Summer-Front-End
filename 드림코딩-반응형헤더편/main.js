const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.menuList');
const icons = document.querySelector('.menuIcon');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});