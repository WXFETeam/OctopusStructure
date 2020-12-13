var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, computed } from 'mobx';
class InstrumentStore {
    constructor() {
        this.currentInstrument = common.getLS('currentInstrument') ? common.getLS('currentInstrument') : "BTC/USDT";
        this.oriInstrumentsList = [];
        this.searchText = "";
        this.favoriteList = common.getLS('favoriteList') ? common.getLS('favoriteList') : [];
    }
    //获取基础货币
    get currentBasicCurrency() {
        return this.currentInstrument.split("/")[1] || "";
    }
    //获取目标货币
    get currentTargetCurrency() {
        return this.currentInstrument.split("/")[0] || "";
    }
    //服务器数据map成页面渲染数据
    get instrumentsListMap() {
        return dataMapping.trade.instrumentsListMap(this.oriInstrumentsList);
    }
    //当前币对的数据
    get currentInstrumentData() {
        return dataMapping.trade.getCurrentInstrumentData(this.oriInstrumentsList, this.currentInstrument);
    }
    //改变当前币种对
    changeInstrument(val) {
        this.currentInstrument = val;
        common.setLS('currentInstrument', val);
    }
    //更新当前币种对列表行情（服务器原始数据）
    updateInstrumentsList(instrumentsList) {
        this.oriInstrumentsList = instrumentsList;
    }
    //改变币对搜索框内容
    changeSearchText(val) {
        this.searchText = val;
    }
    //改变收藏的币对
    changeFavoriteList(instrumentId) {
        let index = this.favoriteList.indexOf(instrumentId);
        if (index > -1) {
            this.favoriteList.splice(index, 1);
        }
        else {
            this.favoriteList.push(instrumentId);
        }
        common.setLS("favoriteList", this.favoriteList);
    }
}
__decorate([
    observable
], InstrumentStore.prototype, "currentInstrument", void 0);
__decorate([
    observable
], InstrumentStore.prototype, "oriInstrumentsList", void 0);
__decorate([
    observable
], InstrumentStore.prototype, "searchText", void 0);
__decorate([
    observable
], InstrumentStore.prototype, "favoriteList", void 0);
__decorate([
    computed
], InstrumentStore.prototype, "currentBasicCurrency", null);
__decorate([
    computed
], InstrumentStore.prototype, "currentTargetCurrency", null);
__decorate([
    computed
], InstrumentStore.prototype, "instrumentsListMap", null);
__decorate([
    computed
], InstrumentStore.prototype, "currentInstrumentData", null);
__decorate([
    action
], InstrumentStore.prototype, "changeInstrument", null);
__decorate([
    action
], InstrumentStore.prototype, "updateInstrumentsList", null);
__decorate([
    action
], InstrumentStore.prototype, "changeSearchText", null);
__decorate([
    action
], InstrumentStore.prototype, "changeFavoriteList", null);
export default InstrumentStore;
//# sourceMappingURL=instrumentStore.js.map