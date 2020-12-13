var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
import themeConf from 'mulThemeConf';
class ThemeStore {
    constructor() {
        this.currentThemeObj = common.getLS('currentThemeObj') ? common.getLS('currentThemeObj') : constants.defaultTheme;
    }
    get currentTheme() {
        let mode = this.currentThemeObj.mode;
        mode = mode.replace(mode[0], mode[0].toUpperCase());
        return themeConf[`${this.currentThemeObj.theme}${mode}Theme`];
    }
    get currentThemeName() {
        let mode = this.currentThemeObj.mode;
        mode = mode.replace(mode[0], mode[0].toUpperCase());
        return this.currentThemeObj.theme + mode;
    }
    changeTheme(val) {
        this.currentThemeObj.theme = val;
        common.setLS('currentThemeObj', this.currentThemeObj);
    }
    changeMode(val) {
        this.currentThemeObj.mode = val;
        common.setLS('currentThemeObj', this.currentThemeObj);
    }
}
__decorate([
    observable
], ThemeStore.prototype, "currentThemeObj", void 0);
__decorate([
    computed
], ThemeStore.prototype, "currentTheme", null);
__decorate([
    computed
], ThemeStore.prototype, "currentThemeName", null);
__decorate([
    action
], ThemeStore.prototype, "changeTheme", null);
__decorate([
    action
], ThemeStore.prototype, "changeMode", null);
export default ThemeStore;
//# sourceMappingURL=themeStore.js.map