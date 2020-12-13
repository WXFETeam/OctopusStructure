var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperOrderHistoryCmp } from './styled';
import { Table } from 'antd';
import OpsLine from './opsLine';
let OrderHistory = class OrderHistory extends React.Component {
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
        let dataSource = this.state.hidePairs ? this.props.orderHistoryStore.orderHistoryTableMap.filter(item => item.pair == this.props.instrumentStore.currentInstrument) : this.props.orderHistoryStore.orderHistoryTableMap;
        let columns = [{
                title: React.createElement("span", { style: { paddingLeft: 20 } }, "Order ID"),
                dataIndex: 'orderId',
                key: 'orderId',
                sorter: (a, b) => a.orderId > b.orderId ? 1 : -1,
                width: 110,
                fixed: 'left',
                render: (text, record) => React.createElement("span", { style: { paddingLeft: 20 } }, record.orderId)
            }, {
                title: 'Pair',
                dataIndex: 'pair',
                key: 'pair',
                width: 80,
                fixed: 'left'
            }, {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                width: 80,
                align: 'center'
            }, {
                title: 'Side',
                dataIndex: 'side',
                key: 'side',
                sorter: (a, b) => a.side > b.side ? 1 : -1,
                width: 80,
                render: (text, record) => React.createElement("span", { className: record.side == "buy" ? "buy" : "sell" }, capitalize(record.side))
            }, {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                sorter: (a, b) => a.type > b.type ? 1 : -1,
                width: 80
            }, {
                title: 'Average',
                dataIndex: 'average',
                key: 'average',
                sorter: (a, b) => a.average - b.average,
                width: 100,
                align: 'right'
            }, {
                title: 'Filled%',
                dataIndex: 'filled',
                key: 'filled',
                width: 80,
                align: 'center',
                sorter: (a, b) => a.filled - b.filled,
            }, {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                width: 100,
                align: 'right',
                sorter: (a, b) => a.amount - b.amount,
            }, {
                title: 'Limit Price',
                dataIndex: 'limitPrice',
                key: 'limitPrice',
                align: 'right',
                sorter: (a, b) => a.limitPrice - b.limitPrice,
                width: 100
            }, {
                title: 'Stop Price',
                dataIndex: 'stopPrice',
                key: 'stopPrice',
                align: 'right',
                sorter: (a, b) => a.stopPrice - b.stopPrice,
                width: 100
            }, {
                title: 'Shown Amount',
                dataIndex: 'shownAmount',
                key: 'shownAmount',
                align: 'right',
                sorter: (a, b) => a.shownAmount - b.shownAmount,
                width: 130
            }, {
                title: 'Duration',
                dataIndex: 'duration',
                key: 'duration',
                align: 'center',
                sorter: (a, b) => a.duration - b.duration,
                width: 80
            }, {
                title: 'Total',
                dataIndex: 'total',
                key: 'total',
                sorter: (a, b) => a.total - b.total,
                width: 120,
                align: 'center',
            }, {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                sorter: (a, b) => a.time > b.time ? 1 : -1,
            }];
        return (React.createElement(WrapperOrderHistoryCmp, null,
            React.createElement(OpsLine, { type: "orderHistory", changePairs: this.changePairs }),
            React.createElement(Table, { className: "myOrderTable", rowKey: "orderId", dataSource: dataSource, columns: columns, pagination: false, rowClassName: () => { return "myOrdersTableRow"; }, scroll: { x: 1400, y: this.props.scrollY } })));
    }
};
OrderHistory = __decorate([
    inject('instrumentStore', 'orderHistoryStore'),
    observer
], OrderHistory);
export default OrderHistory;
//# sourceMappingURL=orderHistory.js.map