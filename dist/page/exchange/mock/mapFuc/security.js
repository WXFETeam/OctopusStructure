const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);
const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
};
const mockGetDeviceList = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    });
    return res.send(wrapResData({ data }));
};
const mockGetDeviceDetail = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    });
    return res.send(wrapResData({ data }));
};
const mockGetWhiteList = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    });
    return res.send(wrapResData({ data }));
};
module.exports = {
    mockGetDeviceList,
    mockGetDeviceDetail,
    mockGetWhiteList
};
//# sourceMappingURL=security.js.map