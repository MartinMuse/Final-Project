// import {scrolledHeader} from "./js/header.js";
// import {Comment} from './js/comments.js'

import {LocalStorage} from "./js/localStorage.js";

class API {
    constructor(category, key, query) {
        this.query = query || 'products';
        this.key = key || '5f560e6a32f56200168bcdc3';
    }

    createUrl() {
        this.appUrl = `https://${this.key}.mockapi.io/api/data/${this.query}`;
        return this;
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
            const assortments = new Product('Assortments', 'productList');
            assortments.render(result).addListener()

            const chocolateBars = new Product('Chocolate bars', 'productList');
            chocolateBars.render(result)
        }
        return result
    }
}

const request = new API();
request.createUrl().getResponse()


class Product {
    constructor(category, blockId) {
        this.productList = document.getElementById(blockId)
        this.cart = {};
        this.category = category;
    }

    render(data) {
        let listProductsByCategory;

        data.forEach(item => {
            if (item.category == this.category) {
                console.log('This', this)
                let g = `<h4>${item.category}</h4>`
                this.productList.insertAdjacentHTML("afterbegin", g);
                return listProductsByCategory = item.product
            }
        })

        listProductsByCategory.forEach((item) => {
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
            this.productList.insertAdjacentHTML("afterbegin", HTML);
        })
        return this
    }

    addListener() {
        this.productList.addEventListener('click', (e) => {
                const target = e.target;

                if (target.classList.contains('to-cart')) {
                    const id = target.dataset['id'];

                    if (this.cart.hasOwnProperty(id)) {
                        this.cart[id][0] += 1
                    } else {
                        this.cart[id] = [1]
                    }
                    LocalStorage.addToLocalStorage('cart', this.cart);
                    // LocalStorage.getFromLocalStorage('cart')
                    console.log('LocalStorage', localStorage)
                }
            }
        )
    }
}


