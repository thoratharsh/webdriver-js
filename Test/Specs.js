const ts= require('webdriverio');

describe('App', function(){	
	it('should open a driver', function(){
        browser.url("https://www.google.com");
        browser.windowHandleMaximize();
        browser.pause(2000);
        browser.waitForVisible('input#lst-ib',20000);
        browser.addValue('input#lst-ib','Today is my birthday');
        
	});
	
});	