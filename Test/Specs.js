const ts= require('webdriverio');
const test = require('./Utilities');

describe('App', function(){	
	it('should open a driver', function(){
        browser.waitForVisible('input#lst-ib',20000);
        browser.addValue('input#lst-ib','Today is my birthday');
        
	});
	
});	