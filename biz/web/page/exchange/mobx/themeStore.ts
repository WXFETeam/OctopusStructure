import * as React from 'react';
import { observable, action, computed } from 'mobx';
import themeConf from 'mulThemeConf';

class ThemeStore {
    @observable currentThemeObj: any;
    
    constructor() {
        this.currentThemeObj = common.getLS('currentThemeObj') ? common.getLS('currentThemeObj') : constants.defaultTheme;
    }

    @computed get currentTheme(): any {
        let mode = this.currentThemeObj.mode;
        mode = mode.replace(mode[0], mode[0].toUpperCase());
        return (themeConf as any)[`${this.currentThemeObj.theme}${mode}Theme`];
    }

    @computed get currentThemeName(): string {
        let mode = this.currentThemeObj.mode;
        mode = mode.replace(mode[0], mode[0].toUpperCase());
        return this.currentThemeObj.theme + mode
    }

    @action changeTheme(val: string): void {
        this.currentThemeObj.theme = val;
        common.setLS('currentThemeObj', this.currentThemeObj);
    }

    @action changeMode(val: string): void {
        this.currentThemeObj.mode = val;
        common.setLS('currentThemeObj', this.currentThemeObj);
    }
}

export default ThemeStore;
