const ts = require('webdriverio');
const test = require('../Utilities');

describe('App', function () {
    it('should open a driver', function () {
        test.openApplication();
        test.waitUntilElementIsVisible('input#lst-ib');
        test.inputText('input#lst-ib', 'Today is my birthday')

    });

});	