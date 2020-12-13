import * as React from "react";
import { Input } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperAmountCmp } from './styled';

type AmountState = {
    currentPercent: string
};
type AmountProps = {
    [props: string]: any,
    instrumentStore?: any
};

@inject('instrumentStore')
@observer
export default class Amount extends React.Component<AmountProps, AmountState> {
    constructor(props: AmountProps) {
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
            {name: '25%', value: '0.25'},
            {name: '50%', value: '0.5'},
            {name: '75%', value: '0.75'},
            {name: '100%', value: '1'}
        ];
        const currentPercent = this.state.currentPercent;
        const { currentTargetCurrency } = this.props.instrumentStore;
        return (
            <WrapperAmountCmp>
                <div className="inputItem">
                    <p className="label">Amount</p>
                    <Input value={inputInfo.amount || ''} onChange={this.changeAmount.bind(this)} type="number" placeholder="0.00" suffix={currentTargetCurrency} />
                    <div className="percent">
                        {percentList.map((item: any, index: any) => {
                            return <a 
                                className={currentPercent == item.value ? 'active' : ''} 
                                key={index} 
                                onClick={() => {this.changePercent(item.value);}}
                            >{item.name}</a>
                        })}
                    </div>
                </div>
            </WrapperAmountCmp>
        );
    }
}