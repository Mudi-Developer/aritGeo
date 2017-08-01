const assert = require('chai').assert;
const aritGeo = require('../src/aritGeo');

describe('aritGeo([])', () =>{
	it('It should return 0', () =>{		
		assert.equal(aritGeo([]), 0)
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo('stringValue'), 0)
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(true), 'boolean')
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(5), 'number')
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(5 / 0), 'undefined array')
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(), 'null array')
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(3), 'odd integer')
	});

	it('It should return 0', () =>{		
		assert.equal(aritGeo(4), 'even integer')
	});

	it('Geometric', () =>{		
		assert.equal(aritGeo([1,2,4,8,16]), 'Geometric')
	});

	it('Arithmetic', () =>{		
		assert.equal(aritGeo([1,2,3,4,5]), 'Arithmetic')
	});

	it('neither', () =>{		
		assert.equal(aritGeo([1,2,3,4,7]), -1)
	});	
});