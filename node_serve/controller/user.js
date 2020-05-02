const userServe = require('../server/users');
module.exports = {
  // 登录接口
  async login(ctx) {
    // console.log('123456456', ctx.request.body)
    let data = await userServe.login(ctx.request.body);
    console.log(data, 'controller')
    ctx.body = data;
  },
  // 注册用户
  async register(ctx) {
    let data = await userServe.register(ctx.request.body);
    console.log(data, '-----------data');
    ctx.body = data;
  }
}