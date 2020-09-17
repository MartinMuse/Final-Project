import {Header} from "./Header.js";
import {LocalStorage} from "./LocalStorage.js";

export class HomeHeader extends Header{
    constructor(header, navBar) {
        super(header);

        this.navBar = [{
            link: 'index.html',
            title: 'Home'
        }, {
            link: './src/pages/products-page.html',
            title: 'Products'
        }, {
            link: './src/pages/comments.html',
            title: 'Comments'
        }];
    }


    checkStatus(){
        if (LocalStorage.getFromLocalStorage("userStatus")===true){
            this.navBar.push({
                link: './src/pages/cart.html',
                title: 'Cart'
            },{
                link: '',
                title: 'Log out'
            })
        }
        else {
            this.navBar.push({
                link: './src/pages/login-page.html',
                title: 'Log in'
            })
        }
    }

    scrolledHeader() {

        if (this.header) {
            window.onscroll = () => {

                const scrolled = window.pageXOffset || document.documentElement.scrollTop;
                if (scrolled > 60) {
                    this.header.style.backgroundColor = "black"
                } else {
                    this.header.style.backgroundColor = "transparent"
                }
            }
        }
        return this
    }
}
const homeHeader = new HomeHeader('home-header')
homeHeader.checkStatus()
homeHeader.render().scrolledHeader()
console.log('HomeHeader', homeHeader)