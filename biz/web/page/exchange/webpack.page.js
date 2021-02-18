let webpack = require('webpack');
let path =require("path");
console.log("this is exchange page")
module.exports = {
    resolve: {
        alias: {
            '@webExchangeLocales': `${path.resolve(__dirname, 'locales')}`,
            '@webExchangeRoutes': `${path.resolve(__dirname, 'routes')}`,
            '@webExchangeHoc': `${path.resolve(__dirname, 'hoc')}`,
            '@webExchangeMobx': `${path.resolve(__dirname, 'mobx')}`,
            '@webExchangeImgs': `${path.resolve(__dirname, 'static/imgs')}`,
            '@webExchangeMock': `${path.resolve(__dirname, 'mock')}`,
            '@webExchangeComponents': `${path.resolve(__dirname, 'components')}`,
            'mulThemeConf': `${path.resolve(__dirname, 'mulThemeConf/index.ts')}`,
            'getMulThemeProps': `${path.resolve(__dirname, 'static/module/getMulThemeProps.ts')}`,
            'webExchangeConstants': `${path.resolve(__dirname, 'static/module/config/index.ts')}`,
            'webExchangeDataMapping': `${path.resolve(__dirname, 'static/module/dataMapping.ts')}`,
            'webExchangeTradingviewConf': `${path.resolve(__dirname, 'static/module/tradingviewConf.ts')}`,
            'webExchangeGlobalConf': `${path.resolve(__dirname, 'static/global/index.ts')}`,
            'webExchangeAjax': `${path.resolve(__dirname, process.env.NODE_ENV == "production" ? 'static/module/ajax/prod.ts' : 'static/module/ajax/dev.ts')}`,
            'webExchangeRenderRoutes': `${path.resolve(__dirname, 'static/module/renderRoutes.tsx')}`,
            'webExchangeRenderBreadcrumbs': `${path.resolve(__dirname, 'static/module/renderBreadcrumbs.tsx')}`,
            'webExchangeSubscribe': `${path.resolve(__dirname, 'subscriptions/index.ts')}`,
            'webExchangeHeaderCmp': `${path.resolve(__dirname, 'routes/layout/header.tsx')}`,
            'webExchangeWS': `${path.resolve(__dirname, 'static/module/exchangeWebSocket.ts')}`,
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            getMulThemeProps: ['getMulThemeProps', 'default'],
            constants: ['webExchangeConstants', 'default'],
            tradingviewConf: ['webExchangeTradingviewConf', 'default'],
            dataMapping: ['webExchangeDataMapping', 'default'],
            ajax: ['webExchangeAjax', 'default'],
            webExchangeWS: ['webExchangeWS', 'default'],
            renderRoutes: ['webExchangeRenderRoutes', 'default'],
            renderBreadcrumbs: ['webExchangeRenderBreadcrumbs', 'default']
        })
    ]
}