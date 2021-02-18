import * as React from "react";
import { WrapperMyOrderCmp } from './styled';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;

import OpenOrders from './openOrders';
import OrderHistory from './orderHistory';
import TradeHistory from './tradeHistory';
import Portfolio from './portfolio';
import { renderComponent } from "recompose";

export default class MyOrder extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        let scrollY = (document.body.offsetHeight - 55) * 0.3125 - 102;
        var renderComponent = type => {
            switch(type) {
                case "Open Orders": return <OpenOrders scrollY={scrollY} />;
                case "Order History": return <OrderHistory scrollY={scrollY} />;
                case "Trade History": return <TradeHistory scrollY={scrollY} />;
                case "Potfolio": return <Portfolio scrollY={scrollY} />;
            }
        }
        return (
            <WrapperMyOrderCmp>
                <Tabs className="tabNav">
                    {["Open Orders", "Order History", "Trade History", "Potfolio"].map(item => {
                        let CmpName = item.split(" ").join("");
                        return <TabPane
                            tab={item}
                            key={item}
                        >
                            {renderComponent(item)}
                        </TabPane>
                    })}
                </Tabs>
            </WrapperMyOrderCmp>
        );
    }
}