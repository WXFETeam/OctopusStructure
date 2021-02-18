var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperOpenOrdersCmp } from './styled';
import { Table } from 'antd';
import OpsLine from './opsLine';
let OpenOrders = class OpenOrders extends React.Component {
    constructor(props) {
        super(props);
        this.changePairs = (e) => {
            this.setState({ hidePairs: e.target.checked });
        };
        this.changeTypes = orderType => {
            this.setState({ orderType });
        };
        this.state = {
            hidePairs: false,
            orderType: "All"
        };
    }
    cancelOrder(orderId) {
        console.log(orderId);
    }
    render() {
        let dataSource = this.state.hidePairs ?
            this.props.openOrdersStore.openOrdersTableMap.filter(item => (item.pair == this.props.instrumentStore.currentInstrument) && (this.state.orderType == "All" ? true : item.type == this.state.orderType) && item.amount > 0) :
            this.props.openOrdersStore.openOrdersTableMap.filter(item => (this.state.orderType == "All" ? true : item.type == this.state.orderType) && item.amount > 0);
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
                width: 100,
                fixed: 'left'
            }, {
                title: 'Side',
                dataIndex: 'side',
                key: 'side',
                width: 60,
                sorter: (a, b) => a.side > b.side ? 1 : -1,
                render: (text, record) => React.createElement("span", { className: record.side == "buy" ? "buy" : "sell" }, capitalize(record.side))
            }, {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                sorter: (a, b) => a.type > b.type ? 1 : -1,
                width: 100
            }, {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                sorter: (a, b) => a.amount - b.amount,
                width: 100,
                align: 'right'
            }, {
                title: 'Limit Price',
                dataIndex: 'limitPrice',
                key: 'limitPrice',
                sorter: (a, b) => a.limitPrice - b.limitPrice,
                width: 110,
                align: 'right'
            }, {
                title: 'Stop Price',
                dataIndex: 'stopPrice',
                key: 'stopPrice',
                sorter: (a, b) => a.stopPrice - b.stopPrice,
                width: 110,
                align: 'right'
            }, {
                title: 'Shown Amount',
                dataIndex: 'shownAmount',
                key: 'shownAmount',
                sorter: (a, b) => a.shownAmount - b.shownAmount,
                width: 140,
                align: 'right'
            }, {
                title: 'Duration',
                dataIndex: 'duration',
                key: 'duration',
                sorter: (a, b) => a.duration - b.duration,
                width: 100,
                align: 'center'
            }, {
                title: 'Total',
                dataIndex: 'total',
                key: 'total',
                sorter: (a, b) => a.total - b.total,
                width: 100,
                align: 'center'
            }, {
                title: 'Time',
                dataIndex: 'time',
                key: 'time',
                sorter: (a, b) => a.time > b.time ? 1 : -1
            }, {
                title: 'Cancel',
                dataIndex: 'cancel',
                key: 'cancel',
                width: 100,
                fixed: 'right',
                align: 'center',
                render: (text, record) => React.createElement("a", { className: "cancelBtn", onClick: this.cancelOrder.bind(this, record.orderId) }, "Cancel")
            }];
        return (React.createElement(WrapperOpenOrdersCmp, null,
            React.createElement(OpsLine, { type: "openOrders", changePairs: this.changePairs, changeTypes: this.changeTypes, dataSource: dataSource }),
            React.createElement(Table, { className: "myOrderTable", rowKey: "orderId", dataSource: dataSource, columns: columns, pagination: false, rowClassName: () => { return "myOrdersTableRow"; }, scroll: { x: 1270, y: this.props.scrollY } })));
    }
};
OpenOrders = __decorate([
    inject('openOrdersStore'),
    inject('instrumentStore'),
    observer
], OpenOrders);
export default OpenOrders;
//# sourceMappingURL=openOrders.js.map