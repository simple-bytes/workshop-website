document.addEventListener('DOMContentLoaded', initNavbar);

function initNavbar() {
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
