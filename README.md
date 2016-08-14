# atlas-node-multipass 

[![Build Status](https://travis-ci.org/ShekharReddy4/atlas-node-multipass.svg?branch=master)](https://travis-ci.org/ShekharReddy4/atlas-node-multipass)    [![OpenMRS Talk](https://omrs-shields.psbrandt.io/custom/openmrs/talk/F26522?logo=openmrs)](https://talk.openmrs.org/c/projects/atlas) [![OpenMRS IRC](https://img.shields.io/badge/openmrs-irc-EEA616.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MTIiIGhlaWdodD0iNjEyIiB2aWV3Qm94PSIwIDAgNjEyIDYxMiI%2BPHBhdGggZD0iTTE1MyAyMjkuNWMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzEzMS44NjcgMzA2IDE1MyAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzE3NC4xMzMgMjI5LjUgMTUzIDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzI4NC44NjcgMzA2IDMwNiAzMDZjMjEuMTE0IDAgMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzMyNy4xMzMgMjI5LjUgMzA2IDIyOS41em0xNTMgMGMtMjEuMTMzIDAtMzguMjUgMTcuMTE3LTM4LjI1IDM4LjI1UzQzNy44NjcgMzA2IDQ1OSAzMDZzMzguMjUtMTcuMTE3IDM4LjI1LTM4LjI1UzQ4MC4xMzMgMjI5LjUgNDU5IDIyOS41ek0zMDYgMEMxMzcuMDEyIDAgMCAxMTkuODc1IDAgMjY3Ljc1YzAgODQuNTE0IDQ0Ljg0OCAxNTkuNzUgMTE0Ljc1IDIwOC44MjZWNjEybDEzNC4wNDctODEuMzRjMTguNTUyIDMuMDYyIDM3LjYzOCA0Ljg0IDU3LjIwMyA0Ljg0IDE2OS4wMDggMCAzMDYtMTE5Ljg3NSAzMDYtMjY3Ljc1UzQ3NS4wMDggMCAzMDYgMHptMCA0OTcuMjVjLTIyLjMzOCAwLTQzLjkxLTIuNi02NC42NDMtNy4wMmwtOTAuMDQgNTQuMTI0IDEuMjA0LTg4LjdDODMuNSA0MTQuMTMzIDM4LjI1IDM0NS41MTMgMzguMjUgMjY3Ljc1YzAtMTI2Ljc0IDExOS44NzUtMjI5LjUgMjY3Ljc1LTIyOS41czI2Ny43NSAxMDIuNzYgMjY3Ljc1IDIyOS41UzQ1My44NzUgNDk3LjI1IDMwNiA0OTcuMjV6IiBmaWxsPSIjZmZmIi8%2BPC9zdmc%2B)](http://irc.openmrs.org) [![OpenMRS Telegram](https://img.shields.io/badge/openmrs-telegram-009384.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgMjQwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIuNjY3IiB5MT0iLjE2NyIgeDI9Ii40MTciIHkyPSIuNzUiPjxzdG9wIHN0b3AtY29sb3I9IiMzN2FlZTIiIG9mZnNldD0iMCIvPjxzdG9wIHN0b3AtY29sb3I9IiMxZTk2YzgiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ%2BPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iLjY2IiB5MT0iLjQzNyIgeDI9Ii44NTEiIHkyPSIuODAyIj48c3RvcCBzdG9wLWNvbG9yPSIjZWZmN2ZjIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBvZmZzZXQ9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyMCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9IiNjOGRhZWEiIGQ9Ik05OCAxNzVjLTMuODg4IDAtMy4yMjctMS40NjgtNC41NjgtNS4xN0w4MiAxMzIuMjA3IDE3MCA4MCIvPjxwYXRoIGZpbGw9IiNhOWM5ZGQiIGQ9Ik05OCAxNzVjMyAwIDQuMzI1LTEuMzcyIDYtM2wxNi0xNS41NTgtMTkuOTU4LTEyLjAzNSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xMDAuMDQgMTQ0LjQxbDQ4LjM2IDM1LjczYzUuNTIgMy4wNDQgOS41IDEuNDY3IDEwLjg3Ni01LjEyNGwxOS42ODUtOTIuNzYzYzIuMDE2LTguMDgtMy4wOC0xMS43NDYtOC4zNTgtOS4zNWwtMTE1LjU5IDQ0LjU3MmMtNy44OSAzLjE2NS03Ljg0NCA3LjU2Ny0xLjQ0IDkuNTI4bDI5LjY2NCA5LjI2IDY4LjY3My00My4zMjZjMy4yNC0xLjk2NiA2LjIxNy0uOTEgMy43NzUgMS4yNTgiLz48L3N2Zz4%3D)](https://telegram.me/openmrs) [![devDependencies Status](https://david-dm.org/alanshaw/david-www/dev-status.svg)](https://david-dm.org/alanshaw/david-www?type=dev) [![devDependencies Status](https://david-dm.org/ShekharReddy4/atlas-node-multipass.svg)](https://github.com/ShekharReddy4/atlas-node-multipass/blob/master/package.json)  [![Downloads](https://img.shields.io/npm/dt/atlas-node-multipass.svg?style=flat-square)](https://www.npmjs.com/package/atlas-node-multipass)

[![NPM](https://nodei.co/npm/atlas-node-multipass.png)](https://www.npmjs.com/package/atlas-node-multipass/)

<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

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