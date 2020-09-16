const url = "https://5f560e6a32f56200168bcdc3.mockapi.io/api/data/users";

class LoginClass {
  constructor(passwordInputId = "input-password", emailInputId = "input-email", loginEnterId="loginEnter") {
    this._loginBtn = document.getElementById(loginEnterId);
    this._passwordInput = document.getElementById(passwordInputId);
    this._emailInput = document.getElementById(emailInputId);
    this._userData = {}
    this._loginContainer=document.querySelector(".login__container")
    this._messageContainer=document.querySelector(".message__container")

    this._serverResponse = async function () {
      let response = await fetch(url)
      return await response.json()
    }

    this._isCorrectUser = function (elem, index, array) {
      if ((elem.password === this._userData.password) && (elem.email === this._userData.email))
        this._userData.name = elem.name;
      return (elem.password === this._userData.password) && (elem.email === this._userData.email)
    }.bind(this)
  }

  setUserData(){
    this._userData.password=this._passwordInput.value;
    this._userData.email=this._emailInput.value;
  }

  addListener() {
    this._loginBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.loginEvent();
    })
  }

  hideLoginSection(){
    this._loginContainer.hidden=true;
  }

  createMessage(){
    this._messageContainer.innerHTML="<span class='message__title'>Login successful!</span>"
  }

  loginEvent = async function () {
    const users = await this._serverResponse()
    this.setUserData();
    if (users.some(this._isCorrectUser)) {
      localStorage.setItem('userStatus','true')//установка статуса
      this.hideLoginSection();
      this.createMessage();
    } else {
      //стилизация полей и появление подсказки
    }
  }.bind(this)
}


let login = new LoginClass();
login.addListener();
