import {scrolledHeader} from "./js/header.js";

let comments = [];
const commentsBox = document.getElementById("commentsBox");
const input = document.getElementById('input')
const form = document.getElementById('form')
const textarea = document.getElementById('textarea')

function renderTodos(todo) {
    commentsBox.innerHTML = '';
    console.log('Todo', todo)

    comments.forEach(function (point) {

        const renderHTML =
            `<div class="comments__block">
                     <div class="comments__name-date">
                         <p>${point.name}</p>
                         <p class="sub-title">${formatDate(new Date())}</p>
                    </div>
                    <div class="sub-title">${point.comment}</div>
                </div>`
        commentsBox.insertAdjacentHTML("beforeEnd", renderHTML);
    });
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function addTodo(name, comment) {
    if (name !== '' && comment !== '') {
        const todo = {
            id: Date.now(),
            name: name,
            comment: comment
        };
        comments.push(todo);
        addToLocalStorage(comments);
        input.value = '';
        textarea.value = ''
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo(input.value, textarea.value)
});

function addToLocalStorage(comments) {
    localStorage.setItem('items', JSON.stringify(comments));
    renderTodos(comments);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('items');
    if (reference) {
        comments = JSON.parse(reference);
        renderTodos(comments);
    }
}

getFromLocalStorage();
