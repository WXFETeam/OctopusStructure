var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@webExchangeLocales/index';
import { loadGlobalVar } from 'webExchangeGlobalConf';
loadGlobalVar();
let App = class App extends React.Component {
    render() {
        const { langStore } = this.props;
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        });
        return (React.createElement(ConfigProvider, { locale: langStore.currentLang == 'zh-CN' ? zh_CN : null },
            React.createElement(Router, { basename: "/web/exchange" }, renderRoutes(constants.routesConf))));
    }
};
App = __decorate([
    inject("langStore"),
    observer
], App);
export default App;
//# sourceMappingURL=index.js.map