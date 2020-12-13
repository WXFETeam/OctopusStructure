var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Table, Select, Pagination } from 'antd';
import { observer } from 'mobx-react/index';
import { WrappedDeviceCmp, WrappedTableCmp } from './styled';
import ConfirmModal from './modals/delete';
import Email from './modals/email';
import { withRouter } from 'react-router-dom';
const closeIcon = require("@webExchangeImgs/security/close.png");
const upIcon = require("@webExchangeImgs/security/up.png");
const downIcon = require("@webExchangeImgs/security/down.png");
const { Option } = Select;
let Device = class Device extends React.Component {
    constructor(props) {
        super(props);
        this.getRecord = () => {
            ajax({
                url: 'security.getDeviceList',
                data: { size: 10, start: 1 },
                callback: (data) => {
                    this.setState({
                        dataSource: data || data.list,
                        totalRecord: data.total
                    });
                }
            });
        };
        this.handleDelete = (record) => {
            this.setState({
                showDeleteModal: true,
                curDeviceInfo: record
            });
        };
        this.showMore = (record) => {
            this.props.history.push(`/security/device/detail?${record.parentId}`);
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
        this.handleExpand = (onExpand, record) => {
            ajax({
                url: 'security.getDeviceDetail',
                data: {
                    id: record.id,
                    size: 10,
                    start: 1
                },
                callback: (data) => {
                    let originData = this.state.dataSource;
                    let array = [];
                    originData.map((item, index) => {
                        if (item.id == record.id) {
                            array.push(Object.assign(item, { children: data.length > 1 ? data.slice(0, 5).concat({ address: '查看更多', showMore: true, parentId: item.id }) : data }));
                        }
                        else {
                            array.push(item);
                        }
                    });
                    this.setState({ dataSource: array }, onExpand(record));
                }
            });
        };
        this.state = {
            dataSource: [],
            totalRecord: 50,
            pageNumber: 1,
            showDeleteModal: false,
            showEmailModal: true,
            curDeviceInfo: {},
        };
    }
    componentDidMount() {
        this.getRecord();
    }
    render() {
        let columns = [
            {
                title: '设备',
                dataIndex: 'device',
                key: 'device',
                render: (value, record) => (React.createElement("div", { onClick: this.showMore.bind(this, record) }, value))
            }, {
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
            }, {
                title: '',
                dataIndex: 'delete',
                key: 'delete',
                render: (text, record) => (
                // record.floor && <img src={closeIcon} style={{ cursor: 'pointer' }} onClick={this.handleDelete.bind(this,record)} />
                React.createElement("img", { src: closeIcon, style: { cursor: 'pointer' }, onClick: this.handleDelete.bind(this, record) }))
            }
        ];
        return (React.createElement(WrappedDeviceCmp, null,
            React.createElement(Row, null,
                React.createElement("div", { className: "title" }, "\u767B\u5F55\u8BBE\u5907\u7BA1\u7406")),
            React.createElement(WrappedTableCmp, null,
                React.createElement("p", { className: 'tip' }, "\u8FD9\u4E9B\u8BBE\u5907\u5DF2\u88AB\u6388\u6743\u5141\u8BB8\u767B\u5F55\u60A8\u7684\u8D26\u6237"),
                React.createElement(Table, { className: "orderTradedTable", dataSource: this.state.dataSource, columns: columns, pagination: false, rowKey: 'id', expandable: {
                        expandIcon: ({ expanded, onExpand, record }) => 
                        // record.children ?
                        expanded ?
                            React.createElement("img", { src: upIcon, onClick: e => onExpand(record, e), className: 'expandIcon' })
                            :
                                React.createElement("img", { src: downIcon, onClick: this.handleExpand.bind(this, onExpand, record), className: 'expandIcon' })
                        // : null
                    } }),
                React.createElement(Row, { className: 'paginationWrapper', style: { justifyContent: 'flex-end', paddingTop: 24 } },
                    React.createElement(Pagination, { showTotal: this.showTotal.bind(this), onChange: this.onPageChange.bind(this), current: this.state.pageNumber, total: this.state.totalRecord, pageSize: 8 }))),
            this.state.showDeleteModal &&
                React.createElement(ConfirmModal, { curDeviceInfo: this.state.curDeviceInfo, _close: () => this.setState({ showDeleteModal: false }) }),
            this.state.showEmailModal &&
                React.createElement(Email, { _close: () => this.setState({ showEmailModal: false }) })));
    }
};
Device = __decorate([
    observer,
    renderBreadcrumbs,
    withRouter
], Device);
export default Device;
//# sourceMappingURL=index.js.map