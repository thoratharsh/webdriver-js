const ts= require('webdriverio');

describe('App', function(){
	it('say Hello should return Hello', function(){
		console.log('Say Hello!');
	});
	
	it('say Hello should return Hello', function(){
		console.log('Say Hello! to seconds time');
	});
	
	it('say Hello should return Hello', function(){
		var value1=13;
		var value2=16;
		console.log(value1 + value2);
	});
	
	it('should open a driver', function(){
		browser.init();
	});
	
});	

describe('Test 2', function(){
	it('say Hello should return Hello', function(){
		console.log('Say Hello!');
	});
	
	it('say Hello should return Hello', function(){
		console.log('Say Hello! to seconds time');
	});
	
	it('say Hello should return Hello', function(){
		var value1=13;
		var value2=16;
		console.log(value1 + value2);
	});
});	