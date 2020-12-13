//websocket相关配置
export default {
    ws: {
        wsUrl: `${document.location.protocol == "https:" ? "wss" : "ws"}://${(document.domain == "localhost" || document.domain == "amazon_demo.com") ? "172.16.5.5:8091" : document.location.host}/v1/stream`,
        // 最多重连次数
        wsMaxReconnectCount: 5,
        // topics
        topics: {
            MARKET_DATA: 'market_data',
            CANDLE_STICK: 'candle_stick',
            B_ORDER_BOOK: 'b_order_book',
            S_ORDER_BOOK: 's_order_book',
            TRADE_RTN_ALL: 'trade_rtn_all',
            ORDER_RTN: 'order_rtn',
            F_ORDER_RTN: 'f_order_rtn',
            TRADE_RTN: 'trade_rtn',
            PORTFOLIO_RTN: 'portfolio_rtn' // potfolio
        }
    }
};
//# sourceMappingURL=ws.js.map