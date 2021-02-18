import * as React from "react";
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import { WrappedApiMgtCmp } from './styled';
import _ from 'lodash';
export default class ApiMgt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNeedMenu: true
        };
    }
    componentDidMount() {
        let spPageList = [];
        let url = window.location.pathname;
        let result = _.filter(spPageList, (item) => { return url.includes(item); });
        if (result.length != 0) {
            this.setState({ isNeedMenu: false });
        }
    }
    render() {
        return (React.createElement(WrappedApiMgtCmp, null,
            this.state.isNeedMenu && React.createElement(UserCenterLayout, { activeItem: "api" }),
            renderRoutes(this.props.routes, this.props.match.url)));
    }
}
//# sourceMappingURL=index.js.map