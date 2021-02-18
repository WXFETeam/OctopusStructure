var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedAssetViewCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
let AssetView = class AssetView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { userAccount } = this.props.assetStore;
        return (React.createElement(WrappedAssetViewCmp, null,
            React.createElement("div", { className: "assetView" },
                React.createElement(Col, { className: "assetViewContent" },
                    React.createElement(Row, null, "\u603B\u8D44\u4EA7\u6298\u7B97"),
                    React.createElement(Row, { className: "assetViewAmountDetail" },
                        React.createElement("span", null, userAccount && userAccount.amount001),
                        React.createElement("span", null, userAccount && userAccount.currency),
                        React.createElement("span", null,
                            "\uFFE5",
                            userAccount && userAccount.amount002))),
                userAccount && userAccount.subAccount ? (React.createElement(Col, { span: 10, className: "assetViewContent subAccount" },
                    React.createElement(Row, null, "\u6BCD\u5B50\u8D26\u6237\u603B\u8D44\u4EA7\u6298\u7B97"),
                    React.createElement(Row, { className: "assetViewAmountDetail" },
                        React.createElement("span", null, userAccount && userAccount.subAccount && userAccount.subAccount.amount001),
                        React.createElement("span", null, userAccount && userAccount.subAccount && userAccount.subAccount.currency),
                        React.createElement("span", null,
                            "\uFFE5",
                            userAccount && userAccount.subAccount && userAccount.subAccount.amount002)))) : '')));
    }
};
AssetView = __decorate([
    inject('assetStore'),
    observer
], AssetView);
export default AssetView;
//# sourceMappingURL=assetView.js.map