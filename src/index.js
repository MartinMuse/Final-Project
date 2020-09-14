// import {scrolledHeader} from "./js/header.js";
// import {Comment} from './js/comments.js'

class API {
    constructor(category, key) {
        this.category = category;
        this.key = key || '5f560e6a32f56200168bcdc3';
        this.data = [];
    }

    createUrl() {
        this.appUrl = `https://${this.key}.mockapi.io/api/data/${this.category}`;
        return this;
    }

    get f() {
        return this.data
    }

    async getResponse() {
        const response = await fetch(this.appUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(`Error, status: ${response.status}`);
        } else {
            console.log('Result', result)
            Product.renderProduct(result, 'Assortments')
            Product.renderProduct(result, 'Chocolate bars')
        }
        return result
    }
}

const request = new API('products');
request.createUrl().getResponse()


const productList = document.getElementById('productList')

class Product {
    static renderProduct(data, category) {
        let arr
        data.forEach(function (item) {
            if (item.category == category) {
                return arr = item.product
            }
            console.log('Arr', arr)
            return arr
        })

        arr.forEach(function (item) {
            const HTML = `<li class="product__item" >
            <div class="product__img-box">
                <a href="">
                    <img class="product__img"
                         src=${item.assortImage}>
                </a>
            </div>

            <div class="product__description">
                <h4 class="title--uppercase">
                    <a class="product__title">${item.title}</a>
                </h4>
                <span class="product__description sub-title ">${item.description}</span>
                <span class="product__cost">${item.cost} </span>
                <button  data-id=${item.id} class="button to-cart categories__button--hovered product__button">
                    <i class="fa fa-cart-arrow-down product__fa" aria-hidden="true"></i>
                    to card
                </button>
            </div>
        </li>`;
            productList.insertAdjacentHTML("afterbegin", HTML);
        })


        // addListener() {
        //     const cart = {};
        //     productList.addEventListener('click',
        //
        //         function (e) {
        //             const target = e.target;
        //
        //             if (target.classList.contains('to-cart')) {
        //                 const id = target.dataset['id']
        //
        //                 if (cart.hasOwnProperty(id)) {
        //                     cart[id][0] += 1
        //                 } else {
        //                     cart[id] = [1]
        //                 }
        //                 localStorage.setItem('cart', JSON.stringify(cart))
        //                 console.log('LocalStorage', localStorage)
        //             }
        //         }
        //     )
        // }
    }
}

const product = new Product()
console.log(product)