# atlas-node-multipass [![Build Status](https://travis-ci.org/ShekharReddy4/atlas-node-multipass.svg?branch=master)](https://travis-ci.org/ShekharReddy4/atlas-node-multipass)
OpenMRSID provides a mechanism for single sign-on known as Multipass.  Multipass uses an AES encrypted JSON hash and node-multipass provides functions for encoding and decoding these tokens.

## Installation
<pre>
    npm install atlas-node-multipass
</pre>

## Usage

Multipass is constructed with two arguments: an API key and a site key.

``` js
  var Multipass = require('atlas-node-multipass');

  // Construct the Multipass encoder / decoder
  var multipass = new Multipass('API-KEY', 'SITE-KEY');

  // Encode a Multipass token
  var token = multipass.encode({ email: 'test@example.com', name: 'test', expires: '2011-07-06 23:28:40Z' });

  // Decode a Multipass token
  var obj = multipass.decode(token);
```

### encode(obj)

This function encodes the required `obj` argument.  This argument is a JavaScript object and contains the data that you want to pass to Atlas.

This function will return a string.  If an error occurs, the `undefined` will be returned.

### decode(token)

This function decodes the required `token` argument.  This argument is an encoded Multipass token and a JavaScript object is returned.  If decoding is not successful, `undefined` is returned.

Copyright (c) 2012 David Wood <bitprobe@gmail.com>