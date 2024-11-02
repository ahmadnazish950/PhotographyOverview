
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.getElementById('#nav');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll Down
            navbar.classList.add('hidden');
        } else {
            // Scroll Up
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });
});
