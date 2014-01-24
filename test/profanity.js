
var assert = require('assert');
var profanity = require('../lib/profanity').addProfanity;

describe('profanity', function() {

	it('should add some profanity', function() {
		assert(/fucking|bitching|damned|darned|bloody/.test(profanity('your mother')), 'should add some words');
	});

});
