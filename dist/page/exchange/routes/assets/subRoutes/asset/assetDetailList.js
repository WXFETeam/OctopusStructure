var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Form, Table, Input, Checkbox, Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { observer, inject } from 'mobx-react/index';
import { WrappedAssetDetailListCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
let AssetDetailList = class AssetDetailList extends React.Component {
    constructor(props) {
        super(props);
        this.isHideAsset = () => {
            this.setState({
                isChecked: !this.state.isChecked
            }, () => {
                this.getShowData();
            });
        };
        this.searchCurrency = (e) => {
            const { isChecked, showData } = this.state;
            const { assetList } = this.props.assetStore;
            this.setState({
                searchText: e.target.value
            }, () => {
                this.getShowData();
            });
        };
        this.state = {
            isChecked: false,
            searchText: '',
            showData: []
        };
    }
    currencyFilter() {
        const { searchText } = this.state;
        const { assetList } = this.props.assetStore;
        let newAssetList = assetList;
        if (searchText) {
            newAssetList = assetList.filter((value) => {
                return value.currency.toString().toLowerCase().includes(searchText.toLowerCase());
            });
        }
        return newAssetList;
    }
    largeAssetFilter() {
        const { isChecked } = this.state;
        const { assetList } = this.props.assetStore;
        let newAssetList = assetList;
        if (isChecked) {
            newAssetList = assetList.filter((value) => {
                // TODO
                return Number(value.availableAsset) > 4;
            });
        }
        return newAssetList;
    }
    getShowData() {
        let a = this.currencyFilter();
        let b = this.largeAssetFilter();
        let newList = [...a].filter(x => ([...b].some(y => y.id === x.id)));
        this.setState({
            showData: newList
        });
    }
    handleRecharge(record) {
        if (record.isRecharge) {
            this.props.history.push({
                pathname: '/assets/recharge',
                state: { id: record.id }
            });
        }
    }
    handleWithdrawable(record) {
        if (record.isWithdrawable) {
            this.props.history.push({
                pathname: '/assets/withdraw',
                state: { id: record.id }
            });
        }
    }
    render() {
        const { isChecked, showData, searchText } = this.state;
        const { assetList } = this.props.assetStore;
        let dataSource = (isChecked || searchText) ? showData : assetList;
        let columns = [{
                title: '币种',
                dataIndex: 'currency',
                key: 'currency',
                sorter: (a, b) => a.currency > b.currency ? 1 : -1,
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '名称',
                dataIndex: 'title',
                key: 'title',
                sorter: (a, b) => a.title > b.title ? 1 : -1,
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '总资产',
                dataIndex: 'totalAsset',
                key: 'totalAsset',
                sorter: (a, b) => a.totalAsset > b.totalAsset ? 1 : -1,
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '可用资产',
                dataIndex: 'availableAsset',
                key: 'availableAsset',
                sorter: (a, b) => a.availableAsset > b.availableAsset ? 1 : -1,
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '下单冻结',
                dataIndex: 'freezeAsset',
                key: 'freezeAsset',
                sorter: (a, b) => a.freezeAsset > b.freezeAsset ? 1 : -1,
                render: (value) => (React.createElement("div", null, value))
            }, {
                title: '操作',
                key: 'action',
                render: (value) => {
                    return (React.createElement("div", { className: "tableAction" },
                        React.createElement("span", { className: value.isRecharge ? 'show' : 'ban', onClick: () => this.handleRecharge(value) }, "\u5145\u503C"),
                        React.createElement("span", { className: value.isWithdrawable ? 'show' : 'ban', onClick: () => this.handleWithdrawable(value) }, "\u63D0\u73B0")));
                }
            }];
        let popContent = '资产小于0.001BTC';
        return (React.createElement(WrappedAssetDetailListCmp, null,
            React.createElement(WrappedHorizontalFormCmp, null,
                React.createElement(Form, { className: "assetSearch", layout: "vertical" },
                    React.createElement(Form.Item, { label: "\u641C\u7D22\u5E01\u79CD", className: "searchCurrency" },
                        React.createElement(Input, { onChange: this.searchCurrency })),
                    React.createElement(Form.Item, null,
                        React.createElement(Checkbox, { onChange: this.isHideAsset, className: "assetCheckBox" }, "\u9690\u85CF\u5C0F\u989D\u8D44\u4EA7"),
                        React.createElement(Popover, { placement: "topLeft", content: popContent },
                            React.createElement(InfoCircleOutlined, null))))),
            React.createElement(WrappedTableCmp, null,
                React.createElement(Table, { className: "assetTable", rowKey: record => record.id, dataSource: dataSource, columns: columns, pagination: false }))));
    }
};
AssetDetailList = __decorate([
    withRouter,
    inject('assetStore'),
    observer
], AssetDetailList);
export default AssetDetailList;
//# sourceMappingURL=assetDetailList.js.map