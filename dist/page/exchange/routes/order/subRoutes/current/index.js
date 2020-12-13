var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Table, Select, Button, message, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderCurrentCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';
const { Option } = Select;
const typeList = ["全部", "001", "002", "003"];
let Current = class Current extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelect = (value) => {
            this.setState({
                selectValue: value
            }, () => {
                // 调取接口
                this.getAllOrders();
            });
        };
        this.cancelAllOrders = () => {
            this.cancelOrder();
        };
        this.handlePageChange = (v) => {
            this.setState({ page: v }, () => {
                this.getAllOrders();
            });
        };
        this.state = {
            selectValue: "",
            page: 0
        };
    }
    getAllOrders() {
        let that = this;
        const { selectValue, page } = this.state;
        // TODO 入参数据假的
        let data = {
            acctNo: "123@qq.com",
            size: 1,
            start: page || 1,
            type: selectValue || typeList[1]
        };
        // 获取当前所有委托
        ajax({
            method: "post",
            url: "order.getAllOrders",
            data: data,
            callback(data) {
                if (data && data.length >= 0) {
                    that.props.orderCurrentStore.updateOrderCurrentList(data);
                }
            }
        });
    }
    componentDidMount() {
        this.getAllOrders();
    }
    cancelOrder(id = "") {
        let that = this;
        ajax({
            url: "order.cancelOrder",
            data: { id: id || '' },
            callback(data) {
                message.success('取消成功~');
                // 取消成功后删除对应数据 （？重新获取list）
                that.setState({
                    selectValue: "全部"
                });
                that.props.orderCurrentStore.cancelOrder(id || '');
            }
        });
    }
    handleCancel(record) {
        if (record.isCancle) {
            this.cancelOrder(record.id);
        }
    }
    render() {
        const { orderCurrentList } = this.props.orderCurrentStore;
        const { selectValue } = this.state;
        let dataSource = orderCurrentList;
        let columns = [
            {
                title: '时间',
                dataIndex: 'delegationTime',
                key: 'delegationTime',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '交易对',
                dataIndex: 'product',
                key: 'product',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '方向',
                dataIndex: 'direction',
                key: 'direction',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '数量',
                dataIndex: 'num',
                key: 'num',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '完成度',
                dataIndex: 'completeness',
                key: 'completeness',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '成交额',
                dataIndex: 'dealAmt',
                key: 'dealAmt',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '触发条件',
                dataIndex: 'condition',
                key: 'condition',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '操作',
                key: 'action',
                render: (value) => {
                    return (React.createElement("div", { className: 'show', onClick: () => this.handleCancel(value) }, "\u64A4\u5355"));
                }
            }
        ];
        const newPagination = {
            pageSize: 1,
            total: dataSource.length,
            onChange: (page) => this.handlePageChange(page),
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        };
        return (React.createElement(WrappedOrderCurrentCmp, null,
            React.createElement(Header, { title: "\u5F53\u524D\u59D4\u6258" }),
            React.createElement(WrappedHorizontalFormCmp, null,
                React.createElement(Form, { className: "orderCurrentForm", layout: "vertical" },
                    React.createElement(Form.Item, { label: "\u7B5B\u9009" },
                        React.createElement(Select, { className: "selectContent", value: selectValue, onChange: this.handleSelect, bordered: false }, typeList.map((t, index) => React.createElement(Option, { key: index, value: t }, t)))),
                    React.createElement(Form.Item, { className: "btnItem" },
                        React.createElement(Button, { onClick: this.cancelAllOrders }, "\u53D6\u6D88\u5168\u90E8\u8BA2\u5355")))),
            React.createElement(WrappedTableCmp, null,
                React.createElement(Table, { className: "orderCurrentTable", dataSource: dataSource, rowKey: (record) => record.id, columns: columns, pagination: newPagination }))));
    }
};
Current = __decorate([
    inject('orderCurrentStore'),
    observer
], Current);
export default Current;
//# sourceMappingURL=index.js.map