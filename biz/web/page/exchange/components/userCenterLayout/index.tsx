import * as React from "react";
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import { get, set } from 'lodash';
import { observer, inject } from 'mobx-react/index';
import { WrappedUserCenterLayoutCmp } from './styled';

type AssetsProps = {
    userStore?: any,
    activeItem: string,
    history?: any
}


@inject('userStore')
@observer
@(withRouter as any)
export default class Assets extends React.Component<AssetsProps, {}> {
    constructor(props: AssetsProps) {
        super(props);
    }

    render() {
        const { userStore, activeItem, history } = this.props;
        const navBarItems = [{
            key: 'assets',
            value: "资产中心"
        },{
            key: 'order',
            value: "交易记录"
        },{
            key: 'security',
            value: "账户安全"
        },{
            key: 'apiMgt',
            value: "API管理"
        },{
            key: 'subAccount',
            value: "子账户"
        },{
            key: 'account',
            value: "交易账户管理"
        }];

        return (
            <WrappedUserCenterLayoutCmp>
                <Row className="navFrame" justify="center">
                    <Col span={16} className="navContent">
                        <Row className="account">{userStore.userInfo.email}</Row>
                        <ul className="navBar">
                            {navBarItems.map(item => 
                                <li key={item.key} className={item.key == activeItem ? "active": ""} onClick={() => history.push(`/${item.key}`)}>{item.value}</li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </WrappedUserCenterLayoutCmp>
        )
    }
}