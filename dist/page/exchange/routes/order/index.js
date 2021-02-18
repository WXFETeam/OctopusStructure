import * as React from "react";
import { get } from 'lodash';
import { WrappedOrderCmp } from './styled';
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import NavBar from './components/navBar';
export default class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: []
        };
    }
    redirectTo() {
        let subNav = get(common.getLS('subNav'), 'order') || '';
        if (subNav) {
            const { routes } = this.props;
            let newRoutes = routes.filter((r) => {
                return r.path === '' ? r.to = `/order/${subNav}` : r;
            });
            this.setState({
                routes: newRoutes
            });
        }
    }
    componentDidMount() {
        this.redirectTo();
    }
    render() {
        const { routes } = this.state;
        return (React.createElement(WrappedOrderCmp, null,
            React.createElement(UserCenterLayout, { activeItem: "order" }),
            React.createElement(NavBar, null),
            renderRoutes(routes, this.props.match.url)));
    }
}
//# sourceMappingURL=index.js.map