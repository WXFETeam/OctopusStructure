var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react/index';
import { WrapperInstrumentsDetails } from './styled';
import { subscribeAsSymbol } from 'webExchangeSubscribe';
let InstrumentList = class InstrumentList extends React.Component {
    constructor(props) {
        super(props);
        this.changeInstrumentId = (instrumentId) => {
            if (instrumentId !== this.props.instrumentStore.currentInstrument) {
                this.props.instrumentStore.changeInstrument(instrumentId);
                subscribeAsSymbol();
            }
        };
    }
    setFavorite(instrumentId) {
        this.props.instrumentStore.changeFavoriteList(instrumentId);
    }
    render() {
        const { searchText, instrumentsListMap, favoriteList } = this.props.instrumentStore;
        const { searchBasicType } = this.props;
        let instrumentListData = dataMapping.trade.getInstrumentsPanelData({ searchBasicType, searchText, list: toJS(instrumentsListMap), favoriteList });
        return (React.createElement(WrapperInstrumentsDetails, null,
            React.createElement(Row, { justify: "start", align: "middle", className: "title" },
                React.createElement(Col, { span: 5, className: "left" }, "Pair"),
                React.createElement(Col, { span: 5, className: "center" }, "Last Price"),
                React.createElement(Col, { span: 5, className: "right" }, "24h Change")),
            React.createElement("div", { className: "contentBox" }, instrumentListData.map(data => React.createElement(Row, { key: data.symbol, justify: "start", className: "eachLine", onClick: this.changeInstrumentId.bind(this, data.symbol) },
                React.createElement(Col, { span: 2, className: "favoriteIcon" },
                    React.createElement("i", { className: favoriteList.indexOf(data.symbol) > -1 ? 'active' : '', onClick: this.setFavorite.bind(this, data.symbol) })),
                React.createElement(Col, { span: 5, className: "left" },
                    data.target,
                    "\u00A0/\u00A0",
                    data.currency),
                React.createElement(Col, { span: 4, className: "center" }, data.lastPrice),
                React.createElement(Col, { span: 4, className: data.status == 'up' ? 'right up' : 'right down' },
                    data.status == 'up' ? '+' : '',
                    data.chgRate,
                    "%"))))));
    }
};
InstrumentList = __decorate([
    inject('instrumentStore'),
    observer
], InstrumentList);
export default InstrumentList;
//# sourceMappingURL=instrumentsDetails.js.map