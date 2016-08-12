var assert = require('assert'),
    Multipass = require('../lib/multipass.js');

var TOKEN = 'YkTMalVN1YOR0EKw0f2sOqTtjBNr7aJfrq6CnBD1-A5CVrzu_lJVlEvfFqwhui2cxiF2Z2NypDP1idI-5ofUP36vika4LF9DoPBlWC4aIboJbdWuc0OUzmLHNsKzvs9iiLtwiA_XJFLxqxw8iEwY1w';
var OBJ = { uid: 'shekhar', user_email: 'shekhar@openmrs.org', user_name: 'ShekharReddy', password: 'shekhar' };

var API_KEY = '1234567890abcdef';
var SITE_KEY = 'localhost';

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
        var multipass = new Multipass(API_KEY);
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid site key');
      }
    });

    it('should throw an error if site key is an empty string', function() {
      try {
        var multipass = new Multipass(API_KEY, '');
      } catch (e) {
        assert.ok(e instanceof Error);
        assert.equal(e.message, 'Invalid site key');
      }
    });

  });

  describe('API', function() {
    var multipass = new Multipass(API_KEY, SITE_KEY);
  
    it('should expose an `encode` function', function() {
      assert.equal(typeof multipass.encode, 'function');
    });

    it('should expose a `decode` function', function() {
      assert.equal(typeof multipass.decode, 'function');
    });

  });

  describe('#encode()', function() {
    var multipass = new Multipass(API_KEY, SITE_KEY);
  
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
    var multipass = new Multipass(API_KEY, SITE_KEY);
  
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
