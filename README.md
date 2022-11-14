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

Submit a pull request :). The file to modify is: [lib.json](https://github.com/iansinnott/asciilib/blob/master/lib.json). Each entry has the following shape:

```js
{
  name: 'Upside Down Lenny', // Some string that describes the entry
  entry: '( ͜。 ͡ʖ ͜。)', // The actual characters
  keywords: [ 'face', 'upsidedown' ], // Any
  category: 'UNASSIGNED' // whatever you want
}
```

## Related Projects

- [asciilib-workflow](https://github.com/iansinnott/asciilib-workflow) An Alfred Workflow for using this library

## Inspired by

- [muan/emojilib](https://github.com/muan/emojilib)

If you want something similar for emoji check this out ☝

## A warning about bundle size

If you're worried about bundle size you should know that importing this lib will include all of `lib.json`, which currently adds over 200kb (uncompressed).
