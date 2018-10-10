const ts= require('webdriverio');

class Utilities{
    openApplication(url){
        browser.url("https://www.google.com");
        browser.windowHandleMaximize();    
    }

    inputText(locator,text){
        browser.addValue(locator,text);
    }
    clearText(locator,text){
        
    }
    selectPicklistValueByIndex(locator,index){
        browser.selectByIndex(locator,index);
    }
    waitUntilElementIsVisible(locator,waitTime=10000){
        browser.waitForVisible(locator,waitTime);
    }

}

var exports = module.exports = {}; 