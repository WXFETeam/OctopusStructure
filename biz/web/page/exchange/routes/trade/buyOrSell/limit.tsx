import * as React from "react";
import { Row, Col, InputNumber, Input } from 'antd';
import Amount from './amount';
import OrderAging from './orderAging';
import { observer, inject } from 'mobx-react/index';
import { WrapperLimitCmp } from './styled';

type LimitState = {
    priceType: string,
    amount: number,
    limitPrice: number
};
type LimitProps = {
    [props: string]: any,
    instrumentStore?: any
};

@inject('instrumentStore')
@observer
export default class Limit extends React.Component<LimitProps, LimitState> {
    constructor(props: LimitProps) {
        super(props);
        this.state = {
            priceType: '0', // '0'->market price, '1'->bid1, '2'->ask1
            amount: 0,
            limitPrice: 0
        };
        this.changeAmount = this.changeAmount.bind(this);
        this.changeLimitPrice = this.changeLimitPrice.bind(this);
    }

    changeType(val: any) {
        this.setState({
            priceType: val
        });
    }

    changeAmount(val: any) {
        this.setState({
            amount: val || 0
        }, () => {
            this.changeInput();
        });
    }

    changeLimitPrice(e: any) {
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
        const {currentBasicCurrency} = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (
            <WrapperLimitCmp>
                <div className="inputItem">
                    <div className="limitPriceValue">$0.00</div>
                    <Input value={inputInfo.limitPrice || ''} onChange={this.changeLimitPrice} type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                </div>
                <Amount {...params} />
                <div className="inputItem">
                    <p className="label">Total</p>
                    <Input type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                </div>
                <OrderAging />
            </WrapperLimitCmp>
        );
    }
}