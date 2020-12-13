import * as React from "react";
import { WrapperAccountRecordCmp, Content } from './styled';
import { Row, Col, Button, Table } from 'antd';
import SubMenu from '../../../index/components/menu';

// const phoneIcon = require("@webExchangeImgs/userCenter/twofa/phone.png");


type AccountRecordprops = {
    history?: any
}
type AccountRecordState = {
    dataSource: Array<any>
}
export default class AccountRecord extends React.Component<AccountRecordprops, AccountRecordState> {
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
            <WrapperAccountRecordCmp>
                <SubMenu curSelected={4} {...this.props}/>
                <Content>
                    AccountRecord page!
                </Content>
            </WrapperAccountRecordCmp>
        );
    }
}