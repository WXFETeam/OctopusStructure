import * as React from "react";
import { Select, Radio, Input, Button, Form, Row, Col, Tabs } from 'antd';
import Header from '../../components/header';
import { WrappedVerticalFormCmp } from 'webExchangeGlobalConf';
import { WrappedWithdrawCmp } from './styled';
const { Option } = Select;
const { Item } = Form;
const { Button: RadioButton, Group } = Radio;
const { TabPane } = Tabs;
export default class Assets extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = () => {
            console.log('caneg');
        };
        this.state = {
            currencyList: ['BTC', 'USDT', 'ETH'],
            selectedValue: 'BTC',
            radioValue: '0'
        };
    }
    selectedChange(e) {
        console.log(e, '111');
    }
    render() {
        const { selectedValue, currencyList, radioValue } = this.state;
        return (React.createElement(WrappedWithdrawCmp, null,
            React.createElement(Header, { title: "\u63D0\u73B0" }),
            React.createElement(WrappedVerticalFormCmp, null,
                React.createElement(Tabs, { type: "card", className: "tab-wrapper", tabBarGutter: 24 },
                    React.createElement(TabPane, { tab: "\u6570\u5B57\u8D27\u5E01\u5145\u503C", key: "1" },
                        React.createElement(Form, { layout: 'vertical' },
                            React.createElement(Row, { className: 'content' },
                                React.createElement(Col, { span: 12, className: 'leftPart' },
                                    React.createElement(Item, { label: "\u5E01\u79CD" },
                                        React.createElement(Select, { defaultValue: selectedValue, onChange: (e) => this.selectedChange(e), bordered: false }, currencyList.map((type, index) => React.createElement(Option, { key: index, value: type },
                                            React.createElement("i", null,
                                                React.createElement("img", { src: require(`@webExchangeImgs/assets/${type}.png`), alt: "" })),
                                            React.createElement("span", null, type))))),
                                    React.createElement(Row, { className: 'assetInfo' },
                                        React.createElement(Col, { span: 6 }, "\u603B\u8D44\u4EA7"),
                                        React.createElement(Col, null, "0.0000000000 BTC")),
                                    React.createElement(Row, { className: 'assetInfo' },
                                        React.createElement(Col, { span: 6 }, "\u4E0B\u5355\u51BB\u7ED3"),
                                        React.createElement(Col, null, "0.0000000000 BTC")),
                                    React.createElement(Row, { className: 'assetInfo' },
                                        React.createElement(Col, { span: 6 }, "\u53EF\u7528\u8D44\u4EA7"),
                                        React.createElement(Col, null, "0.0000000000 BTC")),
                                    React.createElement(Row, { style: { marginTop: 15 } }, "\u8BF7\u52FF\u76F4\u63A5\u4F53\u73B0\u81F3\u4F17\u7B79\u6216ICO\u5730\u5740\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6536\u5230\u4F17\u7B79\u6216ICO\u53D1\u653E\u7684\u4EE3\u5E01\u3002")),
                                React.createElement(Col, { span: 12, className: 'rightPart' },
                                    React.createElement("div", { className: "right-title" }, "\u9009\u62E9\u4E3B\u7F51"),
                                    React.createElement(Tabs, { type: "card", className: "tab-right-wrapper", tabBarGutter: 20 },
                                        React.createElement(TabPane, { tab: "ERC20", key: "1" },
                                            React.createElement(Item, { className: 'inputWrapper bold' },
                                                React.createElement(Input, { defaultValue: '\u60A8\u672A\u6DFB\u52A0\u767D\u540D\u5355\u5730\u5740', suffix: React.createElement("a", null, "\u5730\u5740\u7BA1\u7406>>") })),
                                            React.createElement(Item, { className: 'inputWrapper' },
                                                React.createElement(Input, { placeholder: '\u6570\u91CF', suffix: React.createElement("div", { className: 'suffix' },
                                                        React.createElement("a", null, "\u6700\u5927"),
                                                        "|",
                                                        React.createElement("span", null, "BTC")) })),
                                            React.createElement(Row, { className: 'tip', style: { justifyContent: 'space-between' } },
                                                React.createElement(Col, null,
                                                    "\u6700\u5C0F\u63D0\u73B0\u6570\u91CF ",
                                                    React.createElement("span", { className: 'amount' }, "0.001 BTC")),
                                                React.createElement(Col, null,
                                                    "\u53EF\u7528\u8D44\u4EA7 ",
                                                    React.createElement("span", { className: 'amount' }, "0.001 BTC"))),
                                            React.createElement(Row, { className: 'tip' },
                                                React.createElement(Col, { className: 'amount' }, "\u624B\u7EED\u8D39\uFF1A 0.0004 BTC")),
                                            React.createElement(Row, { className: 'tip' },
                                                React.createElement(Col, { className: 'amount' }, "\u5B9E\u9645\u5230\u5E10\uFF1A 0.0004 BTC"))),
                                        React.createElement(TabPane, { tab: "Omni", key: "2" }, "Omni")),
                                    React.createElement(Button, { className: 'btn' }, "\u63D0\u73B0"))))),
                    React.createElement(TabPane, { tab: "\u6CD5\u5E01\u5145\u503C", key: "2" }, "\u6CD5\u5E01\u5145\u503C")))));
    }
}
//# sourceMappingURL=index.js.map