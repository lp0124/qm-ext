const minimist = require('minimist')

module.exports = minimist(process.argv.slice(2), {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'dev' }
})
