//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {}
  },

  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    this.initEventsList()

    if (app.globalData.userInfo) this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl,
      userInfo: app.globalData.userInfo
    })
    else app.userInfoReadyCallback = (res) => this.setData({
      avatarUrl: res.avatarUrl,
      userInfo: res
    })
  },

  // 初始化事件列表
  initEventsList: function () {
    console.log(this.data.userInfo)
    wx.cloud.callFunction({
      name: 'getUserEvents',
      data: {
        name: this.data.userInfo.nickName
      },
      success: res => console.log(res)
    })
  },
  onGetUserInfo: function (e) {
    if (!e.detail.userInfo) return
    const userInfo = e.detail.userInfo
    app.callFunction('createId', result => {
      console.log(result)
    }, userInfo)
    app.globalData.userInfo = userInfo
    this.setData({
      userInfo: userInfo,
      avatarUrl: userInfo.avatarUrl
    })
  }
})