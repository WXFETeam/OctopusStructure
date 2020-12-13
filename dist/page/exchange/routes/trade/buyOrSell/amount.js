var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { Input } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperAmountCmp } from './styled';
let Amount = class Amount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPercent: ''
        };
    }
    changePercent(val) {
        this.setState({
            currentPercent: val
        });
    }
    changeAmount(e) {
        this.props.changeAmount(e.target.value);
    }
    render() {
        const inputInfo = this.props.inputInfo;
        const percentList = [
            { name: '25%', value: '0.25' },
            { name: '50%', value: '0.5' },
            { name: '75%', value: '0.75' },
            { name: '100%', value: '1' }
        ];
        const currentPercent = this.state.currentPercent;
        const { currentTargetCurrency } = this.props.instrumentStore;
        return (React.createElement(WrapperAmountCmp, null,
            React.createElement("div", { className: "inputItem" },
                React.createElement("p", { className: "label" }, "Amount"),
                React.createElement(Input, { value: inputInfo.amount || '', onChange: this.changeAmount.bind(this), type: "number", placeholder: "0.00", suffix: currentTargetCurrency }),
                React.createElement("div", { className: "percent" }, percentList.map((item, index) => {
                    return React.createElement("a", { className: currentPercent == item.value ? 'active' : '', key: index, onClick: () => { this.changePercent(item.value); } }, item.name);
                })))));
    }
};
Amount = __decorate([
    inject('instrumentStore'),
    observer
], Amount);
export default Amount;
//# sourceMappingURL=amount.js.map