import * as React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { authToken, bizLayout } from "@webExchangeHoc/index";

type routesProps = {
    from?: string,
    to?: string,
    path?: string,
    exact?: boolean,
    layout?: boolean,
    auth?: boolean,
    routes?: any
}

/* 
    @功能：渲染嵌套路由的通用方法：
    @params: routesConf 路由配置表
                from 跳转连接from
                to 跳转连接to
                path 路径
                exact 是否精确匹配
                layout 是否显示布局
                auth 是否需要登录
                routes 子路由配置
*/

const renderRouteCmp = (routeCfg: any, props: any, parentUrl: string) => {
    let filePath; //完整的文件路径
    let routePath = ""; //子路由文件路径
    let curFile = routeCfg.path ? routeCfg.path : 'index'; //当前路由对应的文件名
    if(parentUrl) {
        `${parentUrl.slice(1,).split("/").map(item=>{routePath += `${item}/subRoutes/`})}`;
    }
    filePath = `${routePath}${curFile}`;
    let Component: any = Loadable({
        loader: () => import(/* webpackChunkName: "web/exchange/chunk/[request]" */  `@webExchangeRoutes/${filePath}`),
        loading: () => {return null}
    })
    //TODO: we need use compose plugin
    if(routeCfg.layout) {
        Component = bizLayout(Component)
    } 
    if(routeCfg.auth) {
        Component = authToken(Component);
    }
    return React.createElement(Component, {...props, routes: routeCfg.routes}, null);
}
/**
 * 
 * @param routesConf 
 * @param parentUrl 
 */
const renderRoutes = (routesConf: Array<any>, parentUrl = ""):JSX.Element => {
    let routesCmp:Array<JSX.Element> = [];
    routesConf.map((route: any, key: number):void => {
        if (route.from) {
            routesCmp.push(<Redirect from={route.from} to={route.to} key={key} />);
        } else {
            routesCmp.push(<Route 
                path={`${parentUrl}/${route.path}`} 
                key={key} 
                exact={route.exact} 
                render={(props) => renderRouteCmp(route, props, parentUrl)}
            />)
        }
    })
    return (
        <Switch>
            {routesCmp}
        </Switch>
    )
}
 
export default renderRoutes;

