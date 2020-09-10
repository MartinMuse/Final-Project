class FotmatDate {
    static getDate(date) {
        this.hours = `0 ${date.getHours()}`;
        this.minutes = `0 ${date.getMinutes()}`;
        return `${this.hours.slice(-2)}:${this.minutes.slice(-2)}`;
    };
}

class LocalStorage {
    static addToLocalStorage(comments) {
        localStorage.setItem('items', JSON.stringify(comments));
    }

    static getFromLocalStorage() {
        return localStorage.getItem('items');
    }
}

export class Comment {
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
            const data = {
                id: Date.now(),
                name: name,
                comment: comment
            };
            this.comments.push(data);
            this.addCommentsToLocalStorage(this.comments);
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

    addCommentsToLocalStorage(comments) {
        LocalStorage.addToLocalStorage(comments)
        this.render();
    }

    getCommentsFromLocalStorage() {
        if (LocalStorage.getFromLocalStorage()) {
            this.comments = JSON.parse(LocalStorage.getFromLocalStorage());
            this.render();
            return this;
        }
    }

    render() {
        this.commentsBox.innerHTML = '';

        this.comments.forEach((point) => {
            const renderHTML =
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

const newComment = new Comment();
newComment.getCommentsFromLocalStorage()
newComment.addListener()