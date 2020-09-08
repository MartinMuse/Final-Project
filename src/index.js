export function scrolledHeader() {
    let headerNav = document.getElementById('header')
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