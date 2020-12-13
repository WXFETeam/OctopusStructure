const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

var mockRegister = require("./register.ts");
var mockTrade = require('./trade.ts');
var mockGeneral = require('./general.ts');
var mockForgotPwd = require('./forgotPwd.ts');
var mockAssets = require('./assets.ts');
var mockOrder = require('./order.ts');
var mockAPI = require('./api.ts');
var mockSecurity = require('./security.ts');

const defaultMockFuc = (req, res) => {
    let data = mockGen({
        type: 'static',
        data: {errMsg: "没有找到该接口对应的mockFuc"}
    })
    return res.send(wrapResData({data}))
}

module.exports = {
    ...mockRegister,
    ...mockTrade,
    ...mockGeneral,
    ...mockForgotPwd,
    ...mockAssets,
    ...mockOrder,
    ...mockAPI,
    ...mockSecurity,
    defaultMockFuc
}