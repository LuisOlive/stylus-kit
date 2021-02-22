# Array functions

## map

The functional programming map concept

```stylus
.faz
  grid-template-columns map(1..5, @(a){ (a)fr })

```

yields

```css
.faz {
  grid-template-columns: 1fr 2fr 3fr 4fr 5fr;
}
```

## filter

The functional programming filter concept

```stylus
.foo
  odd-numbers filter(1..10, @(a){ a % 2 })
```

yields

```css
.foo {
  odd-numbers: 1 3 5 7 9;
}
```

## reduce

The functional programming reduce concept

```stylus
.bar
  z-index reduce(1..5, @(a, b){ '%s%s' % (a b) })
```

yields

```css
.bar {
  z-index: 12345;
}
```

## concat

Joins two or more arrays into a new array

```stylus
.faz
  some-lists concat(1..9, range(10, 100, 10), range(100, 1001, 100))
```

yields

```css
.faz {
  some-lists: 1 2 3 4 5 6 7 8 9 10 20 30 40 50 60 70 80 90 100 100 200 300 400 500 600 700 800
    900 1000;
}
```

## zip

creates a hash with two arrays

```stylus
my-hash = zip(('width' 'height' 'color'), (4em 5em cyan))

.render-hash
  {my-hash}
```

yields

```css
.render-hash {
  width: 4em;
  height: 5em;
  color: #0ff;
}
```
