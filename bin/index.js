#!/usr/bin/env node

const argv = require('../helpers/argv')
const thirdAppidConf = require('../config/thirdAppid');
const dispatchJson = require('../helpers/dispatchJson')

!(async () => {
  let [env, appid] = argv._
  if(!appid) {
    appid = env
    env = 'dev'
  }

  if(!appid) {
    throw new Error('appid can no empty')
  }

  await dispatchJson('ext.json', cont => {
    cont.extAppid = appid
    cont.ext = cont.ext || {}
    cont.ext.env = env
    cont.ext.appid = appid
  })
  await dispatchJson('project.config.json', cont => {
    cont.appid = thirdAppidConf[env]
  })
})();