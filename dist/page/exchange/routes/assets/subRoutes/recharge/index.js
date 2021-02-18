import * as React from "react";
import { Row, Col, Select, Radio, Button, Form, Tabs } from 'antd';
import Header from '../../components/header';
import { WrappedVerticalFormCmp } from 'webExchangeGlobalConf';
import { WrappedRechargeCmp } from './styled';
import attentionList from './attentionList';
const copyIcon = require("@webExchangeImgs/assets/copy.png");
const listIcon = require("@webExchangeImgs/assets/list.png");
import { DownloadOutlined } from "@ant-design/icons";
import Qrcode from 'qrcode.react';
const { Option } = Select;
const { Item } = Form;
const { Button: RadioButton, Group } = Radio;
const { TabPane } = Tabs;
// @inject('rechargeStore')
export default class Recharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyList: ['BTC', 'USDT', 'ETH'],
            selectedValue: 'BTC',
            QRCode: 'asdfghjklpoiuy123456789',
            QRCodeImg: null,
            radioValue: '0'
        };
    }
    selectedChange(e) {
        console.log('change');
    }
    render() {
        const { selectedValue, currencyList, QRCode, QRCodeImg, radioValue } = this.state;
        return (React.createElement(WrappedRechargeCmp, null,
            React.createElement(Header, { title: "\u5145\u503C" }),
            React.createElement(WrappedVerticalFormCmp, null,
                React.createElement(Tabs, { type: "card", className: "tab-wrapper", tabBarGutter: 24 },
                    React.createElement(TabPane, { tab: "\u6570\u5B57\u8D27\u5E01\u5145\u503C", key: "1" },
                        React.createElement(Form, { layout: 'vertical' },
                            React.createElement(Row, { className: "content" },
                                React.createElement(Col, { span: 12, className: 'leftPart' },
                                    React.createElement(Item, { label: "\u5E01\u79CD" },
                                        React.createElement(Select, { defaultValue: selectedValue, onChange: (e) => this.selectedChange(e), bordered: false }, currencyList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                                    React.createElement(Row, { className: "attention", gutter: [12, 0] },
                                        React.createElement(Col, { span: 24, className: "attentionTitle" }, "\u6E29\u99A8\u63D0\u793A"),
                                        attentionList.map(c => (React.createElement(Col, { span: 24, className: "attentionCol" },
                                            React.createElement("span", { className: "attentiolCircle" }),
                                            React.createElement("div", null, c)))))),
                                React.createElement(Col, { span: 12, className: 'rightPart' },
                                    React.createElement("div", { className: "right-title" }, "\u9009\u62E9\u4E3B\u7F51"),
                                    React.createElement(Tabs, { type: "card", className: "tab-right-wrapper", tabBarGutter: 20 },
                                        React.createElement(TabPane, { tab: "ERC20", key: "1" },
                                            React.createElement("div", { className: "tabPan-content" },
                                                React.createElement("div", { className: "right-title" }, "BTC\u5730\u5740\uFF1A"),
                                                React.createElement("div", { className: "BTC-address" },
                                                    React.createElement("div", { className: "BTC-con" },
                                                        React.createElement("span", { className: "address" }, "467896748"),
                                                        React.createElement("div", null,
                                                            React.createElement(Button, { style: { marginRight: "20px" }, icon: React.createElement("img", { style: { marginRight: "20px" }, src: copyIcon }) }, "\u590D\u5236\u5730\u5740"),
                                                            React.createElement(Button, { icon: React.createElement(DownloadOutlined, null) }, "\u4E0B\u8F7D\u4E8C\u7EF4\u7801"))),
                                                    React.createElement("div", { className: "qrcode-box" },
                                                        React.createElement(Qrcode, { value: "", size: 96 }))),
                                                React.createElement("div", { className: "lookRecord" },
                                                    React.createElement("img", { src: listIcon }),
                                                    " ",
                                                    React.createElement("a", { className: "lookHref" }, "\u67E5\u770B\u5145\u5E01\u8BB0\u5F55\u8DDF\u8E2A\u72B6\u6001 >>")))),
                                        React.createElement(TabPane, { tab: "Omni", key: "2" }, "779700")))))),
                    React.createElement(TabPane, { tab: "\u6CD5\u5E01\u5145\u503C", key: "2" })))));
    }
}
//# sourceMappingURL=index.js.map