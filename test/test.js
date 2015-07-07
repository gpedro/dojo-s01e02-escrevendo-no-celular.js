'use strict';
var assert = require('assert');
var celular = require('../');

describe('dojo-s01e02-escrevendo-no-celularjs tests', function () {
  it('A single letter is converted to a number', function () {
    assert.equal(celular('A'), '2');
    assert.equal(celular('B'), '22');
    assert.equal(celular('D'), '3');
    assert.equal(celular(' '), '0');
    assert.equal(celular('Z'), '9999');
    assert.equal(celular('C'), '222');
  });

  it('A single word is converted to numbers', function () {
    assert.equal(celular('ADG'), '234');
  });

  it('A single spaced word is converted to numbers (OMG)', function () {
    assert.equal(celular('ADG A'), '23402');
    assert.equal(celular('A D G A'), '2030402');
  });

  it('A single paused word is converted to numbers', function () {
    assert.equal(celular('ABC'), '2_22_222');
  });
  it("should return '77773367_7773302_222337777_777766606660366656667889999_9999555337777' when pass 'SEMPRE ACESSO O DOJOPUZZLES'", function () {
    assert.equal(celular('SEMPRE ACESSO O DOJOPUZZLES'), '77773367_7773302_222337777_777766606660366656667889999_9999555337777');
  });
});
