var assert = require('assert'),
    Multipass = require('../lib/multipass.js');

var OBJ = { uid: 'burke', shekhar: 'Shekhar', user_email: 'burke.mamlin@openmrs.org', user_name: 'Burke', password: 'mamlin' },
    TOKEN = '/drm7+JZy8PdpgCY649868/paJbJ/MdaQX3rIFDETnT7M2zuETuItNBtsxrgeEqJo0Rg2bzJkT8DQVo5lVzlqar4Oi4d0OM2ag0n0gZEM1OOoDZfXA0CZ5pqPX6D/Fl1zTMUlXzhISr+d+GgtH7tSqe6Gm5Hxzjl3vTz/SpMrNA=';

describe('multipass', function() {
  
  describe('Constructor', function() {
    
    it('should throw an error if API key is not defined', function() {
      try {
        var multipass = new Multipass();
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid API key');
      }
    });

    it('should throw an error if API key is an empty string', function() {
      try {
        var multipass = new Multipass('');
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid API key');
      }
    });

    it('should throw an error if site key is not defined', function() {
      try {
        var multipass = new Multipass('API-KEY');
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid site key');
      }
    });

    it('should throw an error if site key is an empty string', function() {
      try {
        var multipass = new Multipass('API-KEY', '');
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid site key');
      }
    });

  });

  describe('API', function() {
    var multipass = new Multipass('API-KEY', 'SITE-KEY');
  
    it('should expose an `encode` function', function() {
      assert.equal(typeof multipass.encode, 'function');
    });

    it('should expose a `decode` function', function() {
      assert.equal(typeof multipass.decode, 'function');
    });

  });

  describe('#encode()', function() {
    var multipass = new Multipass('1234567890abcdef', 'localhost');
  
    it('should return undefined if object not passed', function() {
      var token = multipass.encode();
      assert.equal(token, void 0);
    });

    it('should return a valid Multipass token', function() {
      var token = multipass.encode(OBJ);
      assert.equal(token, TOKEN);
    });

  });

  describe('#decode()', function() {
    var multipass = new Multipass('1234567890abcdef', 'localhost');
  
    it('should return undefined if token not passed', function() {
      var obj = multipass.decode();
      assert.equal(obj, void 0);
    });

    it('should return a valid Multipass token', function() {
      var obj = multipass.decode(TOKEN);
      assert.deepEqual(obj, OBJ);
    });

  });

});
