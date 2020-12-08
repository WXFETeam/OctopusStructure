require("babel-register");
var fs = require("fs");

//读取原始json文件（js文件中export）
var path = `${process.cwd()}/biz/web/page/bizA/locales/cn/login.ts`
var json = require(path).default;

var parseJsonWrapper = require("./parseJsonWrapper");   //将json的key平铺
let jsonWrapperArr = []; //平铺原始数组
parseJsonWrapper(json, jsonWrapperArr)
console.log(jsonWrapperArr)
