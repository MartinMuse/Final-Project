const url = "https://5f560e6a32f56200168bcdc3.mockapi.io/api/data/users";

class LoginClass {
    constructor(passwordInputId = "input-password", emailInputId = "input-email", loginEnterId = "loginEnter") {
        this.loginBtn = document.getElementById(loginEnterId);
        this.passwordInput = document.getElementById(passwordInputId);
        this.emailInput = document.getElementById(emailInputId);
        this.userData = {};
        this.loginContainer = document.querySelector(".login__container")
        this.messageContainer = document.querySelector(".login__message")

        this.serverResponse = async function () {
            let response = await fetch(url);
            return await response.json()
        }

        this.isCorrectUser = function (elem) {
            if ((elem.password === this.userData.password) && (elem.email === this.userData.email))
                this.userData.name = elem.name;
            return (elem.password === this.userData.password) && (elem.email === this.userData.email)
        }.bind(this)
    }

    setUserData() {
        this.userData.password = this.passwordInput.value;
        this.userData.email = this.emailInput.value;
    }

    // disabledButton(){
    //     if (this.emailInput.value == '' && this.passwordInput.value == ''){
    //         console.log('This.loginBtn.disabled', this.loginBtn.disabled)
    //         this.loginBtn.disabled = true;
    //     }
    // }

    addListener() {
        this.loginBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.loginEvent();
        })
    }

    hideLoginSection() {
        this.loginContainer.hidden = true;
    }

    createMessage(message) {
        this.messageContainer.innerHTML = `<span class='message__title'>${message}</span>`
    }

    sendToStartPage() {
        document.location.replace('../../index.html')
    }

    loginEvent = async function () {
        const users = await this.serverResponse()
        this.setUserData();
        if (users.some(this.isCorrectUser)) {
            localStorage.setItem('userStatus', 'true')//установка статуса
            this.hideLoginSection();
            this.sendToStartPage()
        } else {
            this.createMessage("Error, please enter password and email again");
            //стилизация полей и появление подсказки
        }
    }.bind(this)
}


let login = new LoginClass();
login.addListener();
