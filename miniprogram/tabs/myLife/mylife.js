/**
 * 账单页面
 * 查询是否有历史账单
 */
const app = getApp()

Page({
  data: {
    _monthlyBill: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '载入账单中...'
    })
    this.getMonthlyBill()
  },
  // 获取账单信息
  getMonthlyBill: function() {
    app.callFunction('getMonthlyBill', res => {
      if (res.data) this.initMonthlyBill(res.data)
      else wx.navigateTo({
        url: '/tabs/myLife/page/setBill/setBill'
      })
    })
  },
  initMonthlyBill(data) {
    wx.hideLoading()
    this.setData({
      _monthlyBill: data
    })
  }
})