import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = 'AIzaSyAr0UpaNZYmIJ1woxO5o2dSQlkE-Mrr1CE'
document.addEventListener('DOMContentLoaded', init)

function init() {
    const el = document.querySelector('.map')
    if (!el) return

    GoogleMapsLoader.load((google) => {
        initGoogleMaps(el, google)
    })
}

function initGoogleMaps(el, google) {
    const position = {lat: 47.4725200, lng: 16.3566532}

    const options = {
        zoom: 15,
        center: position,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    }
    const map = new google.maps.Map(el, options);

    // const title = 'KFZ M. Kalkbrenner'
    // var marker = new google.maps.Marker({
    //     position,
    //     map,
    //     title
    // })
}
