import * as React from "react";
import { Row, Col } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperTradeHistoryCmp } from './styled';

type TradeHistoryProps = {
    tradeHistoryAllStore?: any
}

@inject('tradeHistoryAllStore')
@observer
export default class TradeHistory extends React.Component<TradeHistoryProps, {}> {
    constructor(props: TradeHistoryProps) {
        super(props);
    }

    render() {
        let { tradeHistoryAllListMap } = this.props.tradeHistoryAllStore;
        return (
            <WrapperTradeHistoryCmp>
                <Row className="title" justify="space-between" align="middle">
                    <Col span={10} className="text">Trade History</Col>
                </Row>
                <Row className="historyTitle">
                    <Col span={8} className="left">Price(BTC)</Col>
                    <Col span={7} offset={1} className="right">Amount(ETH)</Col>
                    <Col span={8} className="right">Time</Col>
                </Row>
                <Row className="tradeHistoryBox">
                    {tradeHistoryAllListMap.map(item =>
                        <Row key={item.tradeId} className="eachLine">
                            <Col span={8} className={item.side == "buy" ? "left buyText" : "left sellText"}>
                                {item.full ? item.price :
                                    <span><span className={item.side == "buy" ? "buyPartText" : "sellPartText"}>{item.curNum}</span>
                                    <span>{item.leftNum}</span></span>
                                }
                            </Col>
                            <Col span={7} offset={1} className="right commText">
                                <span>{item.amount.toString().match(/\./) ? item.amount : `${item.amount}.`}</span>
                                {item.amountZeroNum ? <span className="commPartText">{"".padEnd(item.amountZeroNum, "0")}</span> : null}
                            </Col>
                            <Col span={8} className="right commText">{item.dateTime}</Col>
                        </Row>
                    )}
                </Row>
            </WrapperTradeHistoryCmp>
        );
    }
}