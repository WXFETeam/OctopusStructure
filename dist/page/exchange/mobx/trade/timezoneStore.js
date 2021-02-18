var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class TimezoneStore {
    constructor() {
        this.currentTimezone = common.getLS("currentTimezone") ? common.getLS("currentTimezone").toString() : (new Date().getTimezoneOffset() / 60 > 0 ? new Date().getTimezoneOffset() / 60 * -1 + "" : "+" + new Date().getTimezoneOffset() / 60 * -1);
    }
    //更新已成交订单数据（服务器原始数据）
    changeTimezone(timezone) {
        this.currentTimezone = timezone;
        common.setLS("currentTimezone", timezone);
    }
}
__decorate([
    observable
], TimezoneStore.prototype, "currentTimezone", void 0);
__decorate([
    action
], TimezoneStore.prototype, "changeTimezone", null);
export default TimezoneStore;
//# sourceMappingURL=timezoneStore.js.map