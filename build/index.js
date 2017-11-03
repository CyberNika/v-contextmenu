const path = require('path')
const fs = require('fs-extra')
const execSync = require('child_process').execSync

const resolve = dir => path.resolve(__dirname, '..', dir)

fs.emptyDirSync(resolve('dist'))
fs.copySync(resolve('src'), resolve('dist'))
fs.emptyDirSync(resolve('dist/assets/styles'))
execSync('./node_modules/stylus/bin/stylus src/assets/styles --out dist/assets/styles')
