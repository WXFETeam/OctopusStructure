var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Table, Select, message, Pagination } from 'antd';
import { observer } from 'mobx-react/index';
import { WrappedDeviceCmp, WrappedTableCmp } from './styled';
const { Option } = Select;
let Traded = class Traded extends React.Component {
    constructor(props) {
        super(props);
        this.getRecord = () => {
            let id = window.location.search.split('?')[1];
            ajax({
                url: 'security.getDeviceDetail',
                data: {
                    id,
                    size: 10,
                    start: 1
                },
                callback: (data) => {
                    this.setState({
                        dataSource: data,
                        totalRecord: data.total
                    });
                }
            });
        };
        this.handleDelete = () => {
            message.success('delete!');
        };
        this.showMore = (record) => {
            console.log(record);
        };
        this.onPageChange = (page) => {
            this.setState({
                pageNumber: page
            }, () => { console.log(this.state.pageNumber); });
        };
        this.showTotal = (total) => {
            let start = (this.state.pageNumber - 1) * 8 + 1;
            let end = this.state.pageNumber * 8;
            if (end >= this.state.totalRecord) {
                end = this.state.totalRecord;
            }
            return `${start} to ${end} of ${total} records`;
        };
        this.state = {
            dataSource: [],
            totalRecord: 20,
            pageNumber: 1
        };
    }
    componentDidMount() {
        this.getRecord();
    }
    render() {
        let columns = [
            {
                title: '登录所在地',
                dataIndex: 'address',
                key: 'address',
                render: (value, record) => (record.showMore ?
                    React.createElement("a", { onClick: this.showMore.bind(this, record) }, value) :
                    React.createElement("div", null, value))
            }, {
                title: '时间',
                dataIndex: 'loginTime',
                key: 'time',
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: 'IP地址',
                dataIndex: 'ip',
                key: 'ip',
                render: (value) => (React.createElement("div", null, value))
            }
        ];
        return (React.createElement(WrappedDeviceCmp, null,
            React.createElement(Row, null,
                React.createElement("div", { className: "title" }, "Chrome V80.0.3987.12 (Mac OS)")),
            React.createElement(WrappedTableCmp, null,
                React.createElement("p", { className: 'tip' }, "\u8FD9\u4E9B\u8BBE\u5907\u5DF2\u88AB\u6388\u6743\u5141\u8BB8\u767B\u5F55\u60A8\u7684\u8D26\u6237"),
                React.createElement(Table, { className: "orderTradedTable", dataSource: this.state.dataSource, columns: columns, pagination: false, rowKey: 'id' }),
                React.createElement(Row, { className: 'paginationWrapper', style: { justifyContent: 'flex-end', paddingTop: 24 } },
                    React.createElement(Pagination, { showTotal: this.showTotal.bind(this), onChange: this.onPageChange.bind(this), current: this.state.pageNumber, total: this.state.totalRecord, pageSize: 8 })))));
    }
};
Traded = __decorate([
    observer,
    renderBreadcrumbs
], Traded);
export default Traded;
//# sourceMappingURL=index.js.map