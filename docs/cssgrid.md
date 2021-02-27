# CSS grid

## grid-areas

a short-cut to generate grid-areas based on the class names

```stylus
.a-grid
  grid-areas faz 'foo' bar

grid-areas('header' 'footer' 'aside')
```

yields

```css
.a-grid .faz {
  grid-area: 'faz';
}
.a-grid .foo {
  grid-area: 'foo';
}
.a-grid .bar {
  grid-area: 'bar';
}
.header {
  grid-area: 'header';
}
.footer {
  grid-area: 'footer';
}
.aside {
  grid-area: 'aside';
}
```
