var express = require('express')
var path = require('path')
var app = express()
var port = 8888
/**
mock data
**/
app.use('/static', express.static(path.join(__dirname, '../public')))

// app.get('/list',function(req, res) {
//   res.json({ user: 'tobi'})
// })
//
// app.get('/gifts',function(req, res) {
//   res.json({ gifts: 'gifts'})
// })
// app.post('/issues',function(req, res) {
//   res.json([
//     {
//       issueId:1,
//       headline: '第1期 狮子月来袭，送Ta一份霸气礼物',
//       subtitleText: '追求',
//       subtitleDate: 'Jul,27,2016',
//       id: 123,
//       link: 'http://192.168.31.174:8888/static/images/720×480.png',
//       title: '进口满天星花束',
//       price: 198.00,
//       tinyPictures:[
//         [
//           {
//             id: 1,
//             link: 'http://192.168.31.174:8888/static/images/268×202_1.png',
//             title: '壁花小姐佳佳',
//             price: 65.00
//           },
//           {
//             id: 2,
//             link: 'http://192.168.31.174:8888/static/images/268×202_1.png',
//             title: '壁花小姐',
//             price: 65.00
//           }
//         ],
//         [
//           {
//             id: 1,
//             link: 'http://192.168.31.174:8888/static/images/268×202_1.png',
//             title: '壁花小姐佳佳',
//             price: 65.00
//           },
//           {
//             id: 2,
//             link: 'http://192.168.31.174:8888/static/images/268×202_1.png',
//             title: '壁花小姐佳佳',
//             price: 65.00
//           }
//         ]
//
//       ]
//     },
//     {
//       issueId:2,
//       headline: '第2期 狮子月来袭，送Ta一份霸气礼物',
//       subtitleText: '刚毅',
//       subtitleDate: 'Jul,5,2016',
//       id: 123,
//       link: 'http://192.168.31.174:8888/static/images/720×480.png',
//       title: '进口满天星花束',
//       price: 198.00,
//       tinyPictures:[
//         [
//           {
//             id: 1,
//             link: 'http://192.168.31.174:8888/static/images/268×202_2.png',
//             title: '壁花小姐',
//             price: 65.00
//           },
//           {
//             id: 2,
//             link: 'http://192.168.31.174:8888/static/images/268×202_2.png',
//             title: '壁花小姐',
//             price: 65.00
//           }
//         ],
//         [
//           {
//             id: 3,
//             link: 'http://192.168.31.174:8888/static/images/268×202_2.png',
//             title: '壁花小姐',
//             price: 65.00
//           },
//           {
//             id: 4,
//             link: 'http://192.168.31.174:8888/static/images/268×202_2.png',
//             title: '壁花小姐',
//             price: 65.00
//           }
//         ]
//
//       ]
//     }
//   ])
// })
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://192.168.31.174:' + port
  console.log('Listening at ' + uri + '\n')
  //opn(uri)
})
