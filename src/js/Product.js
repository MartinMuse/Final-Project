import {LocalStorage} from "./LocalStorage.js";

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

class Button {
    static addToCart() {
        const productList = document.getElementById('productList')
        const cart = LocalStorage.getFromLocalStorage('cart') || {};

        productList.addEventListener('click', (e) => {
                const target = e.target;
                console.log('Target', target)
                const itemTitle = target.parentNode.querySelector('.product__title').innerHTML;
                const itemPrice = target.parentNode.querySelector('.product__cost').innerHTML;

                if (target.classList.contains('main')) {

                    const dataItem = target.dataset['item'];
                    const description = JSON.parse(dataItem)
                    Modal.render(description)
                }

                if (target.classList.contains('to-cart')) {
                    const id = target.dataset['id'];
                    if (cart.hasOwnProperty(id)) {
                        cart[id][2] += 1
                    } else {
                        cart[id] = [itemTitle, itemPrice, 1]
                    }
                    LocalStorage.addToLocalStorage('cart', cart);
                }
            }
        )
    }
}

Button.addToCart();

class Modal {
    static render(product) {
        const modal = document.getElementById('myModal');
        const span = document.getElementsByClassName("close")[0];
        const content = document.getElementById("content")
        modal.style.display = "block";

        content.innerHTML = ''

        const HTML = `<li class="product__item">
                <div class="product__img-box">
                    <a>
                        <img class="product__img"
                             src=${product.assortImage}>
                    </a>
                </div>

                <div class="product__description">
                  <h4 class="title--uppercase">
                     <a>${product.title}</a>
                  </h4>

                    <span class="product__cost">${product.cost}</span>
                    <span class="product__description sub-title ">${product.description} </span>

                    <h4 class="title--uppercase">
                        Description
                    </h4>
                    <span  class="sub-title ">
                     ${product.description}
                    </span>
                    <p class="title--uppercase">
                       ADDITIONAL INFORMATION
                    </p>
                    <span> ${product.additionalInformation}</span>
                </div>
            </li>`

        content.insertAdjacentHTML("afterbegin", HTML);
        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

new Modal()