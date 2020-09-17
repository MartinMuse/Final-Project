import {Button} from "./Button.js";

export class Product {
    constructor(category, blockId) {
        this.productList = document.getElementById(blockId)
        this.category = category;
    }

    render(data) {
        let listProductsByCategory;
        data.forEach(item => {
            if (item.category == this.category) {
                const category = `<h4>${item.category}</h4>`
                this.productList.insertAdjacentHTML("afterbegin", category);
                return listProductsByCategory = item.product;
            }
        })

        listProductsByCategory.forEach((item) => {
            const HTML = `<li class="product__item" >
            <div class="product__img-box">
                <a>
                    <img class="product__img"
                         src=${item.assortImage}>
                </a>
            </div>

            <div class="product__description">
                <h4 class="title--uppercase">
                    <a class="product__title">
                        ${item.title}
                    </a>
                </h4>
                
                <span title="add to see more" 
                      class="myBtn product__description main sub-title" 
                       data-item = '${JSON.stringify(item)}'>
                    ${item.description}
                 </span>
                <span class="product__cost">${item.cost} </span>
                <button  data-id=${item.id} class="button to-cart categories__button--hovered product__button">
                    <i class="fa fa-cart-arrow-down product__fa" aria-hidden="true"></i>
                    to card
                </button>
                
            </div>
        </li>`;
            this.productList.insertAdjacentHTML("afterbegin", HTML);
        });
        return this
    }
}
Button.addToCart();