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

## `copy`

it creates a copy of an array to immutable operations

## `clone`

it repeats a ident n times and returns an array

```stylus
clone('hello, world', 3)
// => 'hello, world' 'hello, world' 'hello, world'
```

## `sort`

sorts a list using bubble method, taken of stylus docs

```stylus
sort('e' 'c' 'f' 'a' 'b' 'd')
// => 'a' 'b' 'c' 'd' 'e' 'f'

sort(5 3 6 1 2 4, @(a, b){
  a < b
})
// => 6 5 4 3 2 1
```

## reverse

array reverse mathod, using javascript api

```stylus
p( reverse(651 894 651 846 32 74 516 89 4) )
// => 4 89 516 74 32 846 651 894 651
```

## `unit transforms`

We created some fucntions to transform easily number arrays to css units

Available:

`Unit(unit_, array)`, `Em(array)`, `Rem(array)`, `Vw(array)`, `Vh(array)`, `Px(array)`, `Fr(array)`,
`Percent(array)`,

```stylus
div
  margin Px(10...14)
  grid-template-columns Fr(1..5)
  width Percent(50)
```

yields

```css
div {
  margin: 10px 11px 12px 13px;
  grid-template-columns: 1fr 2fr 3fr 4fr 5fr;
  width: 50%;
}
```
