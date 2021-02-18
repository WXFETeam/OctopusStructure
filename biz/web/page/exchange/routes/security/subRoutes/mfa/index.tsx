import * as React from "react";
import { Route, Switch } from "react-router";


interface routesProps {
    from?: string,
    to?: string,
    path?: string,
    exact?: boolean,
    layout?: boolean,
    auth?: boolean,
    routes?: any
}

type MFAProps = {
    routes: Array<routesProps>;
    match: any;
    history: any,
}

const renderRouteCmp = (routeCfg: routesProps, props: any) => {
    let Component: any = Loadable({
        loader: () => import(/* webpackChunkName: "web/exchange/chunk/[request]" */  `./subRoutes/${routeCfg.path ? routeCfg.path : 'index'}`),
        loading: () => {return null}
    })
    return React.createElement(Component, {...props, routes: routeCfg.routes}, null);
}

export default class MFA extends React.Component<MFAProps, {}> {
    constructor(props: MFAProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <Switch>
                {
                    this.props.routes.map((route: routesProps, key: number):JSX.Element => {
                        return <Route 
                            path={`${this.props.match.url}/${route.path}`} 
                            key={key} 
                            render={(props) => renderRouteCmp(route, props)}
                        />
                    })
                }
            </Switch>       
        )
    }
}