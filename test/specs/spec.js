const ts = require('webdriverio');
const test = require('../Utilities/Utilities');
var LoginPage= require('../pageObjects/LoginPage');

describe('Test Scenario 1', function () {
    it('TC001_should able to login to orange HRM', function () {
        test.openApplication();
        test.inputText(LoginPage.username(),'Admin');
        test.inputText(LoginPage.password(),'admin123');
        test.click(LoginPage.loginButton());
    });
});	