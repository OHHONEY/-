// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { name } = event
  console.log(event)

  //获取数据库的引用 集合的引用
  const collection = cloud.database().collection('users')
  // 获取集合数据
  return new Promise((resolve, reject) => {
    collection.where({
      name: name ? name : '嫦娥的兔兔'
    }).get()
      .then(res => {
        resolve({
          res: res,
          event: event
        })
      })
      .catch(error => console.log(error))
  })
}