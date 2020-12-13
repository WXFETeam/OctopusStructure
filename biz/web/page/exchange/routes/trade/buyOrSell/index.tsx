import * as React from "react";
import { Row, Col, Button, Tabs, Select } from 'antd';
import { WrapperBuyOrSellCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { renderComponent } from "recompose";
import Market from './market';
import Limit from './limit';
import Stop from './stop';
const { TabPane } = Tabs;
const { Option } = Select;

type BuyOrSellState = {
    direction: number,
    tabKey: string,
    tabSelectKey: string
    inputInfo: any
};

type BuyOrSellProps = {
    instrumentStore?: any
}

@inject('instrumentStore')
@observer
export default class BuyOrSell extends React.Component<BuyOrSellProps, BuyOrSellState> {
    constructor(props: BuyOrSellProps) {
        super(props);
        this.state = {
            direction: 0, // 0->buy,1->sell
            tabKey: 'LIMIT', // '0'->market,'1'->limit,'2'->stop,'3'->algo
            tabSelectKey: 'Stop-limit',
            inputInfo: {}
        };
        this.order = this.order.bind(this);
        this.changeDirection = this.changeDirection.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    changeDirection(val: any) {
        this.setState({
            direction: Number(val)
        });
    }

    changeTab(val: any) {
        this.setState({
            tabKey: val
        });
    }

    changeTabDetail = (val) => {
        this.setState({
            tabSelectKey: val
        });
    }

    changeInput(val: any) {
        this.setState({
            inputInfo: val
        });
    }

    order() {
        let {tabKey, tabSelectKey, inputInfo} = this.state;
        if (tabKey == 'MARKET') {
            // market
            if (!inputInfo.amount) return;
        } else if (tabKey == 'LIMIT') {
            // limit
            if (!inputInfo.amount || !inputInfo.limitPrice) return;
        } else if (tabKey == 'other') {
            if (tabSelectKey == 'Stop-limit') {

            } else if (tabSelectKey == 'Iceberg Order') {

            } else if (tabSelectKey == 'Hidden Order') {

            }
        }
        let postData = {
            direction: this.state.direction,
            instrumentId: this.props.instrumentStore.currentInstrument
        };
        ajax({
            url: "trade.order",
            method: 'post',
            data: Object.assign(postData, inputInfo),
            callback: (data) => {
                this.setState({
                    inputInfo: {}
                });
            }
        })
    }

    render() {
        const {direction, tabKey, tabSelectKey, inputInfo} = this.state;
        const {currentBasicCurrency, currentTargetCurrency} = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeInput: this.changeInput
        };
        let renderComponent = type => {
            if (type == 'other') type = tabSelectKey;
            switch(type) {
                case "MARKET": return <Market {...params} />;
                case "LIMIT": return <Limit {...params} />;
                case "Stop-limit": return <Stop {...params} keyName={type} />;
                case "Iceberg Order": return <Stop {...params} keyName={type} />;
                case "Hidden Order": return <Stop {...params} keyName={type} />;
            }
        }
        return (
            <WrapperBuyOrSellCmp>
                <div className="header">
                    <div className="title">Trade</div>
                    <div className="fees">
                        Fees<span className="icon"></span>
                        <div className="detail">
                            <div className="detail-item taker">
                                <div className="item-title">Taker:</div>
                                <div className="percent">0.10%</div>
                            </div>
                            <div className="detail-item maker">
                                <div className="item-title">Maker:</div>
                                <div className="percent">0.10%</div>
                            </div>
                            <div className="more"><a>View More ></a></div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <Row className="direction">
                        <Col span={12}>
                            <a onClick={() => {this.changeDirection(0);}} className={direction == 0 ? 'buy active' : 'buy'}>BUY</a>
                        </Col>
                        <Col span={12}>
                            <a onClick={() => {this.changeDirection(1);}} className={direction == 1 ? 'sell active' : 'sell'}>SELL</a>
                        </Col>
                    </Row>
                    <div className="inputArea">
                        <Tabs defaultActiveKey={tabKey} onChange={this.changeTab}>
                            {["LIMIT", "MARKET", "other"].map(item => {
                                return <TabPane
                                    tab={item === "other" ? 
                                        <div className="tabSelect">
                                            <div className="icon">
                                                <div className="tabSelectDetail">
                                                    <div className="detailItme">
                                                        <div className="detailTit"><span>Stop-Limit</span></div>
                                                        <div className="detailCon">
                                                            Place orders at preset commission prices<br/>
                                                            and quantities when the latest price<br/>
                                                            reaches the trigger price.
                                                        </div>
                                                    </div>
                                                    <div className="detailItme">
                                                        <div className="detailTit"><span>Iceberg Order</span></div>
                                                        <div className="detailCon">
                                                            Large single orders are hidden, only part of<br/>
                                                            the orders are visible to the public.
                                                        </div>
                                                    </div>
                                                    <div className="detailItme">
                                                        <div className="detailTit"><span>Hidden Order</span></div>
                                                        <div className="detailCon">
                                                            Orders are completely hidden from the<br/>
                                                            market.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Select 
                                                dropdownClassName="tradeTypeSelectDropdown"
                                                defaultValue={tabSelectKey} 
                                                onChange={this.changeTabDetail}>
                                                {["Stop-limit", "Iceberg Order", "Hidden Order"].map((item2, index2) => 
                                                    <Option key={index2} value={item2}>{item2}</Option>
                                                )}
                                            </Select>
                                        </div> : item}
                                    key={item}
                                >
                                    {renderComponent(item)}
                                </TabPane>
                            })}
                        </Tabs>
                        <div className="balance">0.00000000 {currentBasicCurrency}</div>
                    </div>
                    {direction == 0 ? 
                        <Button onClick={this.order} className="buyBtn greenGlBtn">BUY {currentTargetCurrency}</Button> :
                        <Button onClick={this.order} className="sellBtn redGlBtn">SELL {currentTargetCurrency}</Button>
                    }
                </div>
            </WrapperBuyOrSellCmp>
        );
    }
}