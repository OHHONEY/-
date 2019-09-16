// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// openid 微信用户的标示
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const openid = wxContext.OPENID

  // 获取用户集合的引用
  const collection = cloud.database().collection('users')
  
  return new Promise((resolve, reject) => {
    collection.where({
      _id: openid ? openid : ''
    }).get()
      .then( res => {
        console.log(res)
        if (res.data.length) {
          let data = {}
          Object.keys(res.data[0]).forEach(key => { data[key] = res.data[0][key]})
          resolve({
            code: 1,
            data
          })
        }
        else resolve({
          code: 1,
          data: 0
        })
      })
      .catch(error => {
        console.log(error)
      })
  })
}