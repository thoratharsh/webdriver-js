const ts = require('webdriverio');

class Utilities {

    openApplication(url) {
        browser.url("https://www.google.com");
        browser.windowHandleMaximize();
    }

    inputText(locator, text) {
        try {
            browser.addValue(locator, text);
        }
        catch (err) {
            console.log("Element " + locator + "is not found")
        }
    }

    clearText(locator) {
        try {
            browser.clearElement(locator);
        }
        catch (err) {
            console.log("Element " + locator + "is not found")
        }
    }

    selectPicklistValueByIndex(locator, index) {
        try {
            browser.selectByIndex(locator, index);
        }
        catch (err) {
            console.log("Element " + locator + "is not found")
        }
    }

    selectPicklistByValue(locator, value) {
        browser.selectByValue(locator, value);
    }

    selectPicklistByVisibleText(locator, visibleText) {
        browser.selectByVisibleText(locator, visibleText);
    }

    waitUntilElementIsVisible(locator, waitTime = 10000) {
        browser.waitForVisible(locator, waitTime);
    }

    get getTextOfElement(locator) {
        return browser.element(locator).getText;
    }

    get getTitleOfCurrentPage() {
        return browser.getTitle();
    }

    get getURLOfCurrentPage() {
        return browser.getUrl;
    }

    acceptAlert() {
        browser.acceptAlert();
    }

    dismissAlert() {
        browser.dismissAlert();
    }

    get getAlertText() {
        return browser.getAlertText();
    }

    navigateBack() {
        browser.back();
    }

    navigateForward(){
        browser.forward();
    }

    get getNumberofMatchingElementsBySelector(locator) {
        var numberOfElements = browser.elements(locator);
        return numberOfElements.length;
    }

    switchFrame(locator){
        browser.frame(locator);
    }

    switchToDefaultFrame(){
        browser.frameParent();
    }

    reloadPage(){
        browser.refresh();
    }

}

module.exports = new Utilities();