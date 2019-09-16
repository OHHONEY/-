//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: '嗨，这里是它合梦魇！我还没有想好怎样和你一起度过短暂的一段时光呢，你有什么建议嘛？欢迎提给我噢~',
        suggest: '献给不能坚持的自己',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    // 获取用户信息回调
    getUserInfo: function (e) {
        // 拒绝
        if (!e.detail.userInfo) return
        console.log(e.detail.userInfo)
        const userInfo = e.detail.userInfo
        app.callFunction('createId', result =>{
          console.log(result)
        }, userInfo)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})