import theme from 'styled-theming';
import themeConf from 'mulThemeConf';
import { get } from 'lodash';
import { themeStore } from '@webExchangeMobx/index';

type getCustomizeCmpParams = {
    customizeStyleCmpList: Array<string>,
    cmpNS: string,
}

/* 
    @params: {
        customizeStyleCmpList: dynamic style props. eg: ['textColor', 'buttonColor'],
        cmpNS: componments namespace(actually it's the file path relative to root path). eg: 'Home'
    }
*/
const themeProps = (customizeStyleCmpList: Array<string>, cmpNS: string):any => {
    let customizeStyleCmp:any = {};
    customizeStyleCmpList.map((cmpKey: string) => {
        let styles = {};
        let defaultStyle = get((themeConf as any)[`defaultDarkTheme`], `${cmpNS}.${cmpKey}`);
        (customizeStyleCmp as any)[cmpKey] = theme(
            constants.name, 
            constants.themeList.map((pl:string) => {
                return Object.assign(styles, { [pl]: get((themeConf as any)[`${pl}Theme`], `${cmpNS}.${cmpKey}`, defaultStyle) });
            }).shift()
        );
    })
    return customizeStyleCmp;
}

const styleProps  = (customizeStyleCmpList: Array<string>, cmpNS: string):any => {
    let customizeStyleCmp:any = {};
    customizeStyleCmpList.map((cmpKey: string) => {
        let styles = {};
        let defaultStyle = get((themeConf as any)[`defaultDarkTheme`], `${cmpNS}.${cmpKey}`);
        (customizeStyleCmp as any)[cmpKey] =  get(themeStore.currentTheme, `${cmpNS}.${cmpKey}`, defaultStyle);
    })
    return customizeStyleCmp;
}

export default {
    themeProps,
    styleProps
};
