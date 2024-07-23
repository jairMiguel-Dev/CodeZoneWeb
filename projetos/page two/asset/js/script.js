document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const heroOptions = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const heroObserver = new IntersectionObserver(function(entries, heroObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }, heroOptions);

    heroObserver.observe(hero);
});
