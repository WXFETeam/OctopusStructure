//websocket相关配置
export default {
    ws: {
        wsUrl: `${document.location.protocol == "https:" ? "wss" : "ws"}://${(document.domain == "localhost" || document.domain == "amazon_demo.com") ? "172.16.5.5:8091" : document.location.host}/v1/stream`, //上线修改
        // 最多重连次数
        wsMaxReconnectCount: 5,
        // topics
        topics: {
            MARKET_DATA: 'market_data', //每日行情（开高低收）
            CANDLE_STICK: 'candle_stick', // k线
            B_ORDER_BOOK: 'b_order_book', //未成交买单
            S_ORDER_BOOK: 's_order_book', //未成交卖单
            TRADE_RTN_ALL: 'trade_rtn_all', //市场成交订单
            ORDER_RTN: 'order_rtn', // open orders
            F_ORDER_RTN: 'f_order_rtn', // order history
            TRADE_RTN: 'trade_rtn', // trade history
            PORTFOLIO_RTN: 'portfolio_rtn' // potfolio
        }
    }
}