//ajax配置
var host;
try {
    if (document.domain == "qa.hashkey3.com") {
        host = "http://qa.hashkey3.com/api/exchange";
    }
    else {
        host = "/api/exchange";
    }
}
catch (e) {
    host = "/api/exchange";
}
module.exports = {
    ajax: {
        host,
        apiList: {
            "trade": {
                "syncServerTime": "GET /ac-demo/candle/time",
                "candleSticks": "GET /ac-demo/candle/candleSticks",
                "order": 'POST /ac-demo/order',
                "createOrder": "POST /order/createOrder",
                "withdrawOrder": "POST /order/withdrawOrder"
            },
            "register": {
                "getAreaList": "GET /user/signUp/getAreaList",
                "submitBasic": "POST /user/signUp",
                "resendEmailCode": "POST /user/sendEmailCode",
                "verifyEmailCode": "POST /user/authMailAndActive"
            },
            "login": {
                "login": "POST /user/sign",
                "authDetail": "GET /user/authDetail",
                "authPassword": "POST /user/authPassword"
            },
            "general": {
                "imageCode": "GET /captcha/image/slide",
                "verification": "GET /captcha/verification"
            },
            "forgotPwd": {
                "sendEmail": "POST /user/sendEmailVerify",
                "sendResetPwdLink": "POST /forgotPwd/sendResetPwdLink",
                "submit": "POST /user/forgetPassWord"
            },
            "MFA": {
                "getGoogleKey": "GET /user/getGoogleKey",
                "authGoogleKey": "POST /user/authGoogleKey",
                "bindGoogleAuth": "POST /user/bindGoogleAuth",
                "mfaModify": "POST /user/mfaModify"
            },
            "security": {
                "getAccountInfo": "GET /user/userDetail",
                "updatePassword": "POST /user/updatePassword",
                "getWhiteList": "GET /security/whiteList/getList",
                "getDeviceList": "POST /user/getDeviceList",
                "getDeviceDetail": "POST /user/selectDeviceListById",
                "delDevice": "POST /user/deleteDevice",
                "disOrUpAccount": "POST /user/disOrUpAccount",
                "getActivityList": "POST /user/getActivityList",
                "sendUpdateEmail": "POST /user/sendUpdateEmail",
                "authPassword": "POST /user/authPassword",
                "updateEmail": "POST /user/updateEmail",
                "setBusinessPassWord": "POST /user/setBusinessPassWord",
                "setFundPassWord": "POST /user/setFundPassWord",
            },
            "assets": {
                "getAccountList": "GET /assets/getAccountList",
                "getAssetsList": "GET /assets/getAssetsList",
                "getRechargeRecordList": "GET /assets/getRechargeRecordList",
                "getWithdrawRecordList": "GET /assets/getWithdrawRecordList"
            },
            "order": {
                "getAllOrders": "POST /order/getCurrentDelegationOrder",
                "getAllTradedOrders": "POST /order/getHistoryDealOrder",
                "getAllHistoricalOrders": "POST /order/getHistoryOrder",
                "cancelOrder": "GET /order/cancelOrder"
            },
            "api": {
                "getAPIList": "GET /api/getAPIList"
            },
            "riskEvaluation": {
                "loadPaperMessage": "GET /paper/loadPaperMessage",
                "submitPaper": "POST /paper/submitPaper"
            },
            "personalKyc": {
                "getKycPersonalData": "GET /personal/getKycPersonalData",
                "personalSubmit": "POST /personal/personalSubmit",
                "savePersonalFinance": "POST /personal/savePersonalFinance",
                "savePersonalInfo": "POST /personal/savePersonalInfo",
                "savePersonalProtocol": "POST /personal/savePersonalProtocol",
                "savePersonalSupplement": "POST /personal/savePersonalSupplement",
            },
            "orgKyc": {
                "getKycInsData": "GET /orgkyc/getKycInsData",
                "saveActualControl": "POST /orgkyc/saveActualControl",
                "saveMemberInfo": "POST /orgkyc/saveMemberInfo",
                "saveOrgFile": "POST /orgkyc/saveOrgFile",
                "saveOrgFinanceInfo": "POST /orgkyc/saveOrgFinanceInfo",
                "saveOrgInfo": "POST /orgkyc/saveOrgInfo",
                "saveOrgProtocol": "POST /orgkyc/saveOrgProtocol",
                "saveOrgSupplement": "POST /orgkyc/saveOrgSupplement",
                "submitKycInsData": "POST /orgkyc/submitKycInsData"
            },
            "common": {
                "load": "GET /image/load",
                "store": "POST /image/store",
                "view": "GET /image/view",
                "sendSMS": "POST /user/sendSmsCode"
            },
            "ws": {
                "market": "GET /mockMarket",
                "orderBookSell": "GET /mockOrderBookSell",
                "orderBookBuy": "GET /mockOrderBookBuy",
                "tradeHistory": "GET /mockTradeHistory",
                "openOrders": "GET /mockOpenOrders",
                "orderHistory": "GET /mockOrderHistory",
                "portfolio": "GET /mockPortfolio"
            }
        }
    }
};
//# sourceMappingURL=ajax.js.map