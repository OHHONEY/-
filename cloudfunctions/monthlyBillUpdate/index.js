// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 待更新记录引用
const collection = cloud.database().collection('monthlyBills')
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { OPENID } = wxContext

  // 记录引用
  const doc = collection.doc(OPENID)

  return new Promise( (resolve, reject) =>{
    doc.update({
      treasuryList: []
    })
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}