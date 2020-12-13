import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { replace } from 'lodash';
/**
 *  给传入的组件添加面包屑
 * @param WrappedComponent 传入的组件
 */
const renderBreadcrumbs = (WrappedComponent) => {
    return class NewComponent extends React.Component {
        render() {
            return (React.createElement("div", { style: { display: 'flex', alignItems: 'center', flexDirection: 'column' } },
                React.createElement(Breadcrumb, { separator: ">", style: { width: 1268, padding: '12px 0px' } }, getBreadcrumbContent() || ''),
                React.createElement(WrappedComponent, Object.assign({}, this.props))));
        }
    };
};
/**
 *  对当前有面包屑的组件的路径进行切割
 *  生成面包屑
 *
 */
const getBreadcrumbContent = () => {
    // 截取当前路径、分析路径
    const pathname = replace(window.location.pathname, '/web/exchange', '');
    if (!pathname) {
        return;
    }
    let pathSnippets = pathname.split('/').filter(i => i);
    let extraBreadcrumbItems = [];
    // 获取面包屑配置表
    let breadcrumNameMap = getBreadcrumNameMap();
    // 组合面包屑
    if (breadcrumNameMap[pathname]) {
        extraBreadcrumbItems = pathSnippets.map((_, index) => {
            let url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            const key = breadcrumNameMap[url];
            // 多语言文案
            const text = intl.get(`breadcrumbs.${key}`);
            return (React.createElement(Breadcrumb.Item, { key: url },
                React.createElement(Link, { to: url }, text || breadcrumNameMap[url])));
        });
    }
    return extraBreadcrumbItems;
};
/**
 * 通过路由配置生成面包屑配置表
 */
const getBreadcrumNameMap = () => {
    return recursion(constants.routesConf); // constants.routesConf 路由配置表
};
const recursion = (content, breadcrumNameMap = {}, parentPath = '') => {
    content.map((item) => {
        let path = parentPath === '' ? `/${item.path}` : `${parentPath}/${item.path}`;
        if (item.breadcrumName) {
            breadcrumNameMap[path] = item.breadcrumName;
        }
        if (item.routes) {
            recursion(item.routes, breadcrumNameMap, path);
        }
    });
    return breadcrumNameMap;
};
export default renderBreadcrumbs;
//# sourceMappingURL=renderBreadcrumbs.js.map