//路由配置项
module.exports = {
    routesConf: [{
            path: "register",
            exact: true,
            layout: true
        }, {
            path: "forgotPwd",
            exact: true,
            layout: true
        }, {
            path: "login",
            layout: true,
            routes: [{
                    path: 'mfa'
                }, {
                    path: ''
                }]
        }, {
            path: "findMFA",
            layout: true,
            routes: [{
                    path: 'chooseVerify'
                }, {
                    path: 'faceVerify'
                }]
        }, {
            path: "verify",
            exact: true,
            layout: true
        }, {
            path: "closeVerify",
            exact: true,
            layout: true
        }, {
            path: "faceVerify",
            exact: true,
            layout: true
        }, {
            path: "trade",
            exact: true
        }, {
            path: "assets",
            layout: true,
            routes: [{
                    path: 'asset',
                }, {
                    path: 'recharge'
                }, {
                    path: 'withdraw'
                }, {
                    path: 'record'
                }, {
                    path: '',
                    from: '/*',
                    to: '/assets/asset'
                }]
        }, {
            path: "security",
            layout: true,
            breadcrumName: 'security.security',
            routes: [{
                    path: 'kyc',
                    routes: [{
                            path: 'individual',
                            routes: [{
                                    path: 'riskEvaluation'
                                }, {
                                    path: 'identification',
                                    routes: [{
                                            path: 'customerInfo'
                                        }, {
                                            path: 'financialInfo'
                                        }, {
                                            path: 'agreement'
                                        }, {
                                            path: 'otherInfo'
                                        }, {
                                            path: 'submitApplication'
                                        }]
                                }, {
                                    path: 'submitSuccess'
                                }]
                        }, {
                            path: 'institution',
                            routes: [{
                                    path: 'riskEvaluation'
                                }, {
                                    path: 'identification',
                                    routes: [{
                                            path: 'customerInfo'
                                        }, {
                                            path: 'enterpriseInfo'
                                        }, {
                                            path: 'uploadFile'
                                        }, {
                                            path: 'memberInfo'
                                        }, {
                                            path: 'financialInfo'
                                        }, {
                                            path: 'agreement'
                                        }, {
                                            path: 'otherInfo'
                                        }, {
                                            path: 'submitApplication'
                                        }]
                                }, {
                                    path: 'submitSuccess'
                                }]
                        }, {
                            path: ''
                        }]
                }, {
                    path: 'basicInfo',
                    breadcrumName: 'security.basicInfo',
                    routes: [
                        {
                            path: 'email',
                            breadcrumName: 'security.changeEmail',
                        },
                        {
                            path: 'originmail'
                        }, {
                            path: 'originpwd'
                        }, {
                            path: 'newpwd'
                        }, {
                            path: 'newmail'
                        }, {
                            path: 'verify'
                        }, {
                            path: 'finish'
                        }, {
                            path: 'audit'
                        }, {
                            path: 'faceverify'
                        }, {
                            path: ''
                        }
                    ]
                }, {
                    path: 'pwdMgt',
                    breadcrumName: 'security.pwdMgt',
                    routes: [{
                            path: 'login',
                            breadcrumName: 'security.modifyLoginPwd',
                        }, {
                            path: 'financial',
                            breadcrumName: 'security.financial',
                        }, {
                            path: 'exchange',
                            breadcrumName: 'security.exchange',
                        }, {
                            path: ''
                        }]
                }, {
                    path: 'accountActivity',
                    breadcrumName: 'security.accountActivity',
                    routes: [{
                            path: 'disable',
                            breadcrumName: 'security.disable',
                        }, {
                            path: 'remove'
                        }, {
                            path: 'faceVerify'
                        }, {
                            path: 'removeSuccess'
                        }, {
                            path: ''
                        }]
                }, {
                    path: 'mfa',
                    routes: [{
                            path: 'gaBind',
                            breadcrumName: 'security.gaBind'
                        }, {
                            path: 'gaClose',
                            breadcrumName: 'security.gaClose'
                        }, {
                            path: 'phoneBind',
                            breadcrumName: 'security.phoneBind'
                        }, {
                            path: 'phoneClose',
                            breadcrumName: 'security.phoneClose'
                        }]
                }, {
                    path: 'whiteList',
                    breadcrumName: "security.whiteList",
                    routes: [{
                            path: ''
                        }]
                }, {
                    path: 'device',
                    breadcrumName: 'security.device',
                    routes: [{
                            path: 'detail',
                            breadcrumName: 'security.detail'
                        }, {
                            path: ''
                        }]
                }, {
                    path: ''
                }]
        }, {
            path: "order",
            layout: true,
            breadcrumName: "order.order",
            routes: [{
                    path: 'current',
                    breadcrumName: "order.current",
                }, {
                    path: 'historical'
                }, {
                    path: 'traded'
                }, {
                    path: '',
                    from: '/*',
                    to: '/order/current'
                }]
        }, {
            path: "apiMgt",
            layout: true,
            breadcrumName: "api.api",
            routes: [{
                    path: 'create',
                    breadcrumName: 'api.createApi'
                }, {
                    path: ''
                }]
        }, {
            path: "account",
            layout: true,
            routes: [{
                    path: 'individual',
                    routes: [{
                            path: 'accountMgt',
                            routes: [{
                                    path: 'addAccount',
                                    breadcrumName: "account.accountMgt.addAccount",
                                }, {
                                    path: '',
                                }
                            ]
                        }, {
                            path: 'accountRecord',
                        }, {
                            path: 'tradeRecord',
                        }, {
                            path: 'transferHistory',
                        }, {
                            path: '',
                            from: '/*',
                            to: '/account/individual/accountMgt'
                        }
                    ]
                }, {
                    path: 'enterprise',
                    routes: [{
                            path: 'accountMgt',
                            routes: [{
                                    path: 'addAccount',
                                }, {
                                    path: '',
                                }]
                        }, {
                            path: 'accountRecord',
                        }, {
                            path: 'tradeRecord',
                        }, {
                            path: 'transferHistory',
                        }, {
                            path: '',
                            from: '/*',
                            to: '/account/enterprise/accountMgt'
                        }
                    ]
                }, {
                    path: ''
                }]
        }]
};
//# sourceMappingURL=routes.js.map