var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { Button, Input } from 'antd';
import GoogleCodeModal from '@webExchangeComponents/googleCodeModal';
import { WrappCreateApiCmp } from './styled';
let CreateApi = class CreateApi extends React.Component {
    constructor(props) {
        super(props);
        this._close = () => {
            const { changeStep } = this.props;
            this.setState({
                isShowGmodal: false
            });
            changeStep("2");
        };
        this.changeApiTag = (e) => {
            this.setState({
                apiTag: e.target.value
            });
        };
        this.createApiTag = () => {
            this.setState({
                isShowGmodal: true
            });
        };
        this.state = {
            apiTag: "",
            isShowGmodal: false
        };
    }
    render() {
        const { history } = this.props;
        const { apiTag, isShowGmodal } = this.state;
        return (React.createElement(WrappCreateApiCmp, null,
            React.createElement("div", { className: "apiTitle" }, "\u521B\u5EFAAPI"),
            React.createElement("section", { className: "content" },
                React.createElement("p", { className: "apiInfo" }, "\u521B\u5EFAAPI\u5BC6\u94A5\u53EF\u8BA9\u7B2C\u4E09\u65B9\u7F51\u7AD9\u6216\u5E94\u7528\u8BBF\u95EEHashkeyPro\u5E73\u53F0\u7684\u5E02\u573A\u6216\u8FDB\u884C\u5B9E\u65F6\u4EA4\u6613"),
                React.createElement("a", { className: "apiLink" }, "\u67E5\u770BAPI\u8D44\u6599 >>"),
                React.createElement(Input, { placeholder: "\u7ED9API\u5BC6\u94A5\u4E00\u4E2A\u597D\u8BB0\u7684\u6807\u7B7E", className: "apiInput", value: apiTag, onChange: this.changeApiTag.bind(this) }),
                React.createElement(Button, { className: "creatApiBtn", onClick: this.createApiTag.bind(this), disabled: apiTag.length == 0 }, "\u521B\u5EFA")),
            isShowGmodal ? React.createElement(GoogleCodeModal, { _close: this._close.bind(this) }) : ""));
    }
};
CreateApi = __decorate([
    inject('userStore'),
    observer
], CreateApi);
export default CreateApi;
//# sourceMappingURL=creatApi.js.map