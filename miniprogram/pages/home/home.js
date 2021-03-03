const app = getApp()

Page({
  data: {
    avatarUrl: "user-unlogin.png",
    userInfo: {},
    result: "",
    query: "",
    show: false,
  },

  onLoad(options) {
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: (res) => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
              })
            },
          })
        }
      },
    })
  },
  handleClick() {
    this.setData({
      result: "A柜03号",
      show: true,
    })
  },
  onClose() {
    this.setData({
      show: false,
      result: "",
      query: ""
    })
  },
})
