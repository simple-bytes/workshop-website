import Headroom from 'headroom.js'

document.addEventListener('DOMContentLoaded', init);

function init() {
    const navbar = document.querySelector('.navbar')
    if (!navbar) return

    const burger = navbar.querySelector('.navbar-burger')
    if (!burger) return

    const menuId = burger.dataset.target
    if (!menuId) return

    const menu = navbar.querySelector(`#${menuId}`)
    if (!menu) return

    initBurger(burger, menu)
    initLinks(navbar, burger, menu)
    initHeadroom(navbar)
}

/* burger */

function initBurger(burger, menu) {
    burger.addEventListener('click', () => {
        toggleMenu(burger, menu)
    })
}

function toggleMenu(burger, menu) {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
}

/* links */

function initLinks(navbar, burger, menu) {
    const links = navbar.querySelectorAll('.navbar-item')
    links.forEach(function(link) {
        link.addEventListener('click', () => {
            if (isMobileNavOpen(burger, menu)) {
                closeMenu(burger, menu)
            }
        })
    })
}

function isMobileNavOpen(burger, menu) {
    return burger.classList.contains('is-active')
        && menu.classList.contains('is-active')
}

function closeMenu(burger, menu) {
    burger.classList.remove('is-active')
    menu.classList.remove('is-active')
}

/* headroom */

function initHeadroom(navbar) {
    const headroom  = new Headroom(navbar, {
        'offset': 75,
        'tolerance': 5,
        'classes': {
          'initial': 'animated',
          'pinned': 'slideDown',
          'unpinned': 'slideUp'
        }
    });
    headroom.init()
}
