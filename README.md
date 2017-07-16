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

## Contributing and adding new kaomoji or ascii art

Just fork this project and submit a pull request :). The main thing to consider is that any additions need to match this shape:

```js
{
  name: 'Upside Down Lenny', // Some string that describes the entry
  entry: '( ͜。 ͡ʖ ͜。)', // The actual characters
  keywords: [ 'face', 'upsidedown' ], // Any
  category: 'UNASSIGNED' // See note below for currently used categories
}
```

**NOTE:** The currently used categories are:

* animal
* behavior
* emotion
* food
* holiday
* people
* UNASSIGNED (use this if you're not sure)

## Related Projects

* [asciilib-workflow](https://github.com/iansinnott/asciilib-workflow) An Alfred Workflow for using this library

## Inspired by

* [muan/emojilib](https://github.com/muan/emojilib)

If you want something similar for emoji check this out ☝
