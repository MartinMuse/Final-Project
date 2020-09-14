
class API {
    constructor(category, key) {
        this.category = category;
        this.key = key || '5f560e6a32f56200168bcdc3';
    }

    createUrl() {
        this.appUrl = `https://${this.key}.mockapi.io/api/data/${this.category}`;
        return this;
    }

    async getProductList() {
        const OK = 200;

        fetch(this.appUrl)
            .then(response => {
                if (response.status === OK) {
                    return response.json();
                } else {
                    throw new Error('error');
                }
            })
            .then(data => {
                renderProduct(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        return this
    }
}

const product = new API('products');
product.createUrl().getProductList();

const productList = document.getElementById('productList')

function renderProduct(data) {
    if (data !== undefined) {
        let  arr
        data.forEach(function (item) {
            if (item.category == 'Assortments') {
                return arr = item.product
            }
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
    }
}

const cart = {};
productList.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('to-cart')) {
        const id = target.dataset['id']

        if (cart .hasOwnProperty(id)) {
            cart[id][0] += 1
        } else {
            cart[id] = [1]
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log('LocalStorage', localStorage)
    }
})
