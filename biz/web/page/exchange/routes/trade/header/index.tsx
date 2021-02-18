import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import moment from 'moment';
import { Row, Col, Button, Menu, Dropdown } from 'antd';
import { WrapperHeaderCmp } from './styled';
import { subscribeAsTimezone } from 'webExchangeSubscribe';
const { SubMenu } = Menu;
const darkLogo = require("@webExchangeImgs/trade/dark-logo.png");
const lightLogo = require("@webExchangeImgs/trade/light-logo.png");

type HeaderState = {
    avatarDropdownStatus: boolean
}

type HeaderProps = {
    themeStore? :any,
    userStore?: any,
    timezoneStore?: any,
    serverTimeStore?: any,
    history: any
}

@inject('themeStore', 'userStore', 'timezoneStore', 'serverTimeStore')
@observer
export default class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            avatarDropdownStatus: false //控制头像下拉框是否显示
        }
    }

    changeNavItem = e => {
    }

    changeAvatarDropdown = avatarDropdownStatus => {
        this.setState({ avatarDropdownStatus })
    }

    changeTimezone = (e) => {
        this.props.timezoneStore.changeTimezone(e.key);
        subscribeAsTimezone();
    }

    goToLogin = () => {
        this.props.history.push('login');
        // this.props.userStore.changeUserInfo({userName: "hashKey", token: "aaa"});
    } 

    goToReg = () => {
        this.props.history.push('register');
    }

    signOut = () => {
        this.props.userStore.clearUserInfo();
    }

    changeDarkLight = () => {
        const { themeStore } = this.props;
        let curMode = themeStore.currentThemeObj.mode;
        let themeMode = curMode == 'dark' ? 'light' : 'dark';
        themeStore.changeMode(themeMode);
    }

    changeTheme = ({ key }) => {
        const theme = ["default", "mode1", "mode2"];
        if(theme.indexOf(key) > -1) {
            this.props.themeStore.changeTheme(key);
        }
    }

    render() {
        const { userInfo } = this.props.userStore;
        let { mode, theme } = this.props.themeStore.currentThemeObj;
        const { currentTimezone } = this.props.timezoneStore;

        const timezoneMenu = <Menu onClick={this.changeTimezone} className="timezoneList" selectedKeys={[currentTimezone]}>
            {constants.timezoneList.map(item => 
                <Menu.Item key={item.timezone}>(UTC{item.timezone}) {item.city}</Menu.Item>
            )}
        </Menu>

        const avatarMenu = <Menu
            onClick={this.changeTheme}
            selectedKeys={[theme]}
        >
            <Menu.Item key="myOrders">My Orders</Menu.Item>
            <Menu.Item key="myWallet">My Wallet</Menu.Item>
            <div className="menuItemLine"></div>
            <Menu.Item key="app">App</Menu.Item>
            <Menu.Item key="helpSupport">Help&Support</Menu.Item>
            <Menu.Item key="privacy">Privacy</Menu.Item>
            <Menu.Item key="contact">Contact Us</Menu.Item>
            <Menu.Item key="legal">Legal</Menu.Item>
            <div className="menuItemLine"></div>
            <SubMenu
                popupClassName="colorSetting"
                key="colorSetting"
                title={<span>Color Setting<i className="arrowRight"></i></span>}
            >
                <Menu.Item key="default">
                    <i className="themeIcon defaultGreen"></i>
                    <i className="themeIcon defaultRed"></i>
                    <span>Default</span>
                </Menu.Item>
                <Menu.Item key="mode1">
                    <i className="themeIcon mode1Green"></i>
                    <i className="themeIcon mode1Red"></i>
                    <span>mode1</span>
                </Menu.Item>
                <Menu.Item key="mode2">
                    <i className="themeIcon mode2Green"></i>
                    <i className="themeIcon mode2Red"></i>
                    <span>mode2</span>
                </Menu.Item>
            </SubMenu>
            <div className="menuItemLine"></div>
            <Menu.Item key="signOut" onClick={this.signOut}>Sign Out</Menu.Item>
        </Menu>

        let offsetTimestamp = this.props.serverTimeStore.currentServerTime + (currentTimezone - new Date().getTimezoneOffset() / 60 * -1) * 3600000;
        let time = moment(offsetTimestamp).format('HH:mm:ss');
        let date = moment(offsetTimestamp).format('YYYY-MM-DD');

        return (
            <WrapperHeaderCmp>
                <div className="logoBox">
                    <img src={mode == 'dark' ? darkLogo : lightLogo} />
                </div>
                <Row className="navBox">
                    <Menu onClick={this.changeNavItem} mode="horizontal" defaultSelectedKeys={["exchange"]}>
                        <Menu.Item key="exchange">Exchange</Menu.Item>
                        <Menu.Item key="api">Api</Menu.Item>
                        <Menu.Item key="support">Support</Menu.Item>
                        <Menu.Item key="announcement">Announcement</Menu.Item>
                    </Menu>
                </Row>
                <Dropdown overlay={timezoneMenu} placement="bottomCenter" className="timezoneBox" overlayClassName="timezoneDropdown">
                    <Row justify="center" align="middle">
                        <Col span={20}>
                            <span className="time">{`${time} (UTC${currentTimezone})`}</span>
                            <span className="date">{date}</span>
                        </Col>
                    </Row>
                </Dropdown>
                <div className="themeBox">
                    <i className={mode} onClick={this.changeDarkLight}></i>
                </div>
                {userInfo.token ?
                    <Dropdown overlay={avatarMenu} placement="bottomCenter" className="avatarBox" overlayClassName="avatarDropdown" onVisibleChange={this.changeAvatarDropdown}>
                        <Row justify="center" align="middle">
                            <Col span={16}>
                                <span className="name">{userInfo.userName}</span>
                                <i></i>
                                <span className={this.state.avatarDropdownStatus ? 'arrow up' : 'arrow down'}></span>
                            </Col>
                        </Row>
                    </Dropdown> : 
                    <Row className="noLoginBox" justify="center" align="middle">
                        <Col span={6} className="loginText" onClick={this.goToLogin}>Log in</Col>
                        <Col span={10}>
                            <a className="regBtn blueGlBtn" onClick={this.goToReg}>Register</a>
                        </Col>
                    </Row>
                }
            </WrapperHeaderCmp>
        );
    }
}