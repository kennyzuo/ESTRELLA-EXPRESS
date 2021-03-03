const app = getApp()

Page({
  data: {
    avatarUrl: "user-unlogin.png",
    userInfo: {},
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
  onGetOpenid() {
    wx.cloud.callFunction({
      name: "login",
      data: {},
      success: (res) => {
        console.log("[云函数] [login] user openid: ", res.result.openid)
        app.globalData.openid = res.result.openid
        wx.redirectTo({
          url: "../admin/admin",
        });
      },
      fail: (err) => {
        console.error("[云函数] [login] 调用失败", err)
        wx.redirectTo({
          url: "../home/home",
        });
      },
    })
  },
})
