// 项目的核心模块(自定义)

// 需要使用某个第三方包:
// 1. 终端切换到项目文件夹,然后 npm init -y =>  产生package.json  (只做一次!!!!!)
// 2. 根据npm指令按照包jquery  
// npm install 包名 => 会产生
//      2.1 package-lock.json (TODO)
//      2.2 node_modules (下载的各种包的源码,完全不需要关心)
// 3. CommonJS使用第三方包的用法 require('包名')
const $ = require('jquery')

// 测试: 安装moment包
const moment = require('moment')
// console.log(moment)
// http://momentjs.cn/
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))



// 专业做法, 完全不应该在node环境下使用jq,这里只是为了说明npm的基本使用



// npm其他指令
// 1. npm i 包名@版本号  =>  做的旧的项目, 可能需要安装历史版本的包 
// 2. npm i moment jquery 同时安装多个包
// 3. 卸载 npm uninstall 包名
// 4. 平台 -> github开源平台的项目代码中都没有node_modules,原因:
// 4.1 体积大
// 4.2 没必要(第三方包的代码都一样,只要npm下载对应的包,即可)
// 5. npm i => 按照该项目的package.json中记录的包的信息(名+版本) 批量下载所有包


// 场景
// 小明
// 我开发IE兼容的项目, 用jq@1+版本
// package.json
// package-lock.json 作用
// 1. 锁住开发时下载包的版本信息 1+ =>  更安全
// 2. 锁住开发时下载包的下载地址(网址) => 更快(下载)
// npm i jquery@1.
const $ = require('jquery')

// 上传, X node_modules


// 小王
// 拉取我的项目,跑项目->报错->
// const $ = require('jquery')
// npm i  
// jquery 最新稳定版3.6



