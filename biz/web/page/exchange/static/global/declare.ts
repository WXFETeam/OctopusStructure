declare global {
    let webApp: any;
    interface Window {
        webApp: any,
        deployConf: any
    }
    const common: any;
    const dataMapping: any;
    const intl: any;
    const constants: any;
    const renderRoutes: any;
    const renderBreadcrumbs: any;
    const tradingviewConf: any;
    const getMulThemeProps: any;
    const wsClient: any;
    const webExchangeWS: any;
    const mockGen001: any;
    const ajax: any;
    const Loadable: any;
    const sha256: any;
    const md5: any;
}

function loadGlobalVar() {
    window.webApp = {};
}

export default loadGlobalVar;
