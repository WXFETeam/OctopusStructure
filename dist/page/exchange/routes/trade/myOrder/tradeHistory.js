var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperTradeHistoryCmp } from './styled';
import { Table } from 'antd';
import OpsLine from './opsLine';
let TradeHistory = class TradeHistory extends React.Component {
    constructor(props) {
        super(props);
        this.changePairs = (e) => {
            this.setState({ hidePairs: e.target.checked });
        };
        this.state = {
            hidePairs: false
        };
    }
    render() {
        let dataSource = this.state.hidePairs ? this.props.tradeHistoryStore.tradeHistoryTableMap.filter(item => item.pair == this.props.instrumentStore.currentInstrument) : this.props.tradeHistoryStore.tradeHistoryTableMap;
        let columns = [{
                title: React.createElement("span", { style: { paddingLeft: 20 } }, "Trade ID"),
                dataIndex: 'tradeId',
                key: 'tradeId',
                sorter: (a, b) => a.tradeId > b.tradeId ? 1 : -1,
                fixed: 'left',
                width: 120,
                render: (text, record) => React.createElement("span", { style: { paddingLeft: 20 } }, record.tradeId)
            }, {
                title: 'Order ID',
                dataIndex: 'orderId',
                key: 'orderId',
                sorter: (a, b) => a.orderId > b.orderId ? 1 : -1,
                fixed: 'left',
                width: 120
            }, {
                title: 'Pair',
                dataIndex: 'pair',
                key: 'pair',
                fixed: 'left',
                width: 120
            }, {
                title: 'Side',
                dataIndex: 'side',
                key: 'side',
                sorter: (a, b) => a.side > b.side ? 1 : -1,
                width: 120,
                align: 'center',
                render: (text, record) => React.createElement("span", { className: record.side == "buy" ? "buy" : "sell" }, capitalize(record.side))
            }, {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
                sorter: (a, b) => a.price - b.price,
                width: 130,
                align: 'right'
            }, {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                sorter: (a, b) => a.amount - b.amount,
                width: 120,
                align: 'right'
            }, {
                title: 'Fee',
                dataIndex: 'fee',
                key: 'fee',
                sorter: (a, b) => a.fee - b.fee,
                width: 100,
                align: 'center'
            }, {
                title: 'Total',
                dataIndex: 'total',
                key: 'total',
                sorter: (a, b) => a.total - b.total,
                width: 120,
                align: 'center'
            }, {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                sorter: (a, b) => a.time > b.time ? 1 : -1,
            }];
        return (React.createElement(WrapperTradeHistoryCmp, null,
            React.createElement(OpsLine, { type: "tradeHistory", changePairs: this.changePairs }),
            React.createElement(Table, { className: "myOrderTable", rowKey: "tradeId", dataSource: dataSource, columns: columns, pagination: false, rowClassName: () => { return "myOrdersTableRow"; }, scroll: { x: 1100, y: this.props.scrollY } })));
    }
};
TradeHistory = __decorate([
    inject('tradeHistoryStore'),
    inject('instrumentStore'),
    observer
], TradeHistory);
export default TradeHistory;
//# sourceMappingURL=tradeHistory.js.map