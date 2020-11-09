const path = require('path')
const fs = require('fs-extra')

async function dispatchJson(fileName, hooks) {
  const oldPath = path.join(process.cwd(), fileName)
  const tplPath = path.join(path.resolve(), '_' + fileName)

  let cont = fs.readJsonSync(
    await fs.pathExistsSync(oldPath) ? oldPath : tplPath
  ) || {}

  if (typeof hooks === 'function') {
    hooks(cont)
  }

  await fs.outputJsonSync(oldPath, cont, {
    spaces: 2
  })
}

module.exports = dispatchJson