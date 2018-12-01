const ts = require('webdriverio');
const test = require('../Utilities/Utilities');

describe('App', function () {
    it('Should able to open google and type text', function () {
        test.openApplication();
        test.waitUntilElementIsVisible("input[name='q']");
        test.inputText("input[name='q']", 'Today is my birthday')
    });
});	