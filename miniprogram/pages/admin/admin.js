const app = getApp()

Page({
  data: {
    avatarUrl: "user-unlogin.png",
    userInfo: {},
    result: "",
    query: "",
    show: false,
    type: "1",
    btnText: "取件",
  },

  onLoad(options) {
    // 获取用户信息
    console.log("admin")
  },
  tabChange(event) {
    let type = event.currentTarget.dataset.type
    this.setData({
      type,
      btnText: type == "1" ? "取件" : "存件",
    })
  },
})
