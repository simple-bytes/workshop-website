import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = 'AIzaSyAr0UpaNZYmIJ1woxO5o2dSQlkE-Mrr1CE'
document.addEventListener('DOMContentLoaded', initLazily)

function initLazily() {
    let mapElement = document.querySelector('.map')
    if (!mapElement) return
    
    // init map lazily (via intersection ovserver)
    
     let options = {
      root: null,
      rootMargin: '100px',
      threshold: 0
    }

    // observe map element
    let observer = new IntersectionObserver(onIntersectionObserverChange, options);
    observer.observe(mapElement);
    
    // intersectin observer callback
    function onIntersectionObserverChange(changes, observer) {
        changes.forEach(change => {
            if (change.intersectionRatio > 0) {
                init(mapElement);
            }
        });
    }
}

function init(el) {
    console.log('init map');
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
