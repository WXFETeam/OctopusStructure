const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

const mockRegisterGetAreaList = (mockData, req, res) => {
    let data = mockGen({
        type: 'static',
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockRegisterSubmitBasic = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}
const mockRegisterResendEmailCode = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockRegisterVerifyEmailCode = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

module.exports = {
    mockRegisterGetAreaList,
    mockRegisterSubmitBasic,
    mockRegisterResendEmailCode,
    mockRegisterVerifyEmailCode
}