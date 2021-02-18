var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class recordStore {
    constructor() {
        this.rechargeRecordList = [];
        this.withdrawRecordList = [];
    }
    //更新充值记录
    updateRechargeRecord(data) {
        this.rechargeRecordList = data;
    }
    //更新充值记录
    updateWithdrawRecord(data) {
        this.withdrawRecordList = data;
    }
}
__decorate([
    observable
], recordStore.prototype, "rechargeRecordList", void 0);
__decorate([
    observable
], recordStore.prototype, "withdrawRecordList", void 0);
__decorate([
    action.bound
], recordStore.prototype, "updateRechargeRecord", null);
__decorate([
    action.bound
], recordStore.prototype, "updateWithdrawRecord", null);
export default recordStore;
//# sourceMappingURL=recordStore.js.map