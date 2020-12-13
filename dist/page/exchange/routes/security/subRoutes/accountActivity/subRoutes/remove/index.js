var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button, Card, Checkbox } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperRemoveCmp } from './styled';
import ConfirmModal from './modal/confirmModal';
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = () => {
            this.setState({ confirmModal: true });
        };
        this.state = {
            confirmModal: false,
        };
    }
    render() {
        return (React.createElement(WrapperRemoveCmp, null,
            React.createElement(Row, { justify: "center", className: "title" },
                React.createElement(Col, null, "\u89E3\u7981\u8D26\u6237")),
            React.createElement(Row, { justify: "center", className: "content" },
                React.createElement(Col, null,
                    React.createElement(Card, null,
                        React.createElement(Checkbox.Group, { className: "check", style: { width: '100%' } },
                            React.createElement(Row, { className: "tipsA" },
                                React.createElement(Checkbox, { value: "A" }, "\u89E3\u7981\u5E10\u6237\u540E\u4F1A\u6062\u590D\u60A8\u7684\u4EA4\u6613\u548C\u767B\u5F55\u3002\u5EFA\u8BAE\u60A8\u5B9A\u671F\u66F4\u6362\u5BC6\u7801\u5E76\u9632\u6B62\u8C37\u6B4C\u53CA\u624B\u673A\u9A8C\u8BC1\u6CC4\u9732\u3002")),
                            React.createElement(Row, { className: "tipsB" },
                                React.createElement(Checkbox, { value: "B" }, "\u89E3\u7981\u5E10\u6237\u9700\u4EBA\u5DE5\u5BA1\u6838\uFF0C\u5C06\u82B1\u8D397-10\u4E2A\u5DE5\u4F5C\u65E5\uFF0C\u5B8C\u6210\u89E3\u7981\u540E48\u5C0F\u65F6\u5185\u7981\u6B62\u63D0\u73B0\u3002")),
                            React.createElement(Row, { justify: "center" },
                                React.createElement(Col, null,
                                    React.createElement(Button, { className: "confirmBlueBtn", onClick: this.handleSubmit }, " \u89E3\u7981\u8D26\u6237")))))),
                this.state.confirmModal == true ? React.createElement(ConfirmModal, { _close: () => this.setState({ confirmModal: false }) }) : "")));
    }
};
Index = __decorate([
    inject('userStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=index.js.map