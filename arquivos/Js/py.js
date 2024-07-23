document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('hover');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('hover');
        });
    });

    // Scroll animation
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.project-item');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        elements.forEach((element, index) => {
            const offsetTop = element.offsetTop;
            if (scrollTop > offsetTop - window.innerHeight + 100) {
                element.style.transform = 'translateX(0)';
                element.style.opacity = 1;
            } else {
                element.style.transform = index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';
                element.style.opacity = 0;
            }
        });
    });
});
