const { utils, nodes } = require('stylus')

module.exports = (str, ...args) => {
  utils.assertString(str, 'str')

  /**
   * @type {string}
   */
  let ans = str.val

  args
    .map(expr => utils.unwrap(expr).val)
    .forEach((expr, i) => {
      ans = ans
        .replace('{}', expr)
        .split(`{${i}}`)
        .join(expr)
    })

  return new nodes.String(ans)
}
