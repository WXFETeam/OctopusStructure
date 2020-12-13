var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class UserInfoStore {
    constructor() {
        this.userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
    }
    clearUserInfo() {
        this.userInfo = {};
        localStorage.removeItem('userInfo');
    }
    changeUserInfo(object) {
        this.userInfo = Object.assign({}, this.userInfo, object);
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    }
}
__decorate([
    observable
], UserInfoStore.prototype, "userInfo", void 0);
__decorate([
    action
], UserInfoStore.prototype, "clearUserInfo", null);
__decorate([
    action
], UserInfoStore.prototype, "changeUserInfo", null);
export default UserInfoStore;
//# sourceMappingURL=userStore.js.map