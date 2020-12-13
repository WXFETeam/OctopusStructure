import * as React from "react";
import { Row, Col, Table, Button, DatePicker, Select, Input, Checkbox, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderHistoricalCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';

const { RangePicker } = DatePicker;
const { Option } = Select;

const typeList = ["001", "002", "003"];

type orderHistoricalProps = {
	orderHistoricalStore?: any
}
type orderHistoricalState = {
	selectedValue: string
}

@inject("orderHistoricalStore")
@observer
export default class Historical extends React.Component<orderHistoricalProps, orderHistoricalState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedValue: ''
        }
    }

    getAllHistoricalOrders() {
        let that = this;
        // 获取历史所有委托
        ajax({
                url: "order.getAllHistoricalOrders",
                data: {
                    acctNo: "123@qq.com",
                    direction: "string",
                    endDate: "string",
                    export: true,
                    leftCoin: "string",
                    rightCoin: "string",
                    size: 0,
                    start: 0,
                    startDate: "string"
                },
                callback(data) {
                    if(data && data.list) {
                        that.props.orderHistoricalStore.updateOrderHistoricalList(data.list)
                    }
                }
        })
    }

    componentDidMount() {
        this.getAllHistoricalOrders();
    }

    selectedChange = (value) => {
        this.setState({
            selectedValue: value
        })
    }
    handleClear = () => {
        this.setState({
                selectedValue: ''
        })
    }
    handleSubmit = () => {

    }
    handleExport = () => {
            console.log("导出")
    }

    hideWithdrawalOrder = () => {
        console.log('cancel')
    }
    render() {
        const { orderHistoricalList } = this.props.orderHistoricalStore;
        const { selectedValue } = this.state;
        let dataSource = orderHistoricalList;
        let columns = [
            {
                title: '交易帐号',
                dataIndex: 'dealId',
                key: 'dealId',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '委托帐号',
                dataIndex: 'delegationId',
                key: 'delegationId',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '交易对',
                dataIndex: 'product',
                key: 'product',
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '方向',
                dataIndex: 'direction',
                key: 'direction',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '价格',
                dataIndex: 'dealPrice',
                key: 'dealPrice',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '数量',
                dataIndex: 'dealNum',
                key: 'dealNum',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '费用',
                dataIndex: 'fee',
                key: 'fee',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '成交额',
                dataIndex: 'dealAmt',
                key: 'dealAmt',    
                render: (value) => (
                    <div>{ value }</div>
            )},{
                title: '时间',
                dataIndex: 'dealTime',
                key: 'dealTime',    
                render: (value) => (
                    <div>{ value }</div>
            )}
        ]

        return (
            <WrappedOrderHistoricalCmp>
                <Header title="历史委托" />
                <WrappedHorizontalFormCmp>
                    <Form className="orderHistoricalForm" layout="vertical">
                        <Form.Item label="时间" className="date">
                            <RangePicker bordered={false}/>
                        </Form.Item>
                        <Form.Item label="币对" className="pairs">
                            <Select 
                                defaultValue={selectedValue}
                                onChange={this.selectedChange}
                                bordered={false}
                            >
                                {typeList.map((type, index) =>
                                        <Option key={index} value={type}>{type}</Option>
                                )}
                            </Select>
                            <div className="connect">-</div>
                            <Select 
                                defaultValue={selectedValue}
                                onChange={this.selectedChange}
                                bordered={false}
                            >
                                {typeList.map((type, index) =>
                                    <Option key={index} value={type}>{type}</Option>
                                )}
                            </Select>
                        </Form.Item>
                        <Form.Item label="买卖类别" className="type">
                            <Select 
                                defaultValue={selectedValue}
                                onChange={this.selectedChange}
                                bordered={false}
                            >
                                {typeList.map((type, index) =>
                                    <Option key={index} value={type}>{type}</Option>
                                )}
                            </Select>
                        </Form.Item>
                        <Form.Item className="btnGroup">
                            <Button className="btn resetBtn" onClick={this.handleClear}>重置</Button>
                            <Button className="btn searchBtn" onClick={this.handleSubmit}>搜索</Button>
                        </Form.Item>
                        <Form.Item className="actionGroup">
                            <Checkbox onChange={this.hideWithdrawalOrder}>隐藏所有已撤单</Checkbox>
                            <div className="export" onClick={this.handleExport}>导出全部历史委托记录</div>
                        </Form.Item>
                    </Form>
                </WrappedHorizontalFormCmp>
                <WrappedTableCmp>
                    <Table 
                        className="orderHistoricalTable"
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        rowClassName={() => {return "orderHistoricalTableRow"}}
                    />
                </WrappedTableCmp>
            </WrappedOrderHistoricalCmp>
        );
    }
}