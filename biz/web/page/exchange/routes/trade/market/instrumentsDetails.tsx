import * as React from "react";
import { Row, Col } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react/index';
import { WrapperInstrumentsDetails } from './styled';
import { subscribeAsSymbol } from 'webExchangeSubscribe';

type InstrumentsDetailsProps = {
    searchBasicType: String,
    instrumentStore?: any
}

@inject('instrumentStore')
@observer
export default class InstrumentList extends React.Component<InstrumentsDetailsProps, {}> {
    constructor(props: InstrumentsDetailsProps) {
        super(props)
    }

    setFavorite(instrumentId) {
        this.props.instrumentStore.changeFavoriteList(instrumentId);
    }

    changeInstrumentId = (instrumentId) => {
        if(instrumentId !== this.props.instrumentStore.currentInstrument) {
            this.props.instrumentStore.changeInstrument(instrumentId);
            subscribeAsSymbol();
        }
    }

    render() {
        const { searchText, instrumentsListMap, favoriteList } = this.props.instrumentStore;
        const { searchBasicType } = this.props;
        let instrumentListData = dataMapping.trade.getInstrumentsPanelData({ searchBasicType, searchText, list: toJS(instrumentsListMap),favoriteList });

        return (
            <WrapperInstrumentsDetails>
                <Row justify="start" align="middle" className="title">
                    <Col span={5} className="left">Pair</Col>
                    <Col span={5} className="center">Last Price</Col>
                    <Col span={5} className="right">24h Change</Col>
                </Row>
                <div className="contentBox">
                    {instrumentListData.map(data => 
                        <Row key={data.symbol} justify="start" className="eachLine" onClick={this.changeInstrumentId.bind(this, data.symbol)}>
                            <Col span={2} className="favoriteIcon"><i className={favoriteList.indexOf(data.symbol) > -1 ? 'active' : ''} onClick={this.setFavorite.bind(this, data.symbol)}></i></Col>
                            <Col span={5} className="left">{data.target}&nbsp;/&nbsp;{data.currency}</Col>
                            <Col span={4} className="center">{data.lastPrice}</Col>
                            <Col span={4} className={data.status == 'up' ? 'right up' : 'right down'}>{data.status == 'up' ? '+' : ''}{data.chgRate}%</Col>
                        </Row>
                    )}
                </div>
            </WrapperInstrumentsDetails >
        );
    }
}