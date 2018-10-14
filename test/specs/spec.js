const ts = require('webdriverio');
const test = require('../Utilities/Utilities');

describe('App', function () {
    it.skip('should open a driver', function () {
        test.openApplication();
        test.waitUntilElementIsVisible('input#lst-ib');
        test.inputText('input#lst-ib', 'Today is my birthday')
    });
    it('Should download in given directory',function(){
        test.openApplication("https://downloadming.fun/andhadhun-2018-hindi-movie-mp3-songs/");
        test.waitUntilElementIsVisible("//a/*[text()='Download']");
        test.click("//a/*[text()='Download']");
        browser.pause(25000);
    });

});	