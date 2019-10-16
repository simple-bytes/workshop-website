import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'

document.addEventListener('DOMContentLoaded', initSlideshow)

function initSlideshow() {
    const elem = document.querySelector('.header-slider');
    if (!elem) return

    elem.style.display = 'block';

    var flkty = new Flickity( elem, {
        contain: true,
        autoPlay: true,
        wrapAround: true,
        draggable: true,
        lazyLoad: true
    })
}
