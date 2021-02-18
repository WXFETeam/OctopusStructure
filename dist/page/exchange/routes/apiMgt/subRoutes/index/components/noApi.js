var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import { WrappedNoApiCmp } from './styled';
const API = require("@webExchangeImgs/api/API.png");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    componentWillMount() {
    }
    render() {
        const { history } = this.props;
        const { count } = this.state;
        return (React.createElement(WrappedNoApiCmp, null,
            React.createElement("img", { src: API, alt: "" }),
            React.createElement("div", { className: "apiTitle" }, "API\u7BA1\u7406"),
            React.createElement("div", { className: "apiInfo" }, "\u521B\u5EFAAPI\u5BC6\u94A5\u53EF\u8BA9\u7B2C\u4E09\u65B9\u7F51\u7AD9\u6216\u5E94\u7528\u8BBF\u95EEHashkeyPro\u5E73\u53F0\u7684\u5E02\u573A\u6216\u8FDB\u884C\u5B9E\u65F6\u4EA4\u6613"),
            React.createElement("a", { className: "apiLink" }, "\u67E5\u770BAPI\u8D44\u6599 >>"),
            React.createElement(Button, { className: "creatApiBtn", onClick: () => history.push("/api/createApi") }, "\u7ACB\u5373\u521B\u5EFA")));
    }
};
Index = __decorate([
    inject('userStore', 'APIRecordStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=noApi.js.map