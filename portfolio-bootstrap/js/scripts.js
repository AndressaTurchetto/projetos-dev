window.addEventListener('DOMContentLoaded', () => {

    const mainNav = document.querySelector('#mainNav');
    const navbarCollapsible = document.body.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));

    const navbarShrink = () => {
        if (!navbarCollapsible) return;
        navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY !== 0);
    };

    const debounce = (func, delay) => {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, arguments);
            }, delay);
        };
    };

    const onNavbarItemClick = () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', debounce(navbarShrink, 100));

    // Activate Bootstrap scrollspy on the main nav element
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', onNavbarItemClick);
    });

});