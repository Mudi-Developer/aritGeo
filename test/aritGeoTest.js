const assert = require('chai').assert;
const aritGeo = require('../AritGeoCode/aritGeoTest.js');

describe('aritGeo([])', function(){
	it('It should return 0', function(){		
		assert.equal(aritGeo([]), 0)
	});

	it('Geometric', function(){		
		assert.equal(aritGeo([1,2,4,8,16]), 'Geometric')
	});

	it('Arithmetic', function(){		
		assert.equal(aritGeo([1,2,3,4,5]), 'Arithmetic')
	});

	it('neither', function(){		
		assert.equal(aritGeo([1,2,3,4,7]), -1)
	});

	it('string', function(){		
		assert.equal('string', 'string')
	});

	it('boolean', function(){		
		assert.equal(true, 'boolean')
	});

	it('boolean', function(){		
		assert.equal(false, 'boolean')
	});	
	
});