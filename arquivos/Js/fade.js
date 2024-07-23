document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".stats");

    function checkInView() {
        sections.forEach(function(section) {
            var bounding = section.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                section.classList.add("in-view");
            } else {
                section.classList.remove("in-view");
            }
        });
    }

    // Verifica ao carregar a página
    checkInView();

    // Verifica quando o usuário rola a página
    window.addEventListener("scroll", checkInView);
    // Verifica ao redimensionar a janela
    window.addEventListener("resize", checkInView);
});
