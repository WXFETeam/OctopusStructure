import * as React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@webExchangeLocales/index';
import { loadGlobalVar } from 'webExchangeGlobalConf';
loadGlobalVar();

type props = {
    langStore?: any
}

@inject("langStore",)
@observer
export default class App extends React.Component<props, {}> {
    render() {
        const { langStore } = this.props;
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })
        return (
            <ConfigProvider locale={langStore.currentLang == 'zh-CN' ? zh_CN : null}>
                <Router basename="/web/exchange">
                    {renderRoutes(constants.routesConf)}
                </Router>
            </ConfigProvider>
        );
    }
}