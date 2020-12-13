const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

const mockTradeSyncServerTime = (mockData, req, res) => {
    let data = mockGen({
        type: 'dynamic',
        data: mockData,
        dynamicLogic: {
            datetime: {
                type: "number",
                selfLogic: (data) => {
                    return new Date().getTime()
                }
            }
        }
    })
    return res.send(wrapResData({data}))
}

const mockWsMarket = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            chgVol: {
                type: "number",
                precision: 0.000001,
                floor: 6
            },
            chgRate: {
                type: "number",
                precision: 0.1
            },
            lastPrice: {
                type: "number",
                precision: 0.000001,
                floor: 6
            },
            lastPriceDollar: {
                type: "number",
                precision: 1
            },
            high: {
                type: "number",
                precision: 0.000001,
                floor: 6
            },
            low: {
                type: "number",
                precision: 0.000001,
                floor: 6
            },
            volume: {
                type: "number",
                precision: 1
            }
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsOrderBookSell = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            price: {
                type: "number",
                precision: 0.000001,
                floor: 8
            },
            amount: {
                type: "number",
                precision: 1
            },
            total: {
                type: "number",
                precision: 0.00000001,
                floor: 8
            },
            percent: {
                type: "number",
                precision: 0.1
            }
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsOrderBookBuy = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            price: {
                type: "number",
                precision: 0.000001,
                floor: 8
            },
            amount: {
                type: "number",
                precision: 1
            },
            total: {
                type: "number",
                precision: 0.00000001,
                floor: 8
            },
            percent: {
                type: "number",
                precision: 0.1
            }
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsTradeHistory = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            price: {
                type: "number",
                precision: 0.00000001,
                floor: 8
            },
            amount: {
                type: "number",
                precision: 1
            },
            side: {
                type: "enum",
                enum: ["0", "1"]
            }
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsOpenOrders = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            side: {
                type: "enum",
                enum: ["0", "1"]
            },
            type: {
                type: "enum",
                enum: ["0", "1"]
            },
            amount: {
                type: "number",
                precision: 1
            },
            limitPrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            stopPrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            shownAmount: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            duration: {
                type: "number",
                precision: 1
            },
            total: {
                type: "number",
                precision: 0.0001,
                floor: 4
            },
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsOrderHistory = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            side: {
                type: "enum",
                enum: ["0", "1"]
            },
            type: {
                type: "enum",
                enum: ["0", "1"]
            },
            status: {
                type: "enum",
                enum: ["1", "2", "3"]
            },
            amount: {
                type: "number",
                precision: 1
            },
            filled: {
                type: "number",
                precision: 1
            },
            average: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            limitPrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            stopPrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            shownAmount: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            duration: {
                type: "number",
                precision: 1
            },
            total: {
                type: "number",
                precision: 0.0001,
                floor: 4
            },
        }
    });
    return res.send(wrapResData({data}))
}

const mockWsPortfolio = (mockData, req, res) => {
    let data = mockGen({
        type: "dynamic",
        data: mockData["list"],
        dynamicLogic: {
            amount: {
                type: "number",
                precision: 1
            },
            averagePrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            lastPrice: {
                type: "number",
                precision: 0.00001,
                floor: 5
            },
            inOrder: {
                type:"number",
                precision: 1,
                floor: 2
            },
            totalBalance: {
                type: "number",
                precision: 0.00001,
                floor: 5
            }
        }
    });
    return res.send(wrapResData({data}))
}

module.exports = {
    mockTradeSyncServerTime,
    mockWsMarket,
    mockWsOpenOrders,
    mockWsOrderBookBuy,
    mockWsOrderBookSell,
    mockWsOrderHistory,
    mockWsPortfolio,
    mockWsTradeHistory
}