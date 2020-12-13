var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import moment from 'moment';
import { Row, Col, Menu, Dropdown } from 'antd';
import { WrapperHeaderCmp } from './styled';
import { subscribeAsTimezone } from 'webExchangeSubscribe';
const { SubMenu } = Menu;
const darkLogo = require("@webExchangeImgs/trade/dark-logo.png");
const lightLogo = require("@webExchangeImgs/trade/light-logo.png");
let Header = class Header extends React.Component {
    constructor(props) {
        super(props);
        this.changeNavItem = e => {
        };
        this.changeAvatarDropdown = avatarDropdownStatus => {
            this.setState({ avatarDropdownStatus });
        };
        this.changeTimezone = (e) => {
            this.props.timezoneStore.changeTimezone(e.key);
            subscribeAsTimezone();
        };
        this.goToLogin = () => {
            this.props.history.push('login');
            // this.props.userStore.changeUserInfo({userName: "hashKey", token: "aaa"});
        };
        this.goToReg = () => {
            this.props.history.push('register');
        };
        this.signOut = () => {
            this.props.userStore.clearUserInfo();
        };
        this.changeDarkLight = () => {
            const { themeStore } = this.props;
            let curMode = themeStore.currentThemeObj.mode;
            let themeMode = curMode == 'dark' ? 'light' : 'dark';
            themeStore.changeMode(themeMode);
        };
        this.changeTheme = ({ key }) => {
            const theme = ["default", "mode1", "mode2"];
            if (theme.indexOf(key) > -1) {
                this.props.themeStore.changeTheme(key);
            }
        };
        this.state = {
            avatarDropdownStatus: false //控制头像下拉框是否显示
        };
    }
    render() {
        const { userInfo } = this.props.userStore;
        let { mode, theme } = this.props.themeStore.currentThemeObj;
        const { currentTimezone } = this.props.timezoneStore;
        const timezoneMenu = React.createElement(Menu, { onClick: this.changeTimezone, className: "timezoneList", selectedKeys: [currentTimezone] }, constants.timezoneList.map(item => React.createElement(Menu.Item, { key: item.timezone },
            "(UTC",
            item.timezone,
            ") ",
            item.city)));
        const avatarMenu = React.createElement(Menu, { onClick: this.changeTheme, selectedKeys: [theme] },
            React.createElement(Menu.Item, { key: "myOrders" }, "My Orders"),
            React.createElement(Menu.Item, { key: "myWallet" }, "My Wallet"),
            React.createElement("div", { className: "menuItemLine" }),
            React.createElement(Menu.Item, { key: "app" }, "App"),
            React.createElement(Menu.Item, { key: "helpSupport" }, "Help&Support"),
            React.createElement(Menu.Item, { key: "privacy" }, "Privacy"),
            React.createElement(Menu.Item, { key: "contact" }, "Contact Us"),
            React.createElement(Menu.Item, { key: "legal" }, "Legal"),
            React.createElement("div", { className: "menuItemLine" }),
            React.createElement(SubMenu, { popupClassName: "colorSetting", key: "colorSetting", title: React.createElement("span", null,
                    "Color Setting",
                    React.createElement("i", { className: "arrowRight" })) },
                React.createElement(Menu.Item, { key: "default" },
                    React.createElement("i", { className: "themeIcon defaultGreen" }),
                    React.createElement("i", { className: "themeIcon defaultRed" }),
                    React.createElement("span", null, "Default")),
                React.createElement(Menu.Item, { key: "mode1" },
                    React.createElement("i", { className: "themeIcon mode1Green" }),
                    React.createElement("i", { className: "themeIcon mode1Red" }),
                    React.createElement("span", null, "mode1")),
                React.createElement(Menu.Item, { key: "mode2" },
                    React.createElement("i", { className: "themeIcon mode2Green" }),
                    React.createElement("i", { className: "themeIcon mode2Red" }),
                    React.createElement("span", null, "mode2"))),
            React.createElement("div", { className: "menuItemLine" }),
            React.createElement(Menu.Item, { key: "signOut", onClick: this.signOut }, "Sign Out"));
        let offsetTimestamp = this.props.serverTimeStore.currentServerTime + (currentTimezone - new Date().getTimezoneOffset() / 60 * -1) * 3600000;
        let time = moment(offsetTimestamp).format('HH:mm:ss');
        let date = moment(offsetTimestamp).format('YYYY-MM-DD');
        return (React.createElement(WrapperHeaderCmp, null,
            React.createElement("div", { className: "logoBox" },
                React.createElement("img", { src: mode == 'dark' ? darkLogo : lightLogo })),
            React.createElement(Row, { className: "navBox" },
                React.createElement(Menu, { onClick: this.changeNavItem, mode: "horizontal", defaultSelectedKeys: ["exchange"] },
                    React.createElement(Menu.Item, { key: "exchange" }, "Exchange"),
                    React.createElement(Menu.Item, { key: "api" }, "Api"),
                    React.createElement(Menu.Item, { key: "support" }, "Support"),
                    React.createElement(Menu.Item, { key: "announcement" }, "Announcement"))),
            React.createElement(Dropdown, { overlay: timezoneMenu, placement: "bottomCenter", className: "timezoneBox", overlayClassName: "timezoneDropdown" },
                React.createElement(Row, { justify: "center", align: "middle" },
                    React.createElement(Col, { span: 20 },
                        React.createElement("span", { className: "time" }, `${time} (UTC${currentTimezone})`),
                        React.createElement("span", { className: "date" }, date)))),
            React.createElement("div", { className: "themeBox" },
                React.createElement("i", { className: mode, onClick: this.changeDarkLight })),
            userInfo.token ?
                React.createElement(Dropdown, { overlay: avatarMenu, placement: "bottomCenter", className: "avatarBox", overlayClassName: "avatarDropdown", onVisibleChange: this.changeAvatarDropdown },
                    React.createElement(Row, { justify: "center", align: "middle" },
                        React.createElement(Col, { span: 16 },
                            React.createElement("span", { className: "name" }, userInfo.userName),
                            React.createElement("i", null),
                            React.createElement("span", { className: this.state.avatarDropdownStatus ? 'arrow up' : 'arrow down' })))) :
                React.createElement(Row, { className: "noLoginBox", justify: "center", align: "middle" },
                    React.createElement(Col, { span: 6, className: "loginText", onClick: this.goToLogin }, "Log in"),
                    React.createElement(Col, { span: 10 },
                        React.createElement("a", { className: "regBtn blueGlBtn", onClick: this.goToReg }, "Register")))));
    }
};
Header = __decorate([
    inject('themeStore', 'userStore', 'timezoneStore', 'serverTimeStore'),
    observer
], Header);
export default Header;
//# sourceMappingURL=index.js.map