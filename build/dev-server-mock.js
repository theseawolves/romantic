var express = require('express')
var app = express()
var port = 8888
/**
mock data
**/

app.get('/list',function(req, res) {
  res.json({ user: 'tobi'})
})

app.get('/gifts',function(req, res) {
  res.json({ gifts: 'gifts'})
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  //opn(uri)
})
