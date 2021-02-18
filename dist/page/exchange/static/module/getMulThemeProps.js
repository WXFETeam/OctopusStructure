import theme from 'styled-theming';
import themeConf from 'mulThemeConf';
import { get } from 'lodash';
import { themeStore } from '@webExchangeMobx/index';
/*
    @params: {
        customizeStyleCmpList: dynamic style props. eg: ['textColor', 'buttonColor'],
        cmpNS: componments namespace(actually it's the file path relative to root path). eg: 'Home'
    }
*/
const themeProps = (customizeStyleCmpList, cmpNS) => {
    let customizeStyleCmp = {};
    customizeStyleCmpList.map((cmpKey) => {
        let styles = {};
        let defaultStyle = get(themeConf[`defaultDarkTheme`], `${cmpNS}.${cmpKey}`);
        customizeStyleCmp[cmpKey] = theme(constants.name, constants.themeList.map((pl) => {
            return Object.assign(styles, { [pl]: get(themeConf[`${pl}Theme`], `${cmpNS}.${cmpKey}`, defaultStyle) });
        }).shift());
    });
    return customizeStyleCmp;
};
const styleProps = (customizeStyleCmpList, cmpNS) => {
    let customizeStyleCmp = {};
    customizeStyleCmpList.map((cmpKey) => {
        let styles = {};
        let defaultStyle = get(themeConf[`defaultDarkTheme`], `${cmpNS}.${cmpKey}`);
        customizeStyleCmp[cmpKey] = get(themeStore.currentTheme, `${cmpNS}.${cmpKey}`, defaultStyle);
    });
    return customizeStyleCmp;
};
export default {
    themeProps,
    styleProps
};
//# sourceMappingURL=getMulThemeProps.js.map