import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperIndexCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const reminderIcon = require("@webExchangeImgs/userCenter/kyc/reminderIcon.svg");

type IndexProps = {
    userStore?: any,
    match: any,
    history?: any
}

type IndexState = {

}

@inject('userStore')
@observer
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
    }

    componentDidMount(){
        this.goAccount('individual');
    }

    goAccount = (key) => {
        let { history, match } = this.props;
        if (key === 'individual') {
            // 个人
            history.push(`${match.path}individual`);
        } else {
            // 企业
            history.push(`${match.path}enterprise`);
        }
    }

    render() {
        return (
            <WrapperIndexCmp>
                
            </WrapperIndexCmp> 
        )
    }
}