import * as React from "react";
import { Row, Col, Input } from 'antd';
import Amount from './amount';
import { observer, inject } from 'mobx-react/index';
import { WrapperMarketCmp } from './styled';

type MarketProps = {
    [props: string]: any,
    instrumentStore?: any
};
type MarketState = {
    amount: number
};

@inject('instrumentStore')
@observer
export default class Market extends React.Component<MarketProps, MarketState> {
    constructor(props: MarketProps) {
        super(props);
        this.state = {
            amount: 0
        };
        this.changeAmount = this.changeAmount.bind(this);
    }

    changeAmount(val: any) {
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
        const {currentBasicCurrency} = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (
            <WrapperMarketCmp>
                <div className="inputItem">
                    <p className="label">Price</p>
                    <Input placeholder="Market best price" suffix={currentBasicCurrency} disabled />
                </div>
                <Amount {...params} />
            </WrapperMarketCmp>
        );
    }
}