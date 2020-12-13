var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Row, Input, Form, Button, Modal, Tabs, Select } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { TabPane } = Tabs;
const { Option } = Select;
const currencyList = [{
        name: "ETH",
        value: "ETH"
    }, {
        name: "BTC",
        value: "BTC"
    }];
let AddAddr = class AddAddr extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this._onClose = () => {
            this.props._close && this.props._close();
        };
        this.callback = () => {
        };
        this._onSubmit = () => {
            this.props._openGAModal && this.props._openGAModal();
        };
        this.changeCurrency = (currency) => {
        };
        this.state = {};
    }
    render() {
        // const menu = (
        //     <Menu>
        //         <Menu.Item>
        //             <a>BTC</a>
        //         </Menu.Item>
        //         <Menu.Item>
        //             <a>ETH</a>
        //         </Menu.Item>
        //     </Menu>
        // );
        return (React.createElement(Modal, { className: 'addAddrModal', visible: true, centered: true, maskClosable: true, onCancel: this._onClose, footer: false, width: 480 },
            React.createElement(WrapperModalCmp, null,
                React.createElement(Form, { style: { width: "100%" }, ref: (e) => this.formRef = e, onFinish: this._onSubmit },
                    React.createElement(Form.Item, { name: "currencyList" },
                        React.createElement(Select, { bordered: false, className: "SelectStyle", defaultValue: "\u5E01\u79CD", onChange: this.changeCurrency.bind(this) }, currencyList.map((item, index) => (React.createElement(Option, { key: index, value: item.name }, item.value))))),
                    React.createElement(Tabs, { defaultActiveKey: "1", animated: false, onChange: e => this.callback },
                        React.createElement(TabPane, { tab: "ERC20", key: "1" },
                            React.createElement(Form.Item, { name: "note" },
                                React.createElement(Input, { className: "tabinput", placeholder: "\u5907\u6CE8" })),
                            React.createElement(Form.Item, { name: "address" },
                                React.createElement(Input, { className: "tabinput", placeholder: "\u5730\u5740" }))),
                        React.createElement(TabPane, { tab: "Omni", key: "2" },
                            React.createElement(Form.Item, { name: "note2" },
                                React.createElement(Input, { className: "tabinput", placeholder: "\u5907\u6CE8" })),
                            React.createElement(Form.Item, { name: "address2" },
                                React.createElement(Input, { className: "tabinput", placeholder: "\u5730\u5740" })))),
                    React.createElement(Form.Item, null,
                        React.createElement(Button, { className: "submitBtn", htmlType: "submit" }, "\u63D0\u4EA4"))),
                React.createElement(Row, null))));
    }
};
AddAddr = __decorate([
    inject('userStore'),
    observer
], AddAddr);
export default AddAddr;
//# sourceMappingURL=addAddr.js.map