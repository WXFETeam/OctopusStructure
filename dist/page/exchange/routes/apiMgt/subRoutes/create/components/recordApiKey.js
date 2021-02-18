var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { Button } from 'antd';
// import GoogleCodeModal from '@webExchangeComponents/googleCodeModal'
import { WrappRecordApiKeyCmp } from './styled';
import { CopyOutlined } from '@ant-design/icons';
import Qrcode from 'qrcode.react';
let RecordApiKey = class RecordApiKey extends React.Component {
    constructor(props) {
        super(props);
        this._close = () => {
            this.setState({
                isShowGmodal: false
            });
        };
        this.changeApiTag = (e) => {
            this.setState({
                apiTag: e.target.value
            });
        };
        this.RecordApiKeyTag = () => {
            this.setState({
                isShowGmodal: true
            });
        };
        this.copyToClipboard = () => {
            document.execCommand("copy");
        };
        this.state = {
            apiTag: "",
            isShowGmodal: false,
            qrcode: ""
        };
    }
    render() {
        const { history } = this.props;
        const { apiTag, qrcode } = this.state;
        return (React.createElement(WrappRecordApiKeyCmp, null,
            React.createElement("div", { className: "apiTitle" }, "\u8BB0\u5F55API\u5BC6\u94A5"),
            React.createElement("section", { className: "content" },
                React.createElement("p", { className: "apiInfo" }, "\u57FA\u91D11\u53F7\u4E13\u7528API"),
                React.createElement("div", { className: "barCode" },
                    React.createElement(Qrcode, { value: this.state.qrcode, size: 128 })),
                React.createElement("div", { className: "recordInfoBox" },
                    React.createElement("div", { className: "KeyTitle" }, "API\u5BC6\u94A5"),
                    React.createElement("div", { className: "keyContent" }, "sdafqafqeey2iey12iye12ieg12iog2f"),
                    React.createElement(Button, { icon: React.createElement(CopyOutlined, null), onClick: this.copyToClipboard.bind(this) }, "\u590D\u5236\u5BC6\u94A5")),
                React.createElement(Button, { className: "creatApiBtn", onClick: this.RecordApiKeyTag.bind(this), disabled: apiTag.length == 0 }, "\u6211\u5DF2\u59A5\u5584\u4FDD\u5B58\u5BC6\u94A5"),
                React.createElement("a", { href: "", className: "apiLink" }, "\u7EE7\u7EED\u521B\u5EFAAPI"))));
    }
};
RecordApiKey = __decorate([
    inject('userStore'),
    observer
], RecordApiKey);
export default RecordApiKey;
//# sourceMappingURL=recordApiKey.js.map