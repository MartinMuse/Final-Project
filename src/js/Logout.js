class LogoutClass{
  constructor(logoutId="Log out") {
    this.logoutBtn = document.getElementById(logoutId);
  }

  addListener() {
    this.logoutBtn.addEventListener('click', (e) => {
      e.preventDefault()
      this.logoutEvent();
    })
  }
  logoutEvent(){
    localStorage.setItem('userStatus','false')
  }
}

const logout=new LogoutClass();
logout.addListener()