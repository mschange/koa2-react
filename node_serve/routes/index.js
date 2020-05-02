const router = require('koa-router')();

const content = require('./content.js'); // 内容

const userController = require('../controller/user');

router.use('/content', content.routes());

// 登录接口
router.post('/login', userController.login);
// 注册接口
router.post('/register', userController.register);

module.exports = router;