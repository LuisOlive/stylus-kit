const format = require('./plugins/format')
const yaml = require('./plugins/yaml')

module.exports = () => style => {
  style.define('yaml', yaml)
  style.define('format_', format)
}
