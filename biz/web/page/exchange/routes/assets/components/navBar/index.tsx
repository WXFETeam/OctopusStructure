import * as React from "react";
import { withRouter } from 'react-router-dom';
import { get, set } from 'lodash';
import { Row, Col } from 'antd';
import { WrappedNavBarCmp } from './styled';

type NavBarState = {
    activeItem: string
}

type NavBarProps = {
    history?: any
}

@(withRouter as any)
export default class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);
        this.state = {
            activeItem: get(common.getLS('subNav'), 'assets', "asset")
        }
    }

    switchNav = (activeItem) => {
        this.setState({ activeItem });
        let subNav = common.getLS('subNav') || {};
        set(subNav, 'assets', activeItem);
        common.setLS('subNav', subNav);
        this.props.history.push(`/assets/${activeItem}`);
    }

    render() {
        const navBarItems = [{
            key: 'asset',
            value: "资产"
        },{
            key: 'recharge',
            value: "充值"
        },{
            key: 'withdraw',
            value: "提现"
        },{
            key: 'record',
            value: "充提记录"
        }];
        let { activeItem } = this.state;

        return (
            <WrappedNavBarCmp>
                <Row justify="center">
                    <Col span={16} className="navContent">
                        <ul className="navBar">
                            {navBarItems.map(item => 
                                <li onClick={this.switchNav.bind(this, item.key)} key={item.key} className={item.key == activeItem ? "active": ""}>{item.value}</li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </WrappedNavBarCmp>
        )
    }
}