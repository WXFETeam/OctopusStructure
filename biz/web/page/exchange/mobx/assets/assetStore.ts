import * as React from 'react';
import { observable, action, computed } from 'mobx';

class AssetStore {
    @observable userAccount: any; // 资金帐户
    @observable assetList: any; // 资产list
    @observable largeAsset: any; // 大额资产
    constructor() {
        this.userAccount = {};
        this.assetList = [];
        this.largeAsset = [];
    }

    //更新账户
    @action.bound updateUserAccount(accountData) {
        this.userAccount = accountData;
    }

    //更新资产list
    @action.bound updateAssetList(assetsData) {
        this.assetList = assetsData;
    }

    @action.bound updateLargeAsset(largeAssetData) {
        this.largeAsset = largeAssetData;
    }
}

export default AssetStore;
