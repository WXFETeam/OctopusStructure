import * as React from "react";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperOrderBookCmp } from './styled';

type OrderBookProps = {
    instrumentStore?: any,
    orderBookStore?: any
}

type OrderBookState = {
    curPanel: String
}

@inject('instrumentStore', 'orderBookStore')
@observer
export default class OrderBook extends React.Component<OrderBookProps, OrderBookState> {
    constructor(props: OrderBookProps) {
        super(props);
        this.state = {
            curPanel: "split"
        }
    }

    changeDecimals = type => {
        const { orderBookStore } = this.props;
        if (type == "plus" && orderBookStore.curDecimals < 7) {
            orderBookStore.changeDecimals(++orderBookStore.curDecimals);
        } else if (type == "minus" && orderBookStore.curDecimals > 4) {
            orderBookStore.changeDecimals(--orderBookStore.curDecimals);
        }
    }

    changePanel = curPanel => {
        this.setState({ curPanel })
    }

    render() {
        let { orderBookSellMap, orderBookBuyMap, curDecimals } = this.props.orderBookStore;
        let { currentInstrumentData, currentBasicCurrency } = this.props.instrumentStore;

        return (
            <WrapperOrderBookCmp>
                <Row className="title" justify="space-between" align="middle">
                    <Col span={10} className="text">Order Book</Col>
                    <Col span={10} className="switchPanel">
                        {["split", "sell", "buy"].map(item =>
                            <i key={item} className={this.state.curPanel == item ? `panelIcon ${item} active` : `panelIcon ${item}`} onClick={this.changePanel.bind(this, item)}></i>
                        )}
                    </Col>
                </Row>
                <Row className="orderTitle">
                    <Col span={8} className="left">Price(BTC)</Col>
                    <Col span={7} offset={1} className="right">Amount(ETH)</Col>
                    <Col span={8} className="right">Total(BTC)</Col>
                </Row>
                <Row className="orderBookDetailBox">
                    {this.state.curPanel != "buy" ?
                        <div className={this.state.curPanel == "sell" ? "sellBox full" : "sellBox"}>
                            {orderBookSellMap.map(item =>
                                <Row key={Math.random()} className="eachLine">
                                    <Col span={8} className="left sellText">
                                        {item.full ? item.price :
                                            <span><span className="sellPartText">{item.curNum}</span>
                                                <span>{item.leftNum}</span></span>
                                        }
                                    </Col>
                                    <Col span={7} offset={1} className="right commText">
                                        <span>{item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`}</span>
                                        {item.amountZeroNum ? <span className="commPartText">{"".padEnd(item.amountZeroNum, "0")}</span> : null}
                                    </Col>
                                    <Col span={8} className="right commText">
                                        <span>{item.total.toString().match(/\./) ? item.total : `${item.total}.`}</span>
                                        {item.totalZeroNum ? <span className="commPartText">{"".padEnd(item.totalZeroNum, "0")}</span> : null}
                                    </Col>
                                    <div className="lineBG sellBG" style={{ width: `${item.percent}%` }}></div>
                                </Row>
                            )}
                        </div> : null
                    }
                    <Row className="middleBox">
                        <Col span={8} className="left commText"><span className="commPartText">{currentInstrumentData.lastPrice}</span></Col>
                        <Col span={8} offset={1} className="right commText">{currentBasicCurrency} Spread</Col>
                        <Col span={7} className="right"><i className="sign sign4"></i></Col>
                    </Row>
                    {this.state.curPanel != "sell" ?
                        <div className={this.state.curPanel == "buy" ? "buyBox full" : "buyBox"}>
                            {orderBookBuyMap.map(item =>
                                <Row key={Math.random()} className="eachLine">
                                    <Col span={8} className="left buyText">
                                        {item.full ? item.price :
                                            <span><span className="buyPartText">{item.curNum}</span>
                                                <span>{item.leftNum}</span></span>
                                        }
                                    </Col>
                                    <Col span={7} offset={1} className="right commText">
                                        <span>{item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`}</span>
                                        {item.amountZeroNum ? <span className="commPartText">{"".padEnd(item.amountZeroNum, "0")}</span> : null}
                                    </Col>
                                    <Col span={8} className="right commText">
                                        <span>{item.total.toString().match(/\./) ? item.total : `${item.total}.`}</span>
                                        {item.totalZeroNum ? <span className="commPartText">{"".padEnd(item.totalZeroNum, "0")}</span> : null}
                                    </Col>
                                    <div className="lineBG buyBG" style={{ width: `${item.percent}%` }}></div>
                                </Row>
                            )}
                        </div> : null
                    }
                    <Row className="changeDecimals" justify="center">
                        <Col span={6} className="decimalsText">Decimals</Col>
                        <Col span={9}>
                            <i className="opsIcon plus" onClick={this.changeDecimals.bind(this, "plus")}>+</i>
                            <span className="decimalsNum">{curDecimals}</span>
                            <i className="opsIcon minus" onClick={this.changeDecimals.bind(this, "minus")}>-</i>
                        </Col>
                    </Row>
                </Row>
            </WrapperOrderBookCmp>
        );
    }
}