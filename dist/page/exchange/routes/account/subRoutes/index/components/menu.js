import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedSubMenuCmp } from './styled';
export default class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.hendleMenuClick = (curSelected) => {
            let { history } = this.props;
            let accountType = location.pathname.includes('individual') ? 'individual' : 'enterprise';
            switch (curSelected) {
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
        };
        this.state = {};
    }
    render() {
        let { curSelected } = this.props;
        return (React.createElement(WrappedSubMenuCmp, null,
            React.createElement(Row, { className: 'menuWrapper' },
                React.createElement(Col, { className: curSelected == 1 ? 'active menuItem' : 'menuItem' },
                    React.createElement("a", { onClick: () => this.hendleMenuClick(1) }, "\u8D26\u6237\u7BA1\u7406")),
                React.createElement(Col, { className: curSelected == 2 ? 'active menuItem' : 'menuItem' },
                    React.createElement("a", { onClick: () => this.hendleMenuClick(2) }, "\u4EA4\u6613\u8BB0\u5F55")),
                React.createElement(Col, { className: curSelected == 3 ? 'active menuItem' : 'menuItem' },
                    React.createElement("a", { onClick: () => this.hendleMenuClick(3) }, "\u5212\u8F6C\u5386\u53F2")),
                React.createElement(Col, { className: curSelected == 4 ? 'active menuItem' : 'menuItem' },
                    React.createElement("a", { onClick: () => this.hendleMenuClick(4) }, "\u5E10\u53F7\u8BB0\u5F55")))));
    }
}
//# sourceMappingURL=menu.js.map