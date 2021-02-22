const stylus = require('stylus')
const { readFileSync } = require('fs')
const stylusKit = require('..')

stylus(readFileSync(__dirname + '/index.styl', 'utf-8'), {
  use: [stylusKit()]
}).render(console.error, console.log)
