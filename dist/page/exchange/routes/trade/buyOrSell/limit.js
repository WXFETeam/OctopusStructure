var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input } from 'antd';
import Amount from './amount';
import OrderAging from './orderAging';
import { observer, inject } from 'mobx-react/index';
import { WrapperLimitCmp } from './styled';
let Limit = class Limit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceType: '0',
            amount: 0,
            limitPrice: 0
        };
        this.changeAmount = this.changeAmount.bind(this);
        this.changeLimitPrice = this.changeLimitPrice.bind(this);
    }
    changeType(val) {
        this.setState({
            priceType: val
        });
    }
    changeAmount(val) {
        this.setState({
            amount: val || 0
        }, () => {
            this.changeInput();
        });
    }
    changeLimitPrice(e) {
        this.setState({
            limitPrice: e.target.value || 0
        }, () => {
            this.changeInput();
        });
    }
    changeInput() {
        this.props.changeInput({
            amount: this.state.amount,
            limitPrice: this.state.limitPrice,
            stopPrice: 0
        });
    }
    render() {
        const priceType = this.state.priceType;
        const inputInfo = this.props.inputInfo;
        const { currentBasicCurrency } = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (React.createElement(WrapperLimitCmp, null,
            React.createElement("div", { className: "inputItem" },
                React.createElement("div", { className: "limitPriceValue" }, "$0.00"),
                React.createElement(Input, { value: inputInfo.limitPrice || '', onChange: this.changeLimitPrice, type: "number", placeholder: "0.00", suffix: currentBasicCurrency })),
            React.createElement(Amount, Object.assign({}, params)),
            React.createElement("div", { className: "inputItem" },
                React.createElement("p", { className: "label" }, "Total"),
                React.createElement(Input, { type: "number", placeholder: "0.00", suffix: currentBasicCurrency })),
            React.createElement(OrderAging, null)));
    }
};
Limit = __decorate([
    inject('instrumentStore'),
    observer
], Limit);
export default Limit;
//# sourceMappingURL=limit.js.map