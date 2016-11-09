## 展示列表
礼物页面获取展示区域数据
## 接口
POST /issues
## 请求参数：
无
## 响应：
### 错误
返回通用错误500信息，见general.md
### 成功：200
相应格式： JSON
```
[
  {
    issueId:1,
    headline: '第1期 狮子月来袭，送Ta一份霸气礼物',
    subtitleText: '追求',
    subtitleDate: 'Jul,27,2016',
    id: 123,
    link: 'http://192.168.31.173:8888/static/images/690x460.png',
    title: '进口满天星花束',
    price: 198.00,
    tinyPictures:[
      {
        id: 1,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 2,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 1,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 2,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      }
    ]
  },
  {
    issueId:2,
    headline: '第2期 狮子月来袭，送Ta一份霸气礼物',
    subtitleText: '刚毅',
    subtitleDate: 'Jul,5,2016',
    id: 123,
    link: 'http://192.168.31.173:8888/static/images/690x460.png',
    title: '进口满天星花束',
    price: 198.00,
    tinyPictures:[
      {
        id: 1,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 2,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 3,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      },
      {
        id: 4,
        link: 'http://192.168.31.173:8888/static/images/255x196.png',
        title: '壁花小姐',
        price: 65.00
      }
    ]
  }
]
```
