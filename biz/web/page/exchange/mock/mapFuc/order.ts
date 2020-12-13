const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

const mockGetAllOrders = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockGetAllTradedOrders = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockGetAllHistoricalOrders= (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockCancelOrder =(mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

module.exports = {
    mockGetAllOrders,
    mockGetAllTradedOrders,
    mockGetAllHistoricalOrders,
    mockCancelOrder
}