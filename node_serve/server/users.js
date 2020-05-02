
const jsonwebtoken = require('jsonwebtoken');
const sql = require('../sq');
module.exports = {
  // 登录接口
  login(options) {
    // console.log(options, 'optionss');
    let data = new Promise((resolve, reject) => {
      sql.query(`select * from users where phone='${options.phone}'`, (error,result) => {
        console.log(result, '信息');
        if (result[0].phone === options.phone) {
          // 手机号存在
          if (result[0].password === options.password) {
           let token = jsonwebtoken.sign(
              { phone: options.phone, password: options.password },  // 加密userToken
              'SECRET',
              { expiresIn: '1h' }
            )
            console.log(token, '获取到的token')
            // 正确
            let ev = {
              code: 200,
              message: '登录成功',
              token
            }
            resolve(ev);
          } else {
            let ev = {
              code: 500,
              message: '密码错误'
            }
            resolve(ev);
          }
        } else {
          let ev = {
            code: 500,
            message: '该用户未注册'
          }
          resolve(ev);
        }
      })
    })
    return data;
  },
  // 注册接口
  register(options) {
    let datas = new Promise((resolve,reject) => {
      // 注册先判断手机号是否存在
      sql.query(`select * from users where phone='${options.phone}'`, (error,result) => {
        console.log(result, '信息00');
        console.log(error, '错误信息')
        if (result.length > 0 && (result[0].phone === options.phone)) {
          // 存在
          let ev = {
            code: 400,
            message: '手机号已经存在了' 
          }
          resolve(ev);
        } else {
          sql.query('INSERT INTO users SET ?', options, function (error, results, fields) {
            if (error) {
              let ev = {
                code: 400,
                message: '注册失败' 
              }
              reject(ev);
            } else {
              let ev = {
                code: 200,
                message: '注册成功了！' 
              }
              resolve(ev);
            }
          });
        }
      })
    })
    return datas;
  }
}