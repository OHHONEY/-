/**
 * 账单页面
 * 查询是否有历史账单
 */
const app = getApp()

Page({
  data: {
    _monthlyBill: '',
    month: [1,2,3,4,5,6,7,8,9],
    moneys: [10, 20, 100, 400],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部'
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
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})