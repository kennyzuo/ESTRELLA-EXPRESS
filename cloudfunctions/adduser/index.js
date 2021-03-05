// 云函数入口文件
const cloud = require("wx-server-sdk")

// 初始化
cloud.init()

// 初始化数据库
const DB = cloud.database({
  env: "xiaodaidai-4g1rtd7s85a6b5bf",
})

// 获取用户集合
const usercollection = DB.collection("user")


// 新增用户
const addUser = user => {
  return usercollection.add({
    data: user
  }).then(res => {
    return true;
  }).catch(()=> {
    return false
  })
}

// 云函数入口函数
exports.main = async ({ user }, context) => { 
  const wxContext = cloud.getWXContext()
  user.openid = wxContext.OPENID;
  user.username = user.role === 'admin' ? 'admin': '';
  debugger
  return addUser(user) 
}