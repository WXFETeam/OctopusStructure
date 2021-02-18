const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

const mockGetAccountList = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockGetAssetList = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockGetRechargeRecordList= (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockGetWithdrawRecordList =(mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

module.exports = {
    mockGetAccountList,
    mockGetAssetList,
    mockGetRechargeRecordList,
    mockGetWithdrawRecordList
}