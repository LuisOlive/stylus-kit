# Flexbox and css grid

## `flex-arrange`

a flexbox shortcut to `justify-content` & (`align-content` or `align items`)

```stylus
.flex
  display flex

  &.is-centered-xy
    flex-arrange center

  &.is-different
    flex-arrange center space-between
```

yields

```css
.flex {
  display: flex;
}
.flex.is-centered-xy {
  justify-content: center;
  align-items: center;
}
.flex.is-different {
  justify-content: center;
  align-items: space-between;
}
```

if you are using `flex-wrap wrap`, it will render `align-content` instead

It works with `flex-flow` too

```stylus
  &.is-wrap
    flex-wrap wrap
    flex-arrange flex-start

  &.is-flow
    flex-flow column wrap
    flex-arrange flex-end

  &.is-reverse
    flex-wrap wrap-reverse
    flex-arrange space-around
```

yields

```css
.flex.is-wrap {
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}
.flex.is-flow {
  flex-flow: column wrap;
  justify-content: flex-end;
  align-content: flex-end;
}
.flex.is-reverse {
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-content: space-around;
}
```

if you wanna define `align-items` in `wrap` or content in `nowrap`, pass it as 3rd param

```stylus
  &.is-defined-the-other-one
    flex-arrange space-around center flex-end
```

yields

```css
.flex.is-defined-the-other-one {
  justify-content: space-around;
  align-items: center;
  align-content: flex-end;
}
```
