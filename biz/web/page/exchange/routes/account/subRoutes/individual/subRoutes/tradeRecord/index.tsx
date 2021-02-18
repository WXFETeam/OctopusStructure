import * as React from "react";
import { WrapperTradeRecordCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
import SubMenu from '../../../index/components/menu';

// const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");


type TradeRecordprops = {
    history?: any
}
type TradeRecordState = {
    dataSource: Array<any>
}
export default class TradeRecord extends React.Component<TradeRecordprops, TradeRecordState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <WrapperTradeRecordCmp>
                <SubMenu curSelected={2} {...this.props} />
                <Content>
                    AccountRecord page!
                </Content>
            </WrapperTradeRecordCmp>
        );
    }
}