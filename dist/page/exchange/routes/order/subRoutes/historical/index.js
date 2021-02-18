var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Table, Button, DatePicker, Select, Checkbox, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderHistoricalCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';
const { RangePicker } = DatePicker;
const { Option } = Select;
const typeList = ["001", "002", "003"];
let Historical = class Historical extends React.Component {
    constructor(props) {
        super(props);
        this.selectedChange = (value) => {
            this.setState({
                selectedValue: value
            });
        };
        this.handleClear = () => {
            this.setState({
                selectedValue: ''
            });
        };
        this.handleSubmit = () => {
        };
        this.handleExport = () => {
            console.log("导出");
        };
        this.hideWithdrawalOrder = () => {
            console.log('cancel');
        };
        this.state = {
            selectedValue: ''
        };
    }
    getAllHistoricalOrders() {
        let that = this;
        // 获取历史所有委托
        ajax({
            url: "order.getAllHistoricalOrders",
            data: {
                acctNo: "123@qq.com",
                direction: "string",
                endDate: "string",
                export: true,
                leftCoin: "string",
                rightCoin: "string",
                size: 0,
                start: 0,
                startDate: "string"
            },
            callback(data) {
                if (data && data.list) {
                    that.props.orderHistoricalStore.updateOrderHistoricalList(data.list);
                }
            }
        });
    }
    componentDidMount() {
        this.getAllHistoricalOrders();
    }
    render() {
        const { orderHistoricalList } = this.props.orderHistoricalStore;
        const { selectedValue } = this.state;
        let dataSource = orderHistoricalList;
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
        return (React.createElement(WrappedOrderHistoricalCmp, null,
            React.createElement(Header, { title: "\u5386\u53F2\u59D4\u6258" }),
            React.createElement(WrappedHorizontalFormCmp, null,
                React.createElement(Form, { className: "orderHistoricalForm", layout: "vertical" },
                    React.createElement(Form.Item, { label: "\u65F6\u95F4", className: "date" },
                        React.createElement(RangePicker, { bordered: false })),
                    React.createElement(Form.Item, { label: "\u5E01\u5BF9", className: "pairs" },
                        React.createElement(Select, { defaultValue: selectedValue, onChange: this.selectedChange, bordered: false }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type))),
                        React.createElement("div", { className: "connect" }, "-"),
                        React.createElement(Select, { defaultValue: selectedValue, onChange: this.selectedChange, bordered: false }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                    React.createElement(Form.Item, { label: "\u4E70\u5356\u7C7B\u522B", className: "type" },
                        React.createElement(Select, { defaultValue: selectedValue, onChange: this.selectedChange, bordered: false }, typeList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                    React.createElement(Form.Item, { className: "btnGroup" },
                        React.createElement(Button, { className: "btn resetBtn", onClick: this.handleClear }, "\u91CD\u7F6E"),
                        React.createElement(Button, { className: "btn searchBtn", onClick: this.handleSubmit }, "\u641C\u7D22")),
                    React.createElement(Form.Item, { className: "actionGroup" },
                        React.createElement(Checkbox, { onChange: this.hideWithdrawalOrder }, "\u9690\u85CF\u6240\u6709\u5DF2\u64A4\u5355"),
                        React.createElement("div", { className: "export", onClick: this.handleExport }, "\u5BFC\u51FA\u5168\u90E8\u5386\u53F2\u59D4\u6258\u8BB0\u5F55")))),
            React.createElement(WrappedTableCmp, null,
                React.createElement(Table, { className: "orderHistoricalTable", dataSource: dataSource, columns: columns, pagination: false, rowClassName: () => { return "orderHistoricalTableRow"; } }))));
    }
};
Historical = __decorate([
    inject("orderHistoricalStore"),
    observer
], Historical);
export default Historical;
//# sourceMappingURL=index.js.map