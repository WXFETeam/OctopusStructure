const mockGen = require(`${process.cwd()}/server/mock/gen.ts`);

const wrapResData = (data) => {
    const apiGatewayJson = require(`${process.cwd()}/server/mock/apiGateway.ts`);
    return Object.assign(apiGatewayJson, data);
}

const mockForgotPwdSendEmail = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: require("./data/forgotPwd/sendEmail.json")
    })
    return res.send(wrapResData({data}))
}

const mockForgotPwdSendResetPwdLink = (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

const mockForgotPwdSubmit= (mockData, req, res) => {
    let data = mockGen({
        type: "static",
        data: mockData
    })
    return res.send(wrapResData({data}))
}

module.exports = {
    mockForgotPwdSendEmail,
    mockForgotPwdSendResetPwdLink,
    mockForgotPwdSubmit
}