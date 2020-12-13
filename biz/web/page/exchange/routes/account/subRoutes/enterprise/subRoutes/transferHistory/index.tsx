import * as React from "react";
import { WrapperTransferHistoryCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
import SubMenu from '../../../index/components/menu';

// const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");

type TransferHistoryprops = {
    history?: any
}
type TransferHistoryState = {
    dataSource: Array<any>
}
export default class TransferHistory extends React.Component<TransferHistoryprops, TransferHistoryState> {
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
            <WrapperTransferHistoryCmp>
                <SubMenu curSelected={3} {...this.props}/>
                <Content>
                    TradeHistory page!
                </Content>
            </WrapperTransferHistoryCmp>
        );
    }
}