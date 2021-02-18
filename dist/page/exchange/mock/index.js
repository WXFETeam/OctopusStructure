var { upperFirst } = require("lodash");
var mockList = require('./mapFuc/index.ts');
const { host, apiList } = require('../static/module/config/ajax.ts').ajax;
//生成mockUrlKey
const genUrlKey = (url) => {
    var method = url.split(" ")[0];
    var wholeUrl = `${host}${url.split(" ")[1]}`;
    return `${method} ${wholeUrl}`;
};
var proxy = {};
Object.keys(apiList).map(firstLayerKey => {
    //只有一层
    var mockData;
    if (typeof apiList[firstLayerKey] == "string") {
        var urlKey = genUrlKey(apiList[firstLayerKey]);
        var mockFucName = `mock${upperFirst(firstLayerKey)}`;
        try {
            mockData = require(`./data/${firstLayerKey}.json`);
        }
        catch (e) {
            mockData = { errMsg: "没有找到本地mock数据" };
        }
        proxy[urlKey] = mockList[mockFucName] ? mockList[mockFucName].bind(this, mockData) : mockList['defaultMockFuc'];
    }
    else {
        var deepLayer = apiList[firstLayerKey];
        Object.keys(deepLayer).map(secondLayerKey => {
            var urlKey = genUrlKey(deepLayer[secondLayerKey]);
            var mockFucName = `mock${upperFirst(firstLayerKey)}${upperFirst(secondLayerKey)}`;
            try {
                mockData = require(`./data/${firstLayerKey}/${secondLayerKey}.json`);
            }
            catch (e) {
                mockData = { errMsg: "没有找到本地mock数据" };
            }
            proxy[urlKey] = mockList[mockFucName] ? mockList[mockFucName].bind(this, mockData) : mockList['defaultMockFuc'];
        });
    }
});
// console.log('proxy', proxy)
module.exports = proxy;
//# sourceMappingURL=index.js.map