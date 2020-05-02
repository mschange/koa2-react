const Router = require('koa-router')
const router = new Router();

// 引入controller
const contentController = require('../controller/content');

router.post('/index', contentController.list)

module.exports = router;