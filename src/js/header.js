export function scrolledHeader() {
    const headerNav = document.getElementById('home-header')
    window.onscroll = function () {
        let scrolled = window.pageXOffset || document.documentElement.scrollTop;
        if (scrolled > 60) {
            headerNav.style.backgroundColor = "black"
        } else {
            headerNav.style.backgroundColor = "transparent"
        }
    }
}
scrolledHeader()

