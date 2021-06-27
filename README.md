# Stylus kit

This is a library of stylus mixins for the most natural syntax in stylus

stylus is based on natural syntax, this mixins starts with programmers' desireds shorthands

```stylus
.awesome-grid
  grid-template 'faz' 60px \
                'foo' auto \
                'bar' auto /\
                 1fr

  lg grid-template  'faz faz' 60px \
                    'foo bar' auto \/\
                     2fr 1fr

  xl grid-template  'faz faz' 60px \
                    'foo bar' auto \/\
                     3fr 1fr
```

yields:

```css
.awesome-grid {
  grid-template: 'faz' 60px 'foo' auto 'bar' auto/1fr;
}
@media screen and (min-width: 900px) {
  .awesome-grid {
    grid-template: 'faz faz' 60px 'foo bar' auto/2fr 1fr;
  }
}
@media screen and (min-width: 1200px) {
  .awesome-grid {
    grid-template: 'faz faz' 60px 'foo bar' auto/3fr 1fr;
  }
}
```

this do not provide prefixes, because nib and postcss are written for make it

## Features

- [array functions](https://github.com/LuisOlive/stylus-kit/blob/master/docs/arrays.md)
- [@medias](https://github.com/LuisOlive/stylus-kit/blob/master/docs/at-medias.md)
- [basic mixins](https://github.com/LuisOlive/stylus-kit/blob/master/docs/basic.md)
- [new breakpoints system](https://github.com/LuisOlive/stylus-kit/blob/master/docs/breakpoints.md)
- [new color shortcuts](https://github.com/LuisOlive/stylus-kit/blob/master/docs/colors.md)
- [flexbox shortcuts](https://github.com/LuisOlive/stylus-kit/blob/master/docs/flexbox.md)
- [and more!](https://github.com/LuisOlive/stylus-kit/blob/master/docs/other-functions.md)

## Get started

### Install

```
npm i -D stylus-kit
```

### import the plugin for the compiler

#### using terminal

```
npx stylus index.styl -u node_modules/stylus-kit
```

#### Javascript

```js
const stylus = require('stylus')
const { readFileSync } = require('fs')
const stylusKit = require('stylus-kit')

stylus(readFileSync('./index.styl', 'utf-8'), {
  use: [stylusKit()]
}).render(console.error, console.log)
```

#### Webpack

```js
{
  loader: 'stylus-loader',
  options: {
    stylusOptions: {
      use: ['stylus-kit']
    }
  }
}
```

add the library in your index.styl

```stylus
@require stylus-kit
```

## Contributors

contributors welcome, lets revive stylus with for comfort for all of us!
