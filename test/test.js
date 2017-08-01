const assert = require('chai').assert;
const aritGeo = require('../src/aritGeo');

describe('aritGeo([])', () =>{
	it('It should return 0', () =>{		
		assert.equal(aritGeo([]), 0)
	});

	it('String', () =>{		
		assert.equal(aritGeo('stringValue'), 'string input is invalid')
	});

	it('boolean', () =>{		
		assert.equal(aritGeo(true), 'this is boolean')
	});	

	it('undefined', () =>{		
		assert.equal(aritGeo(5 / 0), 'undefined')
	});	

	it('odd integer', () =>{		
		assert.equal(aritGeo(3), 'odd integer')
	});

	it('even integer', () =>{		
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