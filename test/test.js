const assert = require('chai').assert;
const aritGeo = require('../src/aritGeo');

describe('aritGeo([])', () =>{
	it('It should return 0', () =>{		
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

});