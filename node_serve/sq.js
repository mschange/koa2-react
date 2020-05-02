const mysql = require('mysql');

const sq = mysql.createConnection({
  host: 'localhost',       
  user: 'root',              
  password: 'root',       
  port: '3306',                   
  database: 'tab',
});

module.exports = sq

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',       
//   user: 'root',              
//   password: 'root',       
//   port: '3306',                   
//   database: 'tab',
// });
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
  
//   console.log('链接数据库成功');
// });

// connection.query('select * from users', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
  
// });