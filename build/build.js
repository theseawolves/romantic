// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var docsPath = path.join(config.build.assetsRoot, 'docs')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
mkdir('-p', docsPath)
cp('-R', 'static/*', assetsPath)
cp('-R', 'docs/*', docsPath)

//copy src
//cp('-R', '/*', path.join(assetsPath,'front-src'))
// console.log( find('-A',path.resolve(__dirname,'../').filter(function(file){
//   return file.match(/^(?!node_modules)/)
// }) ))
// console.log(path.join(config.build.assetsRoot,'../front-src'))

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
