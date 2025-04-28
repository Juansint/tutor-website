document.addEventListener('DOMContentLoaded', function () {
    const toggleBottom = document.querySelector('.navbar .mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

    toggleBottom.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    
});

//Change navbar color
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if(window.scrollY > 0) {
        navbar.classList.add('navbar-scroll')
    } else {
        navbar.classList.remove('navbar-scroll')
    }
})