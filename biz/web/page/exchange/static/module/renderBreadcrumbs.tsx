import * as React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { replace } from 'lodash';
import { FileExcelFilled } from '@ant-design/icons';

/**
 *  给传入的组件添加面包屑
 * @param WrappedComponent 传入的组件
 */
const renderBreadcrumbs = (WrappedComponent) => {
    return class NewComponent extends React.Component{
        render(){
            return (
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Breadcrumb separator=">" style={{width: 1268, padding: '12px 0px'}}>{ getBreadcrumbContent() || '' }</Breadcrumb>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}
/**
 *  对当前有面包屑的组件的路径进行切割
 *  生成面包屑
 * 
 */
 const getBreadcrumbContent = () => {
     // 截取当前路径、分析路径
    const pathname = replace(window.location.pathname,'/web/exchange', '');
    if(!pathname) {
        return
    }
    let pathSnippets = pathname.split('/').filter(i => i);
    let extraBreadcrumbItems = [];
    // 获取面包屑配置表
    let breadcrumNameMap= getBreadcrumNameMap();
    // 组合面包屑
    if(breadcrumNameMap[pathname]){
        extraBreadcrumbItems = pathSnippets.map((_, index) => {
            let url = `/${pathSnippets.slice(0, index+1).join('/')}`;
            const key = breadcrumNameMap[url];
            // 多语言文案
            const text = intl.get(`breadcrumbs.${key}`);
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {
                            text || breadcrumNameMap[url]
                        }
                    </Link>
                </Breadcrumb.Item>
            )
        })
    }
    return extraBreadcrumbItems
 }

/**
 * 通过路由配置生成面包屑配置表
 */

 const getBreadcrumNameMap = () => {
    return recursion(constants.routesConf) // constants.routesConf 路由配置表
 }

 const recursion = (content, breadcrumNameMap={}, parentPath='') => {
    content.map((item) => {
        let path = parentPath === ''? `/${item.path}` : `${parentPath}/${item.path}`
        if(item.breadcrumName){
            breadcrumNameMap[path] = item.breadcrumName;
        }
        if (item.routes) {
            recursion(item.routes, breadcrumNameMap, path) 
        }
    })
    return breadcrumNameMap
 }

export default renderBreadcrumbs;

