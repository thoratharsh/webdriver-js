const ts = require('webdriverio');
const test = require('../Utilities/Utilities');

describe('Test Scenario 1', function () {
    it('Should able to open google and type text', function () {
        test.openApplication();
        test.waitUntilElementIsVisible("input[name='q']");
        test.inputText("input[name='q']", 'Today is my birthday')
    });

    it('Should able to open google and type another text', function () {
        test.openApplication();
        test.waitUntilElementIsVisible("input[name='q']");
        test.inputText("input[name='q']", 'Today is your birthday')
    });
});	