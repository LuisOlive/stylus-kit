const stylus = require('stylus')
const { readFileSync, writeFileSync } = require('fs')
const stylusKit = require('..')

// stylus(readFileSync(__dirname + '/index.styl', 'utf-8'))
//   .use(stylusKit())
//   .render((error, css) => {
//     if (error) {
//       console.error(error)
//       return
//     }

//     writeFileSync('./index.css', css, 'utf-8')
//     console.log('css compiled')
//   })

// const double = stylusKit.def(x => x * 2)

// console.log(double(5))
