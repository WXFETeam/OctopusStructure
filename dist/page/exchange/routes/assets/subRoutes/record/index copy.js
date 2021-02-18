var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Button, Select, DatePicker, Table, Row, Col, Form, Radio } from 'antd';
import { observer, inject } from 'mobx-react/index';
import Header from '../../components/header';
import { WrappedRecordCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Item } = Form;
const currencyList = ['USDT', 'ETH', 'BTC'];
let Record = class Record extends React.Component {
    constructor(props) {
        super(props);
        this.columns = () => ([
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '币对',
                dataIndex: 'currency',
                key: 'currency',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '数量',
                dataIndex: 'size',
                key: 'size',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '时间',
                dataIndex: 'date',
                key: 'date',
                render: (value) => (React.createElement("div", null, value))
            }
        ]);
        this.selectedChange = (value) => {
            const { searchType } = this.state;
            if (searchType === 'recharge') {
                this.setState({
                    rechargeForm: Object.assign(Object.assign({}, this.state.rechargeForm), { selectedCurrency: value })
                });
            }
            else {
                this.setState({
                    withDrawForm: Object.assign(Object.assign({}, this.state.withDrawForm), { selectedCurrency: value })
                });
            }
        };
        this.handleClear = () => {
            console.log(222);
            const { searchType } = this.state;
            if (searchType === 'recharge') {
                this.setState({
                    rechargeForm: {
                        startDate: '',
                        selectedCurrency: '',
                        endDate: ''
                    }
                });
            }
            else {
                this.setState({
                    withDrawForm: {
                        startDate: '',
                        selectedCurrency: '',
                        endDate: ''
                    }
                });
            }
        };
        this.dateChange = (value) => {
            const { searchType } = this.state;
            if (searchType === 'recharge') {
                this.setState({
                    rechargeForm: Object.assign(Object.assign({}, this.state.rechargeForm), { 
                        // startDate:moment(value[0]).format('YYYY-MM-DD'),
                        // endDate: moment(value[1]).format('YYYY-MM-DD')
                        startDate: value[0], endDate: value[1] })
                });
            }
            else {
                this.setState({
                    withDrawForm: Object.assign(Object.assign({}, this.state.withDrawForm), { 
                        // startDate:moment(value[0]).format('YYYY-MM-DD'),
                        // endDate: moment(value[1]).format('YYYY-MM-DD')
                        startDate: value[0], endDate: value[1] })
                });
            }
        };
        this.handleSubmit = () => {
            console.log(333);
        };
        this.handleTableChange = (page) => {
            console.log(page, 'page');
        };
        this.typeChange = (e) => {
            // state中的type类型更改
            this.setState({ searchType: e.target.value }, () => {
                this.getRecordList();
                this.getContentRender();
            });
        };
        this.currencyChange = (e) => {
            // state中的currency类型更改
            this.setState({ searchCurrency: e.target.value }, () => {
                this.getRecordList();
                this.getContentRender();
            });
        };
        this.state = {
            rechargeForm: {
                startDate: '',
                selectedCurrency: '',
                endDate: ''
            },
            withDrawForm: {
                startDate: '',
                selectedCurrency: '',
                endDate: ''
            },
            searchType: 'recharge',
            searchCurrency: 'digital',
            pagination: {}
        };
    }
    getRecordList() {
        const { searchType, searchCurrency } = this.state;
        console.log(searchType, searchCurrency, 'changed');
        // 调用ajax 传参不一样
        let that = this;
        let url = 'assets.getRechargeRecordList'; // 'assets.getWithdrawRecordList'
        ajax({
            url: url,
            callback(data) {
                if (searchType === 'recharge') {
                    that.props.recordStore.updateRechargeRecord(data.list);
                }
                else {
                    that.props.recordStore.updateWithdrawRecord(data.list);
                }
            }
        });
    }
    componentDidMount() {
        this.getRecordList();
    }
    getForm() {
        const { rechargeForm, withDrawForm, searchType } = this.state;
        const currency = searchType === 'recharge' ? rechargeForm.selectedCurrency : withDrawForm.selectedCurrency;
        const start = searchType === 'recharge' ? rechargeForm.startDate : withDrawForm.startDate;
        const end = searchType === 'recharge' ? rechargeForm.endDate : withDrawForm.endDate;
        console.log(currency, 'form changed');
        return (React.createElement(WrappedHorizontalFormCmp, null,
            React.createElement(Form, { className: "recordForm", layout: "vertical" },
                React.createElement(Item, { label: "\u65F6\u95F4", className: "date" },
                    React.createElement(RangePicker, { bordered: false, onChange: this.dateChange, value: [start, end] })),
                React.createElement(Item, { label: "\u5E01\u79CD", className: "currency" },
                    React.createElement(Select, { value: currency, onChange: this.selectedChange, bordered: false }, currencyList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                React.createElement(Item, { className: "btnGroup" },
                    React.createElement(Button, { className: "btn resetBtn", onClick: this.handleClear }, "\u91CD\u7F6E"),
                    React.createElement(Button, { className: "btn searchBtn", onClick: this.handleSubmit }, "\u641C\u7D22"))),
            React.createElement("a", { className: "export" }, "\u5BFC\u51FA\u5168\u90E8\u8BB0\u5F55")));
    }
    getTable() {
        const { rechargeRecordList, withdrawRecordList } = this.props.recordStore;
        const { searchType } = this.state;
        let dataSource = searchType === 'recharge' ? rechargeRecordList : withdrawRecordList;
        const newPagination = {
            pageSize: 5,
            total: dataSource.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            onChange: (page) => this.handleTableChange(page)
        };
        return (React.createElement(WrappedTableCmp, null,
            React.createElement(Table, { className: "recordTable", rowKey: record => record.id, dataSource: dataSource, columns: this.columns(), pagination: newPagination })));
    }
    getContentRender() {
        return (React.createElement(Row, { className: "recordContentWrapped" },
            React.createElement(Col, { className: "searchForm" }, this.getForm()),
            React.createElement(Col, null, this.getTable())));
    }
    render() {
        const { searchCurrency, searchType } = this.state;
        return (React.createElement(WrappedRecordCmp, null,
            React.createElement(Header, { title: "\u5145\u63D0\u8BB0\u5F55" }),
            React.createElement(Row, { className: "searchWrapped" },
                React.createElement(Col, { span: 8 },
                    React.createElement(Row, { align: "middle" },
                        React.createElement("span", { className: "btn-title" }, "\u7C7B\u578B"),
                        React.createElement(Radio.Group, { defaultValue: searchType, buttonStyle: "solid", onChange: this.typeChange },
                            React.createElement(Radio.Button, { value: "recharge" }, "\u5145\u503C"),
                            React.createElement(Radio.Button, { value: "withDraw" }, "\u63D0\u73B0")))),
                React.createElement(Col, null,
                    React.createElement(Row, { align: "middle" },
                        React.createElement("span", { className: "btn-title" }, "\u8D27\u5E01"),
                        React.createElement(Radio.Group, { defaultValue: searchCurrency, buttonStyle: "solid", onChange: this.currencyChange },
                            React.createElement(Radio.Button, { value: "digital" }, "\u6570\u5B57\u8D27\u5E01"),
                            React.createElement(Radio.Button, { value: "legal" }, "\u6CD5\u5E01"))))),
            this.getContentRender()));
    }
};
Record = __decorate([
    inject('recordStore'),
    observer
], Record);
export default Record;
//# sourceMappingURL=index copy.js.map