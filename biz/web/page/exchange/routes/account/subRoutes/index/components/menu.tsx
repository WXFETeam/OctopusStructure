import * as React from "react";
import { Row, Col, Button} from 'antd';
import { WrappedSubMenuCmp } from './styled';
import _ from 'lodash';
type AccountProps = {
    curSelected:any,
    history?:any,
}

type AccountState = {

}

export default class SubMenu extends React.Component<AccountProps, AccountState> {
    constructor(props: AccountProps) {
        super(props);
        this.state = {

        }
    }

    hendleMenuClick = (curSelected) => {
        let { history } = this.props;
        let accountType = location.pathname.includes('individual')?'individual':'enterprise';
        switch (curSelected){
            case 1:
                history.push(`/account/${accountType}/accountMgt`);
            break;
            case 2:
                history.push(`/account/${accountType}/tradeRecord`);
            break;
            case 3:
                history.push(`/account/${accountType}/transferHistory`);
            break;
            case 4:
                history.push(`/account/${accountType}/accountRecord`);
            break;
        }
    }

    render() {
        let { curSelected } = this.props;
        return (
            <WrappedSubMenuCmp>
                <Row className='menuWrapper'>
                    <Col className={curSelected==1?'active menuItem':'menuItem'}><a onClick={()=>this.hendleMenuClick(1)}>账户管理</a></Col>
                    <Col className={curSelected==2?'active menuItem':'menuItem'}><a onClick={()=>this.hendleMenuClick(2)}>交易记录</a></Col>
                    <Col className={curSelected==3?'active menuItem':'menuItem'}><a onClick={()=>this.hendleMenuClick(3)}>划转历史</a></Col>
                    <Col className={curSelected==4?'active menuItem':'menuItem'}><a onClick={()=>this.hendleMenuClick(4)}>帐号记录</a></Col>
                </Row>
            </WrappedSubMenuCmp>
        )
    }
}