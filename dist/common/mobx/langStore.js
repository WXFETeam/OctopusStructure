var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class LangStore {
    constructor() {
        this.currentLang = localStorage.getItem('currentLang') ? localStorage.getItem('currentLang') : 'en';
    }
    changeLang(val) {
        this.currentLang = val;
        localStorage.setItem('currentLang', this.currentLang);
    }
}
__decorate([
    observable
], LangStore.prototype, "currentLang", void 0);
__decorate([
    action
], LangStore.prototype, "changeLang", null);
export default LangStore;
//# sourceMappingURL=langStore.js.map