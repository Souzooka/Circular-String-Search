var chai = require('chai');
var expect = chai.expect;

var circular = require('../app.js');

describe('Circular String Search', function() {

  it('should find a smaller string located inside the first string', function() {
    expect(search('hotdog', 'dog')).to.be.equal(true);
  });

  it('should find a string that would exist if the first string was once-circular', function() {
    expect(search('hotdog', 'doghot')).to.be.equal(true);
  });

  it('should find a string that would exist if the first string was infinitly circular', function() {
    expect(search('hotdog', 'doghotdoghot')).to.be.equal(true);
  });
});