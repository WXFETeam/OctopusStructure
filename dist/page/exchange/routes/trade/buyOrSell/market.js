var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input } from 'antd';
import Amount from './amount';
import { observer, inject } from 'mobx-react/index';
import { WrapperMarketCmp } from './styled';
let Market = class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0
        };
        this.changeAmount = this.changeAmount.bind(this);
    }
    changeAmount(val) {
        this.setState({
            amount: val || 0
        }, () => {
            this.changeInput();
        });
    }
    changeInput() {
        this.props.changeInput({
            amount: this.state.amount,
            limitPrice: 0,
            stopPrice: 0
        });
    }
    render() {
        const inputInfo = this.props.inputInfo;
        const { currentBasicCurrency } = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (React.createElement(WrapperMarketCmp, null,
            React.createElement("div", { className: "inputItem" },
                React.createElement("p", { className: "label" }, "Price"),
                React.createElement(Input, { placeholder: "Market best price", suffix: currentBasicCurrency, disabled: true })),
            React.createElement(Amount, Object.assign({}, params))));
    }
};
Market = __decorate([
    inject('instrumentStore'),
    observer
], Market);
export default Market;
//# sourceMappingURL=market.js.map