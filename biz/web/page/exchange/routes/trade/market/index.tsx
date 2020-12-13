import * as React from "react";
import { Row, Col, Dropdown, } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { toJS } from 'mobx';
import { WrapperMarketCmp } from './styled';
import InstrumentsList from './instrumentsList';

type MarketProps = {
    instrumentStore?: any
}

type MarketState = {
    instrumentsDropdownStatus: boolean
}

@inject('instrumentStore')
@observer
export default class Market extends React.Component<MarketProps, MarketState> {
    constructor(props: MarketProps) {
        super(props);
        this.state = {
            instrumentsDropdownStatus: false //控制币种对切换
        }
    }

    changeInstrumentsDropdown = instrumentsDropdownStatus => {
        this.setState({ instrumentsDropdownStatus })
    }

    render() {
        const { instrumentStore } = this.props;
        let { currentInstrumentData } = instrumentStore;
        let { lastPrice, lastPriceDollar, chgVol, chgRate, high, low, volume } = currentInstrumentData;

        return (
            <WrapperMarketCmp>
                <Row justify="center" align="middle" className="marketBox">
                    <Col span={3}>
                        <Dropdown overlay={<InstrumentsList />} overlayClassName="instrumentsDropdown" placement="bottomLeft" onVisibleChange={this.changeInstrumentsDropdown}>
                            <div className={this.state.instrumentsDropdownStatus ? 'curInstrument up' : 'curInstrument down'}>{instrumentStore.currentInstrument}</div>
                        </Dropdown>
                    </Col>
                    <Col span={21}>
                        <Row justify="end">
                            <Col xxl={4} xl={5}>
                                <div className="title">Last Price</div>
                                <div className="content">
                                    <span className={chgRate > 0 ? "up" : "down"}>{lastPrice}</span>&nbsp;&nbsp;
                                    <span>${lastPriceDollar}</span>
                                </div>
                            </Col>
                            <Col xxl={4} xl={document.body.clientWidth > 1439 ? 5 : 6}>
                                <div className="title">24h Change</div>
                                <div className="content">
                                    <span className={chgRate > 0 ? "up" : "down"}>{chgVol}</span>&nbsp;&nbsp;
                                    <span className={chgRate > 0 ? "up" : "down"}>{chgRate}%</span>
                                </div>
                            </Col>
                            {document.body.clientWidth > 1439 ?
                                <Col xxl={3} xl={4}>
                                    <div className="title">24h High</div>
                                    <div className="content">{high}</div>
                                </Col> : null
                            }
                            {document.body.clientWidth > 1439 ?
                                <Col xxl={3} xl={4}>
                                    <div className="title">24h Low</div>
                                    <div className="content">{low}</div>
                                </Col> : null
                            }
                            <Col xxl={3} xl={document.body.clientWidth > 1439 ? 4 : 5}>
                                <div className="title">24 Volume</div>
                                <div className="content">{volume}&nbsp;{instrumentStore.currentBasicCurrency}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </WrapperMarketCmp>
        );
    }
}