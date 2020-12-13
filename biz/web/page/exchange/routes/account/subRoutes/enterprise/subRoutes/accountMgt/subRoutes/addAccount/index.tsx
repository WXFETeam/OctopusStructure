import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
// const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");

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
            dataSource: [],
        }
    }

    componentDidMount(){
        
    }


    render() {
        return (
            <WrapperAccountMgtCmp>
                <Content>
                    AddAccount page!
                </Content>
            </WrapperAccountMgtCmp>
        );
    }
}