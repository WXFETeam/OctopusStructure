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
import OrderAging from './orderAging';
import { WrapperStopCmp } from './styled';
let Stop = class Stop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            stopPrice: 0,
            stopLimitPrice: 0
        };
        this.changeAmount = this.changeAmount.bind(this);
        this.changeStopPrice = this.changeStopPrice.bind(this);
        this.changeStopLimitPrice = this.changeStopLimitPrice.bind(this);
    }
    changeAmount(val) {
        this.setState({
            amount: val || 0
        }, () => {
            this.changeInput();
        });
    }
    changeStopPrice(e) {
        this.setState({
            stopPrice: e.target.value || 0
        }, () => {
            this.changeInput();
        });
    }
    changeStopLimitPrice(e) {
        this.setState({
            stopLimitPrice: e.target.value || 0
        }, () => {
            this.changeInput();
        });
    }
    changeInput() {
        this.props.changeInput({
            amount: this.state.amount,
            limitPrice: 0,
            stopPrice: this.state.stopPrice,
            stopLimitPrice: this.state.stopLimitPrice
        });
    }
    render() {
        const { keyName, inputInfo } = this.props;
        const { currentBasicCurrency } = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (React.createElement(WrapperStopCmp, null,
            React.createElement("div", { className: "inputItem" },
                React.createElement("p", { className: "label" }, "Stop"),
                React.createElement(Input, { onChange: this.changeStopPrice, type: "number", placeholder: "0.00", suffix: currentBasicCurrency })),
            keyName == 'Stop-limit' ?
                React.createElement("div", { className: "inputItem" },
                    React.createElement("p", { className: "label" }, "Limit"),
                    React.createElement(Input, { onChange: this.changeStopLimitPrice, type: "number", placeholder: "0.00", suffix: currentBasicCurrency })) : '',
            React.createElement(Amount, Object.assign({}, params)),
            React.createElement("div", { className: "inputItem" },
                React.createElement("p", { className: "label" }, "Total"),
                React.createElement(Input, { type: "number", placeholder: "0.00", suffix: currentBasicCurrency })),
            keyName == 'Iceberg Order' ?
                React.createElement("div", { className: "inputItem" },
                    React.createElement("p", { className: "label" }, "Show Amount"),
                    React.createElement(Input, { type: "number", placeholder: "0.00", suffix: currentBasicCurrency })) : '',
            React.createElement(OrderAging, null)));
    }
};
Stop = __decorate([
    inject('instrumentStore'),
    observer
], Stop);
export default Stop;
//# sourceMappingURL=stop.js.map