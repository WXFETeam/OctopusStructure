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
            activeItem: get(common.getLS('subNav'), 'order', "current")
        }
    }

    switchNav = (activeItem) => {
        this.setState({ activeItem });
        let subNav = common.getLS('subNav') || {};
        set(subNav, 'order', activeItem);
        common.setLS('subNav', subNav);
        this.props.history.push(`/order/${activeItem}`);
    }

    render() {
        const navBarItems = [{
            key: 'current',
            value: "当前委托"
        },{
            key: 'historical',
            value: "历史委托"
        },{
            key: 'traded',
            value: "历史成交"
        }];
        let { activeItem } = this.state;

        return (
            <WrappedNavBarCmp>
                <Row className="navFrame" justify="center">
                    <Col span={16} className="navContent">
                        <ul className="navBar">
                            {navBarItems.map(item => 
                                <li onClick={() => this.switchNav(item.key)} key={item.key} className={item.key == activeItem ? "active": ""}>{item.value}</li>
                            )}
                        </ul>
                    </Col>
                </Row>
            </WrappedNavBarCmp>
        )
    }
}