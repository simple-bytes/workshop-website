import Headroom from 'headroom.js'

document.addEventListener('DOMContentLoaded', initNavbar);

function initNavbar() {
   initBurger()
   initHeadroom()
}

function initBurger() {
    const burger = document.querySelector('.navbar-burger')
    if (!burger) return

    const menuId = burger.dataset.target
    if (!menuId) return

    const menu = document.querySelector(`#${menuId}`)
    if (!menu) return

    burger.addEventListener('click', () => {
        toggleMenu(burger, menu)
    })
}

function toggleMenu(burger, menu) {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

function initHeadroom() {
    const navbar = document.querySelector('.navbar')
    if (!navbar) return

    const headroom  = new Headroom(navbar, {
        'offset': 205,
        'tolerance': 5,
        'classes': {
          'initial': 'animated',
          'pinned': 'slideDown',
          'unpinned': 'slideUp'
        }
    });
    headroom.init();
}
