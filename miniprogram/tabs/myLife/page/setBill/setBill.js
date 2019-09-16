Page({

    /**
     * 页面的初始数据
     */
    data: {
        treasury: 0,
        budget: 0,
        per: '0%'
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 可用资产整数位
    inputTreasuryInteger(event) {
        this.setData({
            treasury: this.serInteger(this.data.treasury, event.detail.value)
        })
        this.setPercentage()
    },
    // 可用资产小数位
    inputTreasuryDecimal(event) {
        this.setData({
            treasury: this.setDecimal(this.data.treasury, event.detail.value)
        })
        this.setPercentage()
    },
    // 预算整数位
    inputBudgetInteger(event) {
        this.setData({
            budget: this.serInteger(this.data.budget, event.detail.value)
        })
        this.setPercentage()
    },
    // 预算小数位
    inputBudgetDecimal(event) {
        this.setData({
            budget: this.setDecimal(this.data.budget, event.detail.value)
        })
        this.setPercentage()
    },
    // 设置整数位
    serInteger(digital, value) {
        let decimal = parseFloat((digital % 1).toFixed(2))

        if (value) return parseInt(value) + decimal
        return 0 + decimal
    },
    // 设置小数位
    setDecimal(digital, value) {
        let integer = Math.floor(digital / 1)
        if (!value) return integer
        let decimal = parseInt(value) 

        return parseFloat(integer + '.' + decimal).toFixed(2)
    },
    setPercentage() {
        let {
            treasury,
            budget
        } = this.data,
            percentage = budget / treasury * 100

        this.setData({
            per: (percentage > 100 ? 100 : percentage).toFixed(2) + '%'
        })
    },
    // 下一步 设置账单
    nextStep() {
      let {
        treasury,
        budget
      } = this.data
      if (!treasury) {
        wx.showToast({
          title: '请填写可用资产噢~',
          icon: 'none'
        })
        return
      }
      if (!budget) {
        wx.showToast({
          title: '请填写您本月预算噢~',
          icon: 'none'
        })
        return
      }
      if (treasury < budget) wx.showToast({
        title: `您的预算超出了可用资产,已将您的预算更改为你可用资产的最大值,请您增加了可用资产,再来设置预算噢~`,
        icon: 'none'
      })
      // 返回账单页面
      wx.cloud.callFunction({
        name: 'addMonthlyBill',
        data: {
          treasury,
          budget
        },
        complete: res => {
          console.log(res)
          wx.navigateBack()
        }
      })
    }
})