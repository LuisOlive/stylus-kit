# Stylus kit

This is a library of stylus mixins for the most natural syntax in stylus

stylus is based on natural syntax, this mixins starts with programmers' desireds shorthands

```stylus
header
  size 100vw 4em

.square
  size 2em
```

yields:

```css
header {
  width: 100vw;
  height: 4em;
}
.square {
  width: 2em;
  height: 2em;
}
```

this do not provide prefixes, because nib and postcss are written for make it

## Get started

```
npm i -D stylus-kit
```

import the plugin for the compiler

```js
const stylus = require('stylus')
const { readFileSync } = require('fs')
const stylusKit = require('stylus-kit')

stylus(readFileSync('./index.styl', 'utf-8'), {
  use: [stylusKit()]
}).render(console.error, console.log)
```

add the library in your index.styl

```stylus
@require stylus-kit
```

## Contributors

contributors welcome, lets revive stylus with for comfort for all of us!
