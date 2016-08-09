var crypto = require('crypto');

// Block size
var BLOCK_SIZE = 16;

// Create an return a Multipass API
var api = module.exports = function(apiKey, siteKey) {
  if (!(this instanceof api)) return new api(apiKey, siteKey);
  if (!(typeof apiKey == 'string' && apiKey.length > 0)) throw new Error('Invalid API key');
  if (!(typeof siteKey == 'string' && siteKey.length > 0)) throw new Error('Invalid site key');
  this._key = crypto.createHash('sha1').update(apiKey + siteKey).digest('binary').substring(0, BLOCK_SIZE);
  this._iv = new Buffer('OpenSSL for Node', 'binary');
  return this;
};

// Encode a Multipass token
api.prototype.encode = function(obj) {
  if (!obj) return;
  // Create a buffer
  var data = new Buffer(typeof obj == 'string' ? obj : JSON.stringify(obj), 'utf8');
  
  // Encrypt with AES
  var cipher = crypto.createCipheriv('aes-128-cbc', this._key, this._iv),
      token = cipher.update(data, 'binary', 'binary') + cipher.final('binary');

  //prepend the iv
  token = new Buffer(token, 'binary');
  token = token.toString('base64');
  
 /*token = token.replace(/\n/g, '') // remove new lines
               .replace(/\=+$/, '') // remove trailing "="
               .replace(/\+/g, '-') // "+" to "-"
               .replace(/\//g, '_'); // "/" to "_"*/
  return token;
};

// Decode a Multipass token
api.prototype.decode = function(token) {
  if (typeof token != 'string') return;
  token = token.replace(/_/g, '/') // Replace _ with /
               .replace(/\-/g, '+'); // Replace - with +
  
  // Decrypt with AES
  var cipher = crypto.createDecipheriv('aes-128-cbc', this._key, this._iv.toString('binary')),
      data = cipher.update(token, 'base64', 'binary') + cipher.final('binary');
  
  // Create a buffer
  data = new Buffer(data);
  try {
    return JSON.parse(data.toString('utf8'));
  } catch (e) {};
};