// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 创建月账单
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {
        OPENID
    } = wxContext
    const {
        treasury,
        budget,
        daily_average,
        monthly_consumption_day
    } = event

    // 获取数据库引用
    const db = cloud.database()
    // 获取集合的引用
    const collection = db.collection('monthlyBills')
    console.log()

    return new Promise((resolve, reject) => {
      collection.add({
                data: {
                    _id: OPENID,
                    description: '当月账单',
                    _expenditure: 0,
                    _treasury: treasury,
                    _budget: budget,
                    _daily_average: daily_average,
                    _monthly_consumption_day: monthly_consumption_day
                }
            })
            .then(res => {
                resolve(res)
            })
            .catch(error => console.log(error))
    })
}