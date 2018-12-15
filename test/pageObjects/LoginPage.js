class LoginPage {
    username() {
        return "#txtUsername";
    }
    password(){
        return "#txtPassword";
    }
    loginButton(){
        return "#btnLogin";
    }
}

module.exports = new LoginPage();