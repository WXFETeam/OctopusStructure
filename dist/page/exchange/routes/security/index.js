import * as React from "react";
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import { WrappedSecurityCmp } from './styled';
import _ from 'lodash';
export default class Security extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNeedMenu: true
        };
    }
    componentDidMount() {
        let spPageList = ['pwdMgt', 'mfa', 'device', 'whiteList', 'basicInfo'];
        let url = window.location.pathname;
        let result = _.filter(spPageList, (item) => { return url.includes(item); });
        if (result.length != 0) {
            this.setState({ isNeedMenu: false });
        }
    }
    render() {
        return (React.createElement(WrappedSecurityCmp, null,
            this.state.isNeedMenu && React.createElement(UserCenterLayout, { activeItem: "security" }),
            renderRoutes(this.props.routes, this.props.match.url)));
    }
}
//# sourceMappingURL=index.js.map