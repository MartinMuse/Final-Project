// function scrolledHeader() {
//     const homeHeader = document.getElementById('home-header')
//
//     if (homeHeader) {
//         window.onscroll = function () {
//             let scrolled = window.pageXOffset || document.documentElement.scrollTop;
//             if (scrolled > 60) {
//                 homeHeader.style.backgroundColor = "black"
//             } else {
//                 homeHeader.style.backgroundColor = "transparent"
//             }
//         }
//     }
// }
//
// scrolledHeader()

export class Header {
    constructor(header) {
        this.header = document.getElementById(header)
        this.navBar = [{
            link: '../../index.html',
            title: 'Home'
        }, {
            link: 'products-page.html',
            title: 'Products'
        }, {
            link: 'comments.html',
            title: 'Comments'
        }, {
            link: 'cart.html',
            title: 'Cart'
        }];
    }

    render() {
        this.renderNav = this.navBar.map((nav) => {
            return `<li class="header__item">
                         <a class="header__menu assortments__menu assortments__menu--hovered"
                            href=${nav.link}>
                             ${nav.title}
                        </a>
                    </li>`
        });

        this.HTML = `
            <div class="header__wrapper">
                <div class="logo header__logo">
                    <img class="logo__img"
                     src="http://chocorocco.ancorathemes.com/wp-content/uploads/2017/09/logox2_white.png">
                  </div>

             <ul class="header__list">
                ${this.renderNav}
             </ul>
             </div>`;

        if (this.header) {
            this.header.insertAdjacentHTML("afterbegin", this.HTML);
        }
        return this
    }
}

const header = new Header('header');
header.render();


