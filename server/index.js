const express = require('express')

const app = express();


app.use(require('cors')())  //跨域模块
app.use(express.json())  //这是express 中的内置中间件功能，使用body解析器，解析带有json负载的传入请求；

require('./routes/admin')(app); //引入路由
require('./plugins/db')(app);// 引入数据库






app.listen(3000,()=>{
    console.log('http://localhost:3000')
})