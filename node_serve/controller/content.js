module.exports = {
  // 首页列表接口
  async list(ctx) {
    console.log(ctx.request.body, '------------------')
    ctx.body = 'controller处的测试';
  }
}