var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Button, Checkbox } from 'antd';
import { WrapperChooseVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import VerifyModal from '../../components/verifyModal';
let CloseVerify = class CloseVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(WrapperChooseVerifyCmp, null,
            React.createElement(VerifyModal, null),
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 96 } },
                React.createElement("div", { className: "frame" },
                    React.createElement("div", { className: "title" }, "\u9009\u53D6\u4E0D\u53EF\u7528\u7684\u4E8C\u6B21\u9A8C\u8BC1\u65B9\u5F0F"),
                    React.createElement("div", { className: "frameItem" },
                        React.createElement(Checkbox.Group, null,
                            React.createElement(Row, null,
                                React.createElement(Checkbox, { value: "0" },
                                    "\u624B\u673A\u53F7\u7801",
                                    common.formatPhone('13612345414'),
                                    "\u4E0D\u53EF\u7528\uFF0C\u7533\u8BF7\u5173\u95ED\u624B\u673A\u53F7\u7801")),
                            React.createElement(Row, { className: "secondR" },
                                React.createElement(Checkbox, { value: "1" }, "\u8C37\u6B4C\u9A8C\u8BC1\u4E0D\u53EF\u7528\uFF0C\u7533\u8BF7\u5173\u95ED\u8C37\u6B4C\u9A8C\u8BC1"))),
                        React.createElement("p", { className: "content" },
                            "\u7533\u8BF7\u5C06\u4E8E1\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5904\u7406\u5B8C\u6BD5\uFF0C\u8BF7\u4FDD\u6301\u624B\u673A\u7545\u901A\u4FBF\u4E8E\u5BA2\u670D\u53CA\u65F6\u4E0E\u60A8\u8054\u7CFB",
                            React.createElement("br", null),
                            "\u5173\u95ED\u9A8C\u8BC1\u540E\u53EF\u5728\u8D26\u6237\u4E2D\u5FC3-\u8D26\u6237\u5B89\u5168\u91CD\u65B0\u5F00\u542F"),
                        React.createElement(Button, { className: "confirmBlueBtn" }, "\u5173\u95ED\u4E8C\u6B21\u9A8C\u8BC1"))))));
    }
};
CloseVerify = __decorate([
    inject('userStore'),
    observer
], CloseVerify);
export default CloseVerify;
//# sourceMappingURL=index.js.map