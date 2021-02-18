import * as React from "react";
import { Route, Switch, Redirect } from "react-router";
import { get, set } from 'lodash';
import { WrappedOrderCmp } from './styled';
import UserCenterLayout from '@webExchangeComponents/userCenterLayout';
import NavBar from './components/navBar';

interface routesProps {
    path?: string,
    to?: string
}

type OrderProps = {
    routes: Array<routesProps>,
    match: any
}

type OrderState = {
    routes: Array<routesProps>,
}

export default class Order extends React.Component<OrderProps, OrderState> {
    constructor(props: OrderProps) {
        super(props);
        this.state = {
            routes: []
        }
    }

    redirectTo() {
        let subNav = get(common.getLS('subNav'), 'order') || '';
        if (subNav) {
            const {routes} = this.props;
            let newRoutes = routes.filter((r) => {
                return r.path === ''? r.to = `/order/${subNav}` : r
            })
            this.setState({
                routes: newRoutes
            })
        }
    }
    componentDidMount() {
        this.redirectTo();
    }
    render() {
        const { routes } = this.state;
        return (
            <WrappedOrderCmp>
                <UserCenterLayout activeItem="order" />
                <NavBar />
                {
                    renderRoutes(routes, this.props.match.url)
                }
            </WrappedOrderCmp>
        )
    }
}