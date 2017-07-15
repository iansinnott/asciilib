# Asciilib

Ascii art / kaomoji keyword library

## Install

```
npm install --save asciilib
```

## Usage

```js
const asciilib = require("asciilib")

asciilib.lib
{ upside_down_lenny:
   { name: 'Upside Down Lenny',
     entry: '( ͜。 ͡ʖ ͜。)',
     keywords: [ 'upside', 'down', 'lenny' ],
     category: 'UNASSIGNED' },
  race_car:
   { name: 'Race Car',
     entry: '\\ō͡≡o˞̶',
     keywords: [ 'race', 'car' ],
     category: 'UNASSIGNED' },
  ...
}

asciilib.ordered
[ 'afraid', 'airplane', 'almost_cared', ... ]
```
