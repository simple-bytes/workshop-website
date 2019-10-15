import ScrollReveal from 'scrollreveal'

document.addEventListener('DOMContentLoaded', init)

function init() {
    const config = {
        easing: 'ease',
        duration: 500,
        scale: 0.5
    };
    ScrollReveal().reveal('.page-homepage .news-list-item', config)
    ScrollReveal().reveal('.page-homepage__services .card', config)
}
