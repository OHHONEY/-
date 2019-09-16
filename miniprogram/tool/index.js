/**
 * 全局http方法 
 * name: 云函数名称(必填)
 * data: 函数参数
 * result: 函数返回对象
 */
const http = (name, cb, data,) =>{
  wx.cloud.callFunction({
    name: name,
    data: data ? data : {}
  }).then( result => {
    if (cb) {
      console.log(result)
      cb(result.res)
    }
  })
}

module.exports = {
  http
}