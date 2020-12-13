import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
import SubMenu from '../../../../../index/components/menu';
const icon1 = require("@webExchangeImgs/account/transfer.png");
const icon2 = require("@webExchangeImgs/account/addAccount.png");

type AccountMgtprops = {
    history?: any
}
type AccountMgtState = {
    dataSource: Array<any>
}
export default class AccountMgt extends React.Component<AccountMgtprops, AccountMgtState> {
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
            <WrapperAccountMgtCmp>
                <SubMenu curSelected={1} {...this.props}/>
                <Content>
                    <Row className='assetWrapper'>
                        <Col span={10}>
                            <Row>总资产折算</Row>
                            <Row>
                                <Col className='amount'>90000.00</Col>
                                <Col className='unit'>USDT</Col>
                                <Col className='CNY'>￥0.000000</Col>
                            </Row>
                        </Col>
                        <Col>
                            <Button><img src={icon1} alt=""/>资金划转</Button>
                            <Button><img src={icon2} alt=""/>加挂账户</Button>
                        </Col>
                    </Row>
                </Content>
            </WrapperAccountMgtCmp>
        );
    }
}