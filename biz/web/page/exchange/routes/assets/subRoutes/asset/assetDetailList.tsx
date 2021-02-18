import * as React from "react";
import { withRouter } from 'react-router-dom';
import { Form, Table, Input, Checkbox, Popover, List } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { observer, inject } from 'mobx-react/index';
import { WrappedAssetDetailListCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';

type assetDetailListProps = {
    assetStore?: any,
    history?: any
}

type assetDetailListState = {
    isChecked: boolean,
    searchText: string,
    showData: Array<string>
}
@(withRouter as any)
@inject('assetStore')
@observer
export default class AssetDetailList extends React.Component<assetDetailListProps, assetDetailListState> {
    constructor(props: assetDetailListProps) {
        super(props);
        this.state = {
            isChecked: false,
            searchText: '',
            showData: []
        }
    }
    isHideAsset = () => {
        this.setState({
            isChecked: !this.state.isChecked
        }, () => {
            this.getShowData()
        })
    }
    currencyFilter () {
        const { searchText } = this.state;
        const { assetList } = this.props.assetStore;
        let newAssetList = assetList;
        if (searchText) {
            newAssetList = assetList.filter((value) => {
                return value.currency.toString().toLowerCase().includes(searchText.toLowerCase())
            });
        }
        return newAssetList
    }
    largeAssetFilter() {
        const { isChecked } = this.state;
        const { assetList } = this.props.assetStore;
        let newAssetList = assetList;
        if (isChecked) {
            newAssetList = assetList.filter((value) => {
                // TODO
                return Number(value.availableAsset) > 4
            });
        }
        return newAssetList
    }
    searchCurrency = (e) => {
        const { isChecked, showData } = this.state;
        const { assetList } = this.props.assetStore;
        this.setState({
            searchText: e.target.value
        }, () => {
            this.getShowData()
        });
    }

    getShowData() {
        let a = this.currencyFilter();
        let b = this.largeAssetFilter()
        let newList =  [...a].filter(x => (
            [...b].some(y => y.id === x.id)
        ))
        this.setState({
            showData: newList
        })
    }

    handleRecharge(record){
        if(record.isRecharge) {
            this.props.history.push({
                pathname: '/assets/recharge', 
                state: { id: record.id }
            })
        }
    }

    handleWithdrawable(record){
        if(record.isWithdrawable) {
            this.props.history.push({
                pathname: '/assets/withdraw', 
                state: { id: record.id }
            })
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
            render: (value) => (
                <div>{ value }</div>
            )
        }, {
            title: '名称',
            dataIndex: 'title',
            key: 'title',
            sorter: (a, b) => a.title > b.title ? 1 : -1,
            render: (value) => (
                <div>{ value }</div>
            )    
        }, {
            title: '总资产',
            dataIndex: 'totalAsset',
            key: 'totalAsset',
            sorter: (a, b) => a.totalAsset > b.totalAsset ? 1 : -1,
            render: (value) => (
                <div>{ value }</div>
            ) 
        }, {
            title: '可用资产',
            dataIndex: 'availableAsset',
            key: 'availableAsset',
            sorter: (a, b) => a.availableAsset > b.availableAsset ? 1 : -1,
            render: (value) => (
                <div>{ value }</div>
            )
        }, {
            title: '下单冻结',
            dataIndex: 'freezeAsset',
            key: 'freezeAsset',
            sorter: (a, b) => a.freezeAsset > b.freezeAsset ? 1 : -1,
            render: (value) => (
                <div>{ value }</div>
            )
        }, {
            title: '操作',
            key: 'action',
            render: (value) => {
                return (
                    <div className="tableAction">
                        <span className={value.isRecharge ? 'show': 'ban'} onClick={() => this.handleRecharge(value)}>充值</span>
                        <span className={value.isWithdrawable ? 'show': 'ban'} onClick={() => this.handleWithdrawable(value)}>提现</span>
                    </div>
                )
            }
        }]
        let popContent = '资产小于0.001BTC';

        return (
            <WrappedAssetDetailListCmp>
                <WrappedHorizontalFormCmp>
                    <Form className="assetSearch" layout="vertical">
                        <Form.Item label="搜索币种" className="searchCurrency">
                            <Input onChange={this.searchCurrency}/>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox onChange={this.isHideAsset} className="assetCheckBox">隐藏小额资产</Checkbox>
                            <Popover placement="topLeft" content={popContent}>
                                <InfoCircleOutlined />
                            </Popover>
                        </Form.Item>
                    </Form>
                </WrappedHorizontalFormCmp>
                <WrappedTableCmp>
                    <Table 
                        className="assetTable"
                        rowKey={record => record.id}
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                    />
                </WrappedTableCmp>
            </WrappedAssetDetailListCmp>
        );
    }
}