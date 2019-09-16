// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID

    // 用户授权 
    // 创建用户 tab以及可配置tab 
    /**
     * 手账
     * 即将放弃的事
     * 第一次要的事
     */
    // 获取数据库引用
    const db = cloud.database()
    // 获取集合的引用
    const usersCollection = db.collection('users')
    const {
        avatarUrl,
        gender,
        nickName
    } = event
    /**
     * 添加记录
     * _id: openid
     * name: 微信用户名
     */
    return new Promise((resolve, reject) => {
        usersCollection.add({
                data: {
                    _id: openid,
                    avatarUrl,
                    nickName,
                    gender
                }
            })
            .then(res => {
                console.log(res)
                resolve({
                    event
                })
            })
            .catch(console.error)
    })

}