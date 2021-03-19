// 目的: 运用http模块快速开启服务=> 等待着客户端发起请求 GET + 127.0.0.1:3001

// 1. 加载http
const http = require('http')

// console.log(http)

// 2. 创建服务Server
const app = http.createServer()

// 4. 监听客户端发过来的任意某请求
// app.on('请求',被触发后执行的cb)

// fs.readFile('','utf-8',(err,data)=>{})

// req:当前的请求对象
// res:响应对象
app.on('request',(req,res)=>{
    console.log('客户端发起了某请求')
    // end(数据): 返回数据并且结束当前请求(返回响应)
    res.end('300')
})

// console.log(app)
// 3. 监听某端口下的服务,如果被监听了,就触发cb里面的代码
// btn.onclick = fn
app.listen(3001, () => {
  console.log('-----')
})



// nodemon
// 通常情况下, 全局包都是命令行工具:在终端里面通过指令去实现功能    -g
// 1. nodemon
// 2. node
// 3. npm
// 4. git

// 本地包:针对于项目业务代码要用的包
// 1. axios
// 2. jquery
// 3. moment
// 4. 等等等

// 提示
// 1. 不需要关心-g的包的安装位置
// 2. -g的包在任意项目中可以使用

