//app.js
App({
    /**
     * 应用全局数据
     * userInfo: 用户信息
     * ...
     */

    globalData: {
        userInfo: ''
    },
    // 小程序运行时
    onLaunch: function () {

        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            wx.cloud.init({
                traceUser: true,
            })
        }
        this.onLogin()
    },
    // 登录
    onLogin: function () {
        this.callFunction('haveUserData', result => {
            if (result.data) {
              console.log(result) 
              this.globalData.userInfo = result.data
              if (this.userInfoReadyCallback) this.userInfoReadyCallback(result.data)
            }
        })
    },

    /**
     * 全局http方法 
     * name: 云函数名称(必填)
     * data: 函数参数
     * res: 函数返回对象
     */
    callFunction: (name, cb, data) => {
        wx.cloud.callFunction({
            name: name,
            data: data ? data : {},
            complete: res => {
                console.log(res)
                if (cb) cb(res.result)
            }
        })
    }
})