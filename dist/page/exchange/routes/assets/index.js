import * as React from "react";
import { WrappedAssetsCmp } from './styled';
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import NavBar from './components/navBar';
export default class Assets extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(WrappedAssetsCmp, null,
            React.createElement(UserCenterLayout, { activeItem: "assets" }),
            React.createElement(NavBar, null),
            renderRoutes(this.props.routes, this.props.match.url)));
    }
}
//# sourceMappingURL=index.js.map