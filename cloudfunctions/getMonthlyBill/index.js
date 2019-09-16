const cloud = require('wx-server-sdk')

cloud.init()

/**
 * 获取月账单 
 */
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {
        OPENID
    } = wxContext
    // 获取数据库引用
    const db = cloud.database()
    // 获取集合的引用
    const document = db.collection('monthlyBills').doc(OPENID)


    // 月份 、_id
    return new Promise((resolve, reject) => {
        document.get()
            .then(res => {
                resolve(res)
            }, reject => {
                resolve({
                    reject,
                    data: 0
                })
            })
    })
}