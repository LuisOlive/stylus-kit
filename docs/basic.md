# Basic mixins

this mixins are provide to write the most natural code

some of these can be generate unnecessary code, we recommend use advanced minifiers as postcss

## Size

shortcut to `width` and `height`

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

## inset

shorthand to top and left

```stylus
.one
  inset 25px

.two
  inset 25px 3em
```

yields

```css
.one {
  top: 25px;
  left: 25px;
}
.two {
  top: 25px;
  left: 3em;
}
```

## colors

shorthand to `background-color` and `color`

```stylus
element
  colors <bg-color> <color> // it have not overloads, text would be invisible
```

## padding

shorthands equivalents to padding top, bottom, ...

```stylus
padding-x <padding-left-and-right>
padding-x <padding-left> <padding-right>

padding-y <padding-top-and-bottom>
padding-y <padding-top> <padding-bottom>
```

remember use padding shortcut to set the 4 values

## margin

shorthands equivalents to margin top, bottom, ...

```stylus
margin-x <margin-left-and-right>
margin-x <margin-left> <margin-right>

margin-y <margin-top-and-bottom>
margin-y <margin-top> <margin-bottom>
```

remember use margin shortcut to set the 4 values

## border-radius

```stylus
div
  border-top-radius 5px
```

yields

```css
div {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
```

use it in specific cases

```stylus
border-top-radius <radius>
border-bottom-radius <radius>
border-left-radius <radius>
border-right-radius <radius>
```
