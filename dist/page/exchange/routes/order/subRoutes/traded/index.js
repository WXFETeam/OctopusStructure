var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Table, Button, DatePicker, Select, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderTradedCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';
const { RangePicker } = DatePicker;
const { Option } = Select;
const typeList = ["001", "002", "003"];
const DIRCTION = ["全部", "买入", "卖出"];
let Traded = class Traded extends React.Component {
    constructor(props) {
        super(props);
        this.handleClear = () => {
            this.setState({
                searchObj: {
                    acctNo: "123@qq.com",
                    direction: "",
                    endDate: "",
                    export: false,
                    leftCoin: "",
                    rightCoin: "",
                    size: 10,
                    start: 1,
                    startDate: ""
                }
            });
        };
        this.handleSubmit = () => {
            this.getAllTradedOrders();
        };
        this.handleExport = () => {
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { export: true })
            }, () => {
                this.getAllTradedOrders();
            });
            console.log("导出");
        };
        this.handlePageChange = (v) => {
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { start: v })
            }, () => {
                this.getAllTradedOrders();
            });
        };
        this.handleOne = (value) => {
            console.log(value, 'value');
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { leftCoin: value })
            });
        };
        this.handleTwo = (value) => {
            console.log(value, 'value');
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { rightCoin: value })
            });
        };
        this.handleType = (value) => {
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { direction: value })
            });
        };
        this.dateChange = (value) => {
            const { searchObj } = this.state;
            this.setState({
                searchObj: Object.assign(Object.assign({}, searchObj), { 
                    // startDate: moment(value[0]).format('YYYYMMDD'),
                    // endDate: moment(value[1]).format('YYYYMMDD')
                    startDate: value[0], endDate: value[1] })
            });
        };
        this.state = {
            searchObj: {
                acctNo: "123@qq.com",
                direction: "",
                endDate: "",
                export: false,
                leftCoin: "",
                rightCoin: "",
                size: 10,
                start: 1,
                startDate: ""
            }
        };
    }
    getAllTradedOrders() {
        let that = this;
        const { searchObj } = this.state;
        // 获取历史所有委托
        ajax({
            url: "order.getAllTradedOrders",
            data: searchObj,
            callback(data) {
                if (data && data.list) {
                    that.props.orderTradedStore.updateOrderTradedList(data.list);
                }
            }
        });
    }
    componentDidMount() {
        this.getAllTradedOrders();
    }
    render() {
        const { orderTradedList } = this.props.orderTradedStore;
        const { searchObj } = this.state;
        const { startDate, endDate, direction, leftCoin, rightCoin } = searchObj;
        let dataSource = orderTradedList;
        let columns = [
            {
                title: '交易帐号',
                dataIndex: 'dealId',
                key: 'dealId',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '委托帐号',
                dataIndex: 'delegationId',
                key: 'delegationId',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '交易对',
                dataIndex: 'product',
                key: 'product',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '方向',
                dataIndex: 'direction',
                key: 'direction',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '价格',
                dataIndex: 'dealPrice',
                key: 'dealPrice',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '数量',
                dataIndex: 'dealNum',
                key: 'dealNum',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '费用',
                dataIndex: 'fee',
                key: 'fee',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '成交额',
                dataIndex: 'dealAmt',
                key: 'dealAmt',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '时间',
                dataIndex: 'dealTime',
                key: 'dealTime',
                render: (value) => (React.createElement("div", null, value))
            }
        ];
        const newPagination = {
            pageSize: 1,
            total: dataSource.length,
            onChange: (page) => this.handlePageChange(page),
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        };
        return (React.createElement(WrappedOrderTradedCmp, null,
            React.createElement(Header, { title: "\u5386\u53F2\u6210\u4EA4" }),
            React.createElement(WrappedHorizontalFormCmp, null,
                React.createElement(Form, { className: "orderTradedForm", layout: "vertical" },
                    React.createElement(Form.Item, { label: "\u65F6\u95F4", className: "date" },
                        React.createElement(RangePicker, { bordered: false, onChange: this.dateChange, value: [startDate, endDate] })),
                    React.createElement(Form.Item, { label: "\u5E01\u5BF9", className: "pairs" },
                        React.createElement(Select, { onChange: this.handleOne, bordered: false, value: leftCoin }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type))),
                        React.createElement("div", { className: "connect" }, "-"),
                        React.createElement(Select, { onChange: this.handleTwo, bordered: false, value: rightCoin }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                    React.createElement(Form.Item, { label: "\u4E70\u5356\u7C7B\u522B", className: "category" },
                        React.createElement(Select, { onChange: this.handleType, bordered: false, value: direction }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                    React.createElement(Form.Item, { className: "btnGroup" },
                        React.createElement(Button, { className: "btn resetBtn", onClick: this.handleClear }, "\u91CD\u7F6E"),
                        React.createElement(Button, { className: "btn searchBtn", onClick: this.handleSubmit }, "\u641C\u7D22")),
                    React.createElement(Form.Item, { className: "export" },
                        React.createElement("div", { onClick: this.handleExport }, "\u5BFC\u51FA\u5168\u90E8\u5386\u53F2\u59D4\u6258\u8BB0\u5F55")))),
            React.createElement(WrappedTableCmp, null,
                React.createElement(Table, { className: "orderTradedTable", rowKey: (record) => record.id, dataSource: dataSource, columns: columns, pagination: newPagination }))));
    }
};
Traded = __decorate([
    inject('orderTradedStore'),
    observer
], Traded);
export default Traded;
//# sourceMappingURL=index.js.map