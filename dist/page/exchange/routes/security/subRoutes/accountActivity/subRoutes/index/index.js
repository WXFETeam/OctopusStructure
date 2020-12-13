var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Tabs, Table, Pagination } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperActivityRecordCmp } from './styled';
const { TabPane } = Tabs;
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.showTotal = (total) => {
            let start = (this.state.pageNumber - 1) * 8 + 1;
            let end = this.state.pageNumber * 8;
            if (end >= this.state.totalRecord) {
                end = this.state.totalRecord;
            }
            return `${start} to ${end} of ${total} records`;
        };
        this.onPageChange = (page) => {
            this.setState({
                pageNumber: page
            }, () => { console.log(this.state.pageNumber); });
        };
        this.state = {
            dataSource: [],
            pageNumber: 1,
            totalRecord: 0,
            tabKey: "1"
        };
    }
    callback(key) {
        this.getRecord(key);
    }
    componentDidMount() {
        this.getRecord("1");
    }
    getRecord(e) {
        let that = this;
        let data = {
            size: 10,
            start: this.state.pageNumber,
            type: e
        };
        let self = this;
        ajax({
            url: 'security.getActivityList',
            method: 'post',
            data: data,
            callback(data) {
                self.setState({
                    dataSource: data.list,
                    totalRecord: data.total
                });
            }
        });
    }
    handleChange() {
        this.props.history.push('/security/accountActivity/disable');
    }
    render() {
        let columns = [
            {
                title: '时间',
                dataIndex: 'operateTime',
                key: 'operateTime'
            }, {
                title: '来源',
                dataIndex: 'source',
                key: 'source'
            }, {
                title: '活动',
                dataIndex: 'activityName',
                key: 'activityName'
            }, {
                title: '状态',
                dataIndex: 'operateStatus',
                key: 'operateStatus',
                render: (text, record) => (React.createElement("div", { className: record.status == 0 ? "failed" : "success" }, record.status == 0 ? "Failed(2FA错误)" : "成功"))
            }, {
                title: 'IP地址',
                dataIndex: 'ipAddress',
                key: 'ipAddress'
            }
        ];
        return (React.createElement(WrapperActivityRecordCmp, null,
            React.createElement("div", { className: "title" }, "\u8FD1\u671F\u8D26\u6237\u6D3B\u52A8"),
            React.createElement("div", { className: "tips" },
                "\u8D26\u6237\u5F02\u5E38\uFF1F",
                React.createElement("span", { onClick: this.handleChange.bind(this) }, "\u7981\u7528\u8D26\u6237")),
            React.createElement(Row, { justify: "center" },
                React.createElement(Col, { className: "table" },
                    React.createElement(Tabs, { defaultActiveKey: "1", onChange: this.callback.bind(this) },
                        React.createElement(TabPane, { tab: "\u767B\u5F55\u6D3B\u52A8", key: "1" },
                            React.createElement(Row, { className: "contentTab1" },
                                React.createElement(Table, { className: "orderCurrentTable", rowKey: "key", dataSource: this.state.dataSource, columns: columns, pagination: false, rowClassName: () => { return "orderCurrentTableRow"; } })),
                            React.createElement(Row, { className: 'paginationWrapper', style: { justifyContent: 'flex-end', paddingTop: 24 } },
                                React.createElement(Pagination, { showTotal: this.showTotal.bind(this), onChange: this.onPageChange.bind(this), current: this.state.pageNumber, total: this.state.totalRecord, pageSize: 3 }))),
                        React.createElement(TabPane, { tab: "\u5B89\u5168\u64CD\u4F5C\u8BB0\u5F55", key: "2" },
                            React.createElement(Row, { className: "contentTab1" },
                                React.createElement(Table, { className: "orderCurrentTable", rowKey: "key", dataSource: this.state.dataSource, columns: columns, pagination: false, rowClassName: () => { return "orderCurrentTableRow"; } })),
                            React.createElement(Row, { className: 'paginationWrapper', style: { justifyContent: 'flex-end', paddingTop: 24 } },
                                React.createElement(Pagination, { showTotal: this.showTotal.bind(this), onChange: this.onPageChange.bind(this), current: this.state.pageNumber, total: this.state.totalRecord, pageSize: 3 }))))))));
    }
};
Index = __decorate([
    inject('userStore'),
    observer,
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map