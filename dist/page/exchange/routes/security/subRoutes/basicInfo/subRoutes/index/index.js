var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperIndexCmp } from './styled';
import ModifyModal from './modals/modify';
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = (type) => {
            console.log(type);
            switch (type) {
                case 'account':
                    this.setState({ showModal: true });
                    break;
                case 'email':
                    this.props.history.push('/security/basicInfo/email');
                    break;
            }
        };
        this.state = {
            showModal: false,
        };
    }
    render() {
        return (React.createElement(WrapperIndexCmp, null,
            React.createElement(Row, { justify: "center", style: { height: '100%', paddingTop: 100 } },
                React.createElement("div", { className: "title" }, "\u57FA\u7840\u8D44\u6599"),
                React.createElement("div", { className: 'account' },
                    React.createElement(Row, { className: 'item' },
                        React.createElement(Col, { className: 'firstCol' }, "\u8D26\u6237\u540D"),
                        React.createElement(Col, { className: 'secondCol' }, "12****@qq.com"),
                        React.createElement(Col, null,
                            React.createElement(Button, { className: 'btn', onClick: this.handleClick.bind(this, 'account') }, "\u4FEE\u6539"))),
                    React.createElement(Row, { className: 'item' },
                        React.createElement(Col, { className: 'firstCol' }, "\u8D26\u6237\u5B9E\u9645\u63A7\u5236\u4EBA"),
                        React.createElement(Col, { className: 'secondCol' }, "\u5434\u9707\u6625")),
                    React.createElement(Row, { className: 'item' },
                        React.createElement(Col, { className: 'firstCol' }, "\u6211\u7684\u8BC1\u4EF6"),
                        React.createElement(Col, { className: 'secondCol' }, "\u8EAB\u4EFD\u8BC1 \uFF5C 29837119860206"))),
                React.createElement("div", { className: 'email' },
                    React.createElement(Row, { className: 'item sp' },
                        React.createElement(Col, { className: 'firstCol' }, "\u90AE\u7BB1"),
                        React.createElement(Col, { className: 'secondCol' }, "12****@qq.com"),
                        React.createElement(Col, null,
                            React.createElement(Button, { className: 'btn', onClick: this.handleClick.bind(this, 'email') }, "\u4FEE\u6539"))),
                    React.createElement(Row, { className: 'item sp' },
                        React.createElement(Col, { className: 'firstCol' }, "\u7528\u6237\u53F7"),
                        React.createElement(Col, { className: 'secondCol' }, "123235357645757")),
                    React.createElement(Row, { className: 'item sp' },
                        React.createElement(Col, { className: 'firstCol' }, "\u5BA2\u6237\u53F7"),
                        React.createElement(Col, { className: 'secondCol' }, "457645648734452")),
                    React.createElement(Row, { className: 'item sp' },
                        React.createElement(Col, { className: 'firstCol' }, "\u8D26\u6237\u540D"),
                        React.createElement(Col, { className: 'secondCol' }, "347646845834522")))),
            this.state.showModal && React.createElement(ModifyModal, { _close: () => this.setState({ showModal: false }) })));
    }
};
Index = __decorate([
    renderBreadcrumbs
], Index);
export default Index;
//# sourceMappingURL=index.js.map