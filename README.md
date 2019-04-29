[![NPM Version](https://img.shields.io/npm/v/require-extension-hooks-babel.svg)](https://www.npmjs.com/package/require-extension-hooks-babel) ![GitHub release](https://img.shields.io/github/release/jackmellis/require-extension-hooks-babel.svg) ![npm downloads](https://img.shields.io/npm/dt/require-extension-hooks-vue.svg) 

# require-extension-hooks-babel
Simple parser for vue files  

Using require-extension-hooks you can transpile ES6/7/.. code to run in node. Although node supports 99.999% of ES6 features there is one major omission: export/import syntax.

## Installation  
`npm install require-extension-hooks require-extension-hooks-babel --save-dev`  

## Usage  
```javascript
const hooks = require('require-extension-hooks');
hooks('js').plugin('babel', {}).push();

// elsewhere...
import {foo} from './foo';
```

The second argument allows you to configure which options are passed into babel's transform function. By default this contains a node : current configuration to only use babel polyfills that node doesn't have.
