import * as React from "react";
import { Route, Switch } from "react-router";
const renderRouteCmp = (routeCfg, props) => {
    let Component = Loadable({
        loader: () => import(/* webpackChunkName: "web/exchange/chunk/[request]" */ `./subRoutes/${routeCfg.path ? routeCfg.path : 'index'}`),
        loading: () => { return null; }
    });
    return React.createElement(Component, Object.assign(Object.assign({}, props), { routes: routeCfg.routes }), null);
};
export default class MFA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(Switch, null, this.props.routes.map((route, key) => {
            return React.createElement(Route, { path: `${this.props.match.url}/${route.path}`, key: key, render: (props) => renderRouteCmp(route, props) });
        })));
    }
}
//# sourceMappingURL=index.js.map