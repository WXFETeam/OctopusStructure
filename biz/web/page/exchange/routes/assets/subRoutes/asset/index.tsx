import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import AssetView from "./assetView";
import AssetDetailList from "./assetDetailList";
import { WrappedAssetCmp } from './styled';

type assetProps = {
    assetStore?: any
}

type assetState = {
}
@inject('assetStore')
@observer
export default class Assets extends React.Component<assetProps, assetState> {
    constructor(props: assetProps) {
        super(props);
    }
    getAllAccount = () => {
        let that = this;
        // 获取当前用户的账户
        ajax({
            url: "assets.getAccountList",
            callback(data) {
                that.props.assetStore.updateUserAccount(data)
            }
        })
    }

    getAssetList() {
        let that = this;
        // 获取资产列表
        ajax({
            url: "assets.getAssetsList",
            callback(data) {
                console.log(data, 'assertListData')
                if (data && data.list) {
                    that.props.assetStore.updateAssetList(data.list)
                }
            }
        })
    }

    componentDidMount() {
        this.getAllAccount();
        this.getAssetList();
    }

    render() {
        return (
            <WrappedAssetCmp>
                <AssetView />
                <AssetDetailList />
            </WrappedAssetCmp>
        )
    }
}