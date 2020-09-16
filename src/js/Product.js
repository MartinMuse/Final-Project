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
                
                <span title="add to see more" class="product__description main sub-title" 
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

                    AnimatedModal.render(description);
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

class AnimatedModal {
    constructor(selector, product, options) {
        this.isOpen = false;
        this.opener = document.querySelector(selector);
        this.modalName = this.opener.getAttribute('href').replace('#', '');
        this.closer = document.querySelector('.close-' + this.modalName);
        this.modal = document.querySelector('#' + this.modalName);
        this.product = product;

        this.settings = Object.assign({
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            zIndexIn: '99999',
            zIndexOut: '-9999',
            color: 'white',
            opacityIn: '1',
            opacityOut: '0',
            animatedIn: 'zoomIn',
            animatedOut: 'zoomOut',
            animationDuration: 600,
            overflow: 'auto',
            // Callbacks
            beforeOpen: function () {
            },
            afterOpen: function () {
            },
            beforeClose: function () {
            },
            afterClose: function () {
            }
        }, options);

        this.init();
    }

    init() {
        this.modal.classList.add('animated', this.modalName + '-off');

        const cssText =
            'position: ' + this.settings.position + ';' +
            'width: ' + this.settings.width + ';' +
            'height: ' + this.settings.height + ';' +
            'top: ' + this.settings.top + ';' +
            'left: ' + this.settings.left + ';' +
            'background-color: ' + this.settings.color + ';' +
            'overflow-y: ' + this.settings.overflow + ';' +
            'z-index: ' + this.settings.zIndexOut + ';' +
            'opacity: ' + this.settings.opacityOut + ';' +
            'animation-duration: ' + this.settings.animationDuration + 'ms' + ';';
        this.modal.style.cssText = cssText;

        const open = (event) => {
            event.preventDefault();
            document.body.style.overflow = 'hidden';

            if (!this.isOpen) {
                this.modal.classList.remove(this.settings.animatedOut, this.modalName + '-off');
                this.modal.classList.add(this.modalName + '-on');
                this.settings.beforeOpen();
                this.modal.style.opacity = this.settings.opacityIn;
                this.modal.style.zIndex = this.settings.zIndexIn;
                this.modal.classList.add(this.settings.animatedIn);

                setTimeout(this.afterOpen.bind(this), this.settings.animationDuration);
                this.isOpen = true;
            }
        }

        this.opener.addEventListener('click', open);

        const close = (event) => {
            event.preventDefault();
            document.body.style.overflow = 'auto';

            if (this.isOpen) {
                this.modal.classList.remove(this.modalName + '-on');
                this.modal.classList.add(this.modalName + '-off');
                this.modal.classList.remove(this.settings.animatedIn);
                this.modal.classList.add(this.settings.animatedOut);

                setTimeout(this.afterClose.bind(this), this.settings.animationDuration);
                this.isOpen = false;
            }
        }
        this.closer.addEventListener('click', close);
    }

    static render(product) {
        const productDescription = document.getElementById('modal-content')

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

                    <button class="button categories__button--hovered product__button">
                        <i class="fa fa-cart-arrow-down product__fa" aria-hidden="true"></i>
                        to card
                    </button>

                    <h4 class="title--uppercase">
                        Description
                    </h4>
                    <span class="sub-title">
                     ${product.description} 
                    </span>
                    <p class="title--uppercase">
                       ADDITIONAL INFORMATION
                    </p>
                    <span> ${product.additionalInformation}</span>
                </div>
            </li>`
        productDescription.insertAdjacentHTML("afterbegin", HTML);
    }

    afterOpen() {
        this.settings.afterOpen();
    }

    afterClose() {
        this.modal.style.zIndex = this.settings.zIndexOut;
        this.settings.afterClose();
    }
}

let g = new AnimatedModal('#demo01');

