document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.mobile-nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }
});
