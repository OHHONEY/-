// miniprogram/tabs/myLife/page/setTreasury/setTreasury.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    treasuryList: [
      { type: 0, treasury: 0, typeString: '微信'},
      {
        type: 1, treasury: 0, typeString: '支付宝'
      }
    ],
    colorList: [
      '#F2E4EC', '#DDECF5', '#D29060', '#F1C38C'
    ],
    currentType: '',
    currentColor: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 设置当前处于激活状态的type
  activeType: function (event) {
    console.log(event)
    const { index } = event.currentTarget.dataset
    this.setData({
      currentType: this.data.treasuryList[index]
    })
  },
  //为当前选择的类型设置颜色
  setColor(event) {
    const { color } = event.currentTarget.dataset
    this.setData({
      currentColor: color
    })
  }
})