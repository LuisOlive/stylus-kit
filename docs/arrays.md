# Array functions

## `map`

The functional programming map concept

```stylus
map(1..5, @(a){ a ** 2 })
// => 1 (4) (9) (16) (25)
```

## `filter`

The functional programming filter concept

```stylus
filter(1..10, @(a){ a % 2 })
// => 1 (3) (5) (7) (9)
```

## `reduce`

The functional programming reduce concept

```stylus
reduce(1..5, @(a, b){ '%s%s' % (a b) })
// => 12345
```

## `concat`

Joins two or more arrays into a new array

```stylus
concat(1..9, range(10, 100, 10), range(100, 1001, 100))
// => 1 (2) (3) (4) (5) (6) (7) (8) (9) (10) (20) (30) (40) (50) (60) (70) (80) (90) (100) (200) (300) (400) (500) (600) (700) (800) (900) (1000)
```

## `zip`

creates a hash with two arrays

```stylus
zip(('width' 'height' 'color'), (4em 5em cyan))
// => {"width":"(4em)","height":"(5em)","color":"(#0ff)"}
```
