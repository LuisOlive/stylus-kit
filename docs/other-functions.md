# Other functions

this document is for functions that are unique for their groups they will be moved if they get
a group

## `format_(str)`

the python format function

**important** pass the binded arguments as an array (without commas)

you can then remove quotes with `unquote()`, `s()`, or `% ()`

```stylus
format_('{} {1}ed a {1} in the {2} head of a {2} guy', 'Pablito' 'nail' 'bald')
// => 'Pablito nailed a nail in the bald head of a bald guy'
```

## `yaml(path)`

an exact copy of `json(path)` for .yml files. If you want, i can build a toml version

Given this sample media-queries.yml file:

```yaml
small: screen and (max-width:400px)
  tablet:
    landscape: screen and (min-width:600px) and (orientation:landscape)
    portrait: screen and (min-width:600px) and (orientation:portrait)
```

Examples:

```stylus
  yaml('media-queries.yml')
  @media small
  // => @media screen and (max-width:400px)
  @media tablet-landscape
  // => @media screen and (min-width:600px) and (orientation:landscape)
  vars = yaml('vars.yml', { hash: true })
  body
    width: vars.width
```
