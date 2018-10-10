const ts= require('webdriverio');

class Utilities{

    inputText(locator,text){
        browser.addValue(locator,text);
    }
    clearText(locator,text){
        
    }
    selectPicklistValueByIndex(locator,index){
        browser.selectByIndex(locator,index);
    }


}