import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
import { Row, Col, Button } from 'antd';
import SubMenu from '../../../../../index/components/menu';
const icon1 = require("@webExchangeImgs/account/transfer.png");
const icon2 = require("@webExchangeImgs/account/addAccount.png");
export default class AccountMgt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(WrapperAccountMgtCmp, null,
            React.createElement(SubMenu, Object.assign({ curSelected: 1 }, this.props)),
            React.createElement(Content, null,
                React.createElement(Row, { className: 'assetWrapper' },
                    React.createElement(Col, { span: 10 },
                        React.createElement(Row, null, "\u603B\u8D44\u4EA7\u6298\u7B97"),
                        React.createElement(Row, null,
                            React.createElement(Col, { className: 'amount' }, "90000.00"),
                            React.createElement(Col, { className: 'unit' }, "USDT"),
                            React.createElement(Col, { className: 'CNY' }, "\uFFE50.000000"))),
                    React.createElement(Col, null,
                        React.createElement(Button, null,
                            React.createElement("img", { src: icon1, alt: "" }),
                            "\u8D44\u91D1\u5212\u8F6C"),
                        React.createElement(Button, null,
                            React.createElement("img", { src: icon2, alt: "" }),
                            "\u52A0\u6302\u8D26\u6237"))))));
    }
}
//# sourceMappingURL=index.js.map