import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
import SubMenu from '../../../../../index/components/menu';
// const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");

type AccountMgtprops = {
    history?: any
}
type AccountMgtState = {
    dataSource: Array<any>,
}
export default class AccountMgt extends React.Component<AccountMgtprops, AccountMgtState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: [],
        }
    }

    componentDidMount(){
    
    }

    render() {
        return (
            <WrapperAccountMgtCmp>
                <SubMenu curSelected={1} {...this.props}/>
                <Content>
                    AccountMgt page!
                </Content>
            </WrapperAccountMgtCmp>
        );
    }
}