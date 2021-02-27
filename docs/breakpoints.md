[node-css-mqpacker]: https://github.com/hail2u/node-css-mqpacker

# Breakpoints

They are the bootstrap names, defined with 300px's intervals.

You can use bootstrap values also, see ()

## Breakpoint mixin

You can use it naming the breakpoint befor the property

```stylus
.responsive-color
  color facebook
  sm color twitter
  md color amazon
  lg color android
  xl color airbnb
```

yields

```css
.responsive-color {
  color: #2d88ff;
}
@media screen and (min-width: 300px) {
  .responsive-color {
    color: #1da1f2;
  }
}
@media screen and (min-width: 600px) {
  .responsive-color {
    color: #f90;
  }
}
@media screen and (min-width: 900px) {
  .responsive-color {
    color: #78c257;
  }
}
@media screen and (min-width: 1200px) {
  .responsive-color {
    color: #ff5a5f;
  }
}
```

### font-size

if you will modify the font-size to control em and rem units, you can pass only the font-size
value in px

```stylus
body
  font-size 12px
  md 14px
  lg 16px
  xl 18px
```

yields

```css
body {
  font-size: 12px;
}
@media screen and (min-width: 600px) {
  body {
    font-size: 14px;
  }
}
@media screen and (min-width: 900px) {
  body {
    font-size: 16px;
  }
}
@media screen and (min-width: 1200px) {
  body {
    font-size: 18px;
  }
}
```

## Block breakpoints

**warning** It's highly recommended use a tool to factorise your mediaquerys like
[node-css-mqpacker], but if you don't have, is recommended use the block mixin in case of two
or more properties

```stylus
.responsive-color
  background instagram-royal-blue
  color instagram-blue

  +md()
    background instagram-dark-pink
    color instagram-dark-orange

  +lg()
    background instagram-red
    color instagram-yellow
```

yields

```css
.responsive-color {
  background: #405de6;
  color: #5b51d8;
}
@media screen and (min-width: 600px) {
  .responsive-color {
    background: #c13584;
    color: #f56040;
  }
}
@media screen and (min-width: 900px) {
  .responsive-color {
    background: #fd1d1d;
    color: #fcaf45;
  }
}
```

## Working 100%!!

```stylus
.awesome-grid
  // common properties
  sm display none

  // array properties
  md background url('/my/path.jpg') no-repeat cover center center fixed

  lg grid-template  'faz faz' 60px \
                    'foo bar' auto \/\
                     2fr 1fr

  // another mixins
  xl inset 25px
```

yields

```css
@media screen and (min-width: 300px) {
  .awesome-grid {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .awesome-grid {
    background: url('/my/path.jpg') no-repeat cover center center fixed;
  }
}
@media screen and (min-width: 900px) {
  .awesome-grid {
    grid-template: 'faz faz' 60px 'foo bar' auto/2fr 1fr;
  }
}
@media screen and (min-width: 1200px) {
  .awesome-grid {
    top: 25px;
    left: 25px;
  }
}
```

## Breakpoint values

```stylus
measures.breakpoints.sm
// => 300px
measures.breakpoints.md
// => 600px
measures.breakpoints.lg
// => 900px
measures.breakpoints.xl
// => 1200px
```

### redifining them

stylus-kit includes the file with bootstrap measures

```stylus
measures = yaml('stylus-kit/yml/measures.bootstrap.yml', { hash: true })
// => { "breakpoints": { "sm": 576px, "md": 768px, "lg": 992px, "xl": 1200px } }
```

or define your own ones

```stylus
measures = yaml('path/to/my-own-measures.yml', { hash: true })
// or
measures = json('path/to/my-own-measures.json', { hash: true })
```

## Generating your own breakpoints

Just copy this code inside your custom mixin

```stylus
myBreakpoint()
  +moreThan(my-break-point-unit)
    if arguments
      __responsivePropsRender arguments
    else
      {block}
```

and you now can use it as others
