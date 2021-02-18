var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp, WrapHeaderCmp } from './styled';
import { Table, Select, Menu, Row, Col, Button, Switch, Pagination } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
const whiteListIcon = require("@webExchangeImgs/security/whiteListIcon.png");
import DelAddr from './delAddr';
import AddAddr from './addAddr';
// import GAModal from './gaModal';
import GoogleCodeModal from '@webExchangeComponents/googleCodeModal';
import EmailConfirmModal from './emailConfirm';
const { Option } = Select;
const typeList = [{
        name: "全部",
        value: "1"
    },
    {
        name: "name1",
        value: "2"
    },
    {
        name: "name2",
        value: "3"
    },
];
const dataSource = [
    {
        key: '1',
        coinType: 'BTC1',
        info: 'BTC1',
        addr: 'ABCDEFGHIJKLMN1',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '2',
        coinType: 'ETH2',
        info: 'ETH2',
        addr: 'ABCDEFGHIJKLMN2',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '3',
        coinType: 'ETH3',
        info: 'ETH3',
        addr: 'ABCDEFGHIJKLMN3',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '4',
        coinType: 'BTC4',
        info: 'BTC4',
        addr: 'ABCDEFGHIJKLMN4',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '5',
        coinType: 'ETH5',
        info: 'ETH5',
        addr: 'ABCDEFGHIJKLMN5',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '6',
        coinType: 'ETH6',
        info: 'ETH6',
        addr: 'ABCDEFGHIJKLMN6',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }
];
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.delAddr = (record) => {
            this.setState({
                delAddrModal: true,
                currentRecord: record
            });
        };
        this.state = {
            delAddrModal: false,
            addAddrModal: false,
            openGAModal: false,
            currentRecord: {},
            emailConfirmModal: false
        };
    }
    render() {
        const menu = (React.createElement(Menu, null,
            React.createElement(Menu.Item, null,
                React.createElement("a", null, "\u5168\u90E8")),
            React.createElement(Menu.Item, null,
                React.createElement("a", null, "\u5168\u90E8"))));
        let columns = [
            {
                title: '币种',
                dataIndex: 'coinType',
                key: 'coinType'
            }, {
                title: '备注',
                dataIndex: 'info',
                key: 'info'
            }, {
                title: '地址',
                dataIndex: 'addr',
                key: 'addr'
            }, {
                title: '标签',
                dataIndex: 'tag',
                key: 'tag'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (text, record) => (React.createElement("div", { className: "status" },
                    " ",
                    React.createElement("span", { className: "statusIcon statusPending" }),
                    React.createElement("div", null, record.status)))
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => (React.createElement("a", { onClick: this.delAddr.bind(this, record) }, "\u5220\u9664"))
            }
        ];
        return (React.createElement("section", { style: { background: "rgb(245,245,245)", paddingBottom: '160px', width: '100%' } },
            React.createElement(WrapHeaderCmp, null,
                React.createElement("div", null, "\u5730\u5740\u7BA1\u7406")),
            React.createElement(WrapperIndexCmp, null,
                React.createElement(Row, { className: "functionBar" },
                    React.createElement(Col, { span: 16 },
                        React.createElement(Select, { style: { width: "360px", marginRight: "40px" }, bordered: false, defaultValue: "\u5168\u90E8", className: "whiteListSelect" }, typeList.map((item, index) => (React.createElement(Option, { key: index, value: item.value }, item.name)))),
                        React.createElement(Button, { onClick: () => this.setState({ addAddrModal: true }), className: "whiteBtn", icon: React.createElement(PlusCircleFilled, { style: { color: "#00A0D2", background: "rgba(236,248,252,1)" } }) }, "\u6DFB\u52A0\u767D\u540D\u5355\u5730\u5740")),
                    React.createElement(Col, { span: 8 },
                        React.createElement("div", { className: "switchBox" },
                            React.createElement("div", null, "\u662F\u5426\u5F00\u542F\u767D\u540D\u5355 \u00A0"),
                            React.createElement("img", { src: whiteListIcon, alt: "" }),
                            React.createElement(Switch, { checkedChildren: 'ON', unCheckedChildren: 'OFF', defaultChecked: false, className: 'switch' })))),
                React.createElement(Row, null,
                    React.createElement(Table, { className: "orderCurrentTable", rowKey: "key", dataSource: dataSource, columns: columns, pagination: false, rowClassName: () => { return "orderCurrentTableRow"; } })),
                React.createElement(Row, null,
                    React.createElement(Pagination, { className: "whitePageBox", total: dataSource.length, showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} records`, pageSize: 5, defaultCurrent: 1 })),
                this.state.delAddrModal ? React.createElement(DelAddr, { _close: () => this.setState({ delAddrModal: false }), record: this.state.currentRecord }) : null,
                this.state.addAddrModal ? React.createElement(AddAddr, { _close: () => this.setState({ addAddrModal: false }), _openGAModal: () => this.setState({ addAddrModal: false, openGAModal: true }) }) : null,
                this.state.openGAModal ? React.createElement(GoogleCodeModal, { _close: () => this.setState({ openGAModal: false }) }) : null,
                this.state.emailConfirmModal ? React.createElement(EmailConfirmModal, { _close: () => this.setState({ openGAModal: false }) }) : null)));
    }
};
Index = __decorate([
    inject('userStore'),
    observer,
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map