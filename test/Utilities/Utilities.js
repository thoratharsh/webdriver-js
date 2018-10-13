const ts = require('webdriverio');

class Utilities {
    
    openApplication(url) {
        browser.url(url);
        browser.windowHandleMaximize();
    }

    click(locator){
        browser.click(locator);
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

    getTextOfElement(locator) {
        return browser.element(locator).getText;
    }

    getTitleOfCurrentPage() {
        return browser.getTitle();
    }

    getURLOfCurrentPage() {
        return browser.getUrl;
    }

    acceptAlert() {
        browser.acceptAlert();
    }

    dismissAlert() {
        browser.dismissAlert();
    }

    getAlertText() {
        return browser.getAlertText();
    }

    navigateBack() {
        browser.back();
    }

    navigateForward(){
        browser.forward();
    }

    getNumberofMatchingElementsBySelector(locator) {
        var numberOfElements = $$(locator);
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

    getAllWindowHandles(){
        return browser.windowHandles();
    }

    doubleClickonElement(locator){
        browser.doubleClick(locator);
    }

    dragAndDropElement(sourceLocator,targetLocator){
        browser.dragAndDrop(sourceLocator,targetLocator);
    }

    submitForm(locator){
        browser.submitFrom(locator);
    }

    getAttributeOfElement(locator,attribute){
        return browser.getAttribute(locator,attribute);
    }

    takeScreenshot(){
        browser.screenshot();
    }

    verifyElementIsEnabled(locator){
        var result=browser.waitForEnabled(locator,3000);
        expect(result).to.be.true;        
    }

    verifyTextOfElementIsMatching(locator,text){
        var txt=browser.getText(locator);
        expect(txt).to.be.equal(text);
    }

}
module.exports = new Utilities();