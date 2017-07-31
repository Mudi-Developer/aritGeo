const assert = require('chai').assert;
const add = require('../AritGeoCode/aritGeo.js');

describe('Add', function(){
	it('should add 5 and return 10', function(){
		let result = add(5);
		assert.equal(result, 10)
	});

	it('should return type number', function(){
		var result = add(5);
		assert.typeOf(result, 'number');
	});
});