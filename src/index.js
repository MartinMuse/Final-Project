//import {scrolledHeader} from "./js/header.js";
class FotmatDate {
    static getDate(date) {
        this.hours = "0" + date.getHours();
        this.minutes = "0" + date.getMinutes();
        return `${this.hours.slice(-2)}:${this.minutes.slice(-2)}`;
    };
}

class Localstorage {
    static addToLocalStorage(comments) {
        localStorage.setItem('items', JSON.stringify(comments));
    }

   static getFromLocalStorage() {
       return  localStorage.getItem('items');
    }
}

class Comment {
    constructor() {
        this.comments = [];
        this.date = FotmatDate.getDate(new Date());
        this.input = document.getElementById('input');
        this.form = document.getElementById('form');
        this.textarea = document.getElementById('textarea');
        this.commentsBox = document.getElementById("commentsBox");
    }

    addComment(name, comment) {
        if (name !== '' && comment !== '') {
            const todo = {
                id: Date.now(),
                name: name,
                comment: comment
            };
            this.comments.push(todo);
            this.addToLocalStorage(this.comments);
            this.input.value = '';
            this.textarea.value = ''
        }
    }

    addListener() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.addComment(this.input.value, this.textarea.value)
        })
    }

    addToLocalStorage(comments) {
        Localstorage.addToLocalStorage(comments)
        this.render();
    }

    getFromLocalStorage() {
        if (Localstorage.getFromLocalStorage()) {
            this.comments = JSON.parse(Localstorage.getFromLocalStorage());
            this.render();
        }
    }

    render() {
        this.commentsBox.innerHTML = ''
        let renderHTML
        this.comments.forEach((point) => {
            renderHTML =
                `<div class="comments__block">
                     <div class="comments__name-date">
                         <p>${point.name}</p>
                          <p class="sub-title">${this.date}</p>
                    </div>
                    <div class="sub-title">${point.comment}</div>
                </div>`;
            this.commentsBox.insertAdjacentHTML("afterbegin", renderHTML);
        })
    }
}

const newComment = new Comment()
newComment.getFromLocalStorage()
newComment.addListener()
console.log('Comments', newComment)
