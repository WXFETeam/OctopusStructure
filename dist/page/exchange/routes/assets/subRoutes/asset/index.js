var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import AssetView from "./assetView";
import AssetDetailList from "./assetDetailList";
import { WrappedAssetCmp } from './styled';
let Assets = class Assets extends React.Component {
    constructor(props) {
        super(props);
        this.getAllAccount = () => {
            let that = this;
            // 获取当前用户的账户
            ajax({
                url: "assets.getAccountList",
                callback(data) {
                    that.props.assetStore.updateUserAccount(data);
                }
            });
        };
    }
    getAssetList() {
        let that = this;
        // 获取资产列表
        ajax({
            url: "assets.getAssetsList",
            callback(data) {
                console.log(data, 'assertListData');
                if (data && data.list) {
                    that.props.assetStore.updateAssetList(data.list);
                }
            }
        });
    }
    componentDidMount() {
        this.getAllAccount();
        this.getAssetList();
    }
    render() {
        return (React.createElement(WrappedAssetCmp, null,
            React.createElement(AssetView, null),
            React.createElement(AssetDetailList, null)));
    }
};
Assets = __decorate([
    inject('assetStore'),
    observer
], Assets);
export default Assets;
//# sourceMappingURL=index.js.map