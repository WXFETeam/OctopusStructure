import * as React from "react";
import { Row, Col, Select } from 'antd';
import { WrapperOrderAging } from './styled';
const { Option } = Select;

type OrderAgingProps = {
};

type OrderAgingState = {
    selectValue: string
};

export default class OrderAging extends React.Component<OrderAgingProps, OrderAgingState> {
    constructor(props: OrderAgingProps) {
        super(props);
        this.state = {
            selectValue: '0'
        };
    }

    changeOrderAging = (val) => {
        
    }

    render() {
        const orderList = [
            {text: '24 Hours Active', value: '0'},
            {text: '3*24 Hours Active', value: '1'},
            {text: 'Always Active', value: '2'}
        ];
        let { selectValue } = this.state;
        return (
            <WrapperOrderAging>
                <div className="title">Order aging</div>
                <div className="selectBox">
                    <Select 
                        dropdownClassName="orderAgingSelectDropdown"
                        defaultValue={selectValue} 
                        onChange={this.changeOrderAging}>
                        {orderList.map((item, index) => 
                            <Option key={index} value={item.value}>{item.text}</Option>
                        )}
                    </Select>
                </div>
            </WrapperOrderAging>
        );
    }
}