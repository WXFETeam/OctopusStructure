import * as React from "react";
import { Row, Col, Input } from 'antd';
import Amount from './amount';
import { observer, inject } from 'mobx-react/index';
import OrderAging from './orderAging';
import { WrapperStopCmp } from './styled';

type StopState = {
    amount: number,
    stopPrice: number,
    stopLimitPrice: number
};
type StopProps = {
    [props: string]: any,
    instrumentStore?: any,
    keyName: string
};

@inject('instrumentStore')
@observer
export default class Stop extends React.Component<StopProps, StopState> {
    constructor(props: StopProps) {
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

    changeAmount(val: any) {
        this.setState({
            amount: val || 0
        }, () => {
            this.changeInput();
        });
    }

    changeStopPrice(e: any) {
        this.setState({
            stopPrice: e.target.value || 0
        }, () => {
            this.changeInput();
        });
    }

    changeStopLimitPrice(e: any) {
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
        const {keyName, inputInfo} = this.props;
        const {currentBasicCurrency} = this.props.instrumentStore;
        const params = {
            inputInfo: inputInfo,
            changeAmount: this.changeAmount
        };
        return (
            <WrapperStopCmp>
                <div className="inputItem">
                    <p className="label">Stop</p>
                    <Input onChange={this.changeStopPrice} type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                </div>
                {keyName == 'Stop-limit' ? 
                    <div className="inputItem">
                        <p className="label">Limit</p>
                        <Input onChange={this.changeStopLimitPrice} type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                    </div> : ''
                }
                <Amount {...params} />
                <div className="inputItem">
                    <p className="label">Total</p>
                    <Input type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                </div>
                {keyName == 'Iceberg Order' ? 
                    <div className="inputItem">
                        <p className="label">Show Amount</p>
                        <Input type="number" placeholder="0.00" suffix={currentBasicCurrency} />
                    </div> : ''
                }
                <OrderAging />
            </WrapperStopCmp>
        );
    }
}