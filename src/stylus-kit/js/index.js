const format = require('./plugins/format')
const yaml = require('./plugins/yaml')
const reverse = require('./plugins/reverse')

module.exports = () => style => {
  style.define('yaml', yaml)
  style.define('reverse', reverse)
  style.define('format_', format)
}
