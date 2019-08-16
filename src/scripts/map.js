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
    const position = {lat: 47.471784, lng: 16.3544532}

    const options = {
        zoom: 15,
        center: position,
    }
    const map = new google.maps.Map(el, options);
}