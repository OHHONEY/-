// 评估当日预算
// 评估系数：月剩余天数、日最低保障消费、月预算、总财产、
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const {OPENID} = wxContext

  return new Promise((resolve, reject) =>{
    // let doc = collection.doc(OPENID)
    let docs = collection('monthlyBills')
      .where({
        _id: OPENID
      })
      .get()
    if (!docs.length) resolve({
      data: 0
    })
  })



  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}