import Flickity from 'flickity'
import 'flickity/dist/flickity.min.css'

document.addEventListener('DOMContentLoaded', initSlideshow)

function initSlideshow() {
    const elem = document.querySelector('.header-slider');

    var flkty = new Flickity( elem, {
        contain: true,
        // autoPlay: true,
        wrapAround: true
    })
}
