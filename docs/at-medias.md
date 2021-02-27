[rupture]: http://jescalan.github.io/rupture
[block-mixin]: https://stylus-lang.com/docs/block.html

# @medias

## viewport width media queries

based on [rupture], but without their complex configuration to old devices

to avoid compilation conflicts, using other names

```stylus
+moreThan(measure)
  {block}

+lessThan(measure)
  {block}

+belongsTo(min, max)
  {block}
```

you can use them exactly as any [block-mixin]

##

```stylus
body
  colors android yahoo
  border solid 1px amazon

  +moreThan(540px)
    colors react airbnb
    border solid 2px angular

+belongsTo(100px, 150px)
  body
    colors svelte spotify
    border solid 2px netflix

  h1
    color snapchat
```

yields

```css
body {
  background: #78c257;
  color: #430297;
  border: solid 1px #f90;
}
@media screen and (min-width: 540px) {
  body {
    background: #61dafb;
    color: #ff5a5f;
    border: solid 2px #dd0031;
  }
}
@media screen and (min-width: 100px) and (max-width: 150px) {
  body {
    background: #ff3e00;
    color: #1db954;
    border: solid 2px #e50914;
  }
  h1 {
    color: #fffc00;
  }
}
```

## color schemes

shortcuts for `@media (prefers-color-scheme <x>)`

```stylus
+prefersDark()
  {block}

+prefersLight()
  {block}
```
