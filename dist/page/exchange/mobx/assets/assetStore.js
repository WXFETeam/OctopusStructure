var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class AssetStore {
    constructor() {
        this.userAccount = {};
        this.assetList = [];
        this.largeAsset = [];
    }
    //更新账户
    updateUserAccount(accountData) {
        this.userAccount = accountData;
    }
    //更新资产list
    updateAssetList(assetsData) {
        this.assetList = assetsData;
    }
    updateLargeAsset(largeAssetData) {
        this.largeAsset = largeAssetData;
    }
}
__decorate([
    observable
], AssetStore.prototype, "userAccount", void 0);
__decorate([
    observable
], AssetStore.prototype, "assetList", void 0);
__decorate([
    observable
], AssetStore.prototype, "largeAsset", void 0);
__decorate([
    action.bound
], AssetStore.prototype, "updateUserAccount", null);
__decorate([
    action.bound
], AssetStore.prototype, "updateAssetList", null);
__decorate([
    action.bound
], AssetStore.prototype, "updateLargeAsset", null);
export default AssetStore;
//# sourceMappingURL=assetStore.js.map