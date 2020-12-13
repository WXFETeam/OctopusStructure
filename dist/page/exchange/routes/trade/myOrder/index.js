import * as React from "react";
import { WrapperMyOrderCmp } from './styled';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import OpenOrders from './openOrders';
import OrderHistory from './orderHistory';
import TradeHistory from './tradeHistory';
import Portfolio from './portfolio';
export default class MyOrder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let scrollY = (document.body.offsetHeight - 55) * 0.3125 - 102;
        var renderComponent = type => {
            switch (type) {
                case "Open Orders": return React.createElement(OpenOrders, { scrollY: scrollY });
                case "Order History": return React.createElement(OrderHistory, { scrollY: scrollY });
                case "Trade History": return React.createElement(TradeHistory, { scrollY: scrollY });
                case "Potfolio": return React.createElement(Portfolio, { scrollY: scrollY });
            }
        };
        return (React.createElement(WrapperMyOrderCmp, null,
            React.createElement(Tabs, { className: "tabNav" }, ["Open Orders", "Order History", "Trade History", "Potfolio"].map(item => {
                let CmpName = item.split(" ").join("");
                return React.createElement(TabPane, { tab: item, key: item }, renderComponent(item));
            }))));
    }
}
//# sourceMappingURL=index.js.map