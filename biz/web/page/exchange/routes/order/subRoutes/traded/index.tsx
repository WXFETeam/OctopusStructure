import * as React from "react";
import { Row, Col, Table, Button, DatePicker, Select, Input, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderTradedCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Option } = Select;

const typeList = ["001", "002", "003"];

type orderTradedProps = {
	orderTradedStore?: any
}
type orderTradedState = {
	searchObj?: any
}

const DIRCTION = ["全部",  "买入", "卖出"];
@inject('orderTradedStore')
@observer
export default class Traded extends React.Component<orderTradedProps, orderTradedState> {
	constructor(props: any) {
			super(props);
			this.state = {
				searchObj: {
					acctNo: "123@qq.com", // TODO 后期登入后传入字段
					direction: "",
					endDate: "",
					export: false,
					leftCoin: "",
					rightCoin: "",
					size: 10,
					start: 1,
					startDate: ""
				}
			}
	}

	getAllTradedOrders() {
		let that = this;
		const { searchObj } = this.state
		// 获取历史所有委托
		ajax({
				url: "order.getAllTradedOrders",
				data: searchObj,
				callback(data) {
					if(data && data.list) {
						that.props.orderTradedStore.updateOrderTradedList(data.list)
					}
				}
		})
	}

	componentDidMount() {
		this.getAllTradedOrders();
	}

	handleClear = () => {
		this.setState({
			searchObj: {
				acctNo: "123@qq.com", // TODO 后期登入后传入字段
				direction: "",
				endDate: "",
				export: false,
				leftCoin: "",
				rightCoin: "",
				size: 10,
				start: 1,
				startDate: ""
			}
		})
	}
	handleSubmit = () => {
		this.getAllTradedOrders();
	}
	handleExport = () => {
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				export: true
			}
		}, () => {
			this.getAllTradedOrders()
		})
		console.log("导出")
	}

	handlePageChange = (v) => {
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				start: v
			}
		}, () => {
			this.getAllTradedOrders()
		})
	}

	handleOne = (value) => {
		console.log(value, 'value')
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				leftCoin: value
			}
		})
	}
	
	handleTwo = (value) => {
		console.log(value, 'value')
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				rightCoin: value
			}
		})
	}

	handleType = (value) => {
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				direction: value
			}
		})
	}
	dateChange = (value) => {
		const { searchObj } = this.state;
		this.setState({
			searchObj: {
				...searchObj,
				// startDate: moment(value[0]).format('YYYYMMDD'),
				// endDate: moment(value[1]).format('YYYYMMDD')
				startDate: value[0],
				endDate: value[1]
			}
		})
	}
	
	render() {
		const { orderTradedList } = this.props.orderTradedStore;
		const { searchObj } = this.state;
		const {startDate, endDate, direction, leftCoin, rightCoin} = searchObj
		let dataSource = orderTradedList;
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

		const newPagination = {
			pageSize: 1,
			total: dataSource.length,
			onChange: (page) => this.handlePageChange(page),
			showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
		}

		return (
            <WrappedOrderTradedCmp>
				<Header title="历史成交" />
				<WrappedHorizontalFormCmp>
					<Form className="orderTradedForm"  layout="vertical">
						<Form.Item label="时间" className="date">
							<RangePicker bordered={false} onChange={this.dateChange} value={[startDate, endDate]} />
						</Form.Item>
						<Form.Item label="币对" className="pairs">
							<Select 
								onChange={this.handleOne}
								bordered={false}
								value={leftCoin}
							>
								{typeList.map((type, index) =>
									<Option key={index} value={type}>{type}</Option>
								)}
							</Select>
							<div className="connect">-</div>
							<Select 
								onChange={this.handleTwo}
								bordered={false}
								value={rightCoin}
							>
								{typeList.map((type, index) =>
									<Option key={index} value={type}>{type}</Option>
								)}
							</Select>
						</Form.Item>
						<Form.Item label="买卖类别" className="category">
							<Select 
								onChange={this.handleType}
								bordered={false}
								value={direction}
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
						<Form.Item className="export">
							<div  onClick={this.handleExport}>导出全部历史委托记录</div>
						</Form.Item>
					</Form>
				</WrappedHorizontalFormCmp>
				<WrappedTableCmp>
					<Table 
						className="orderTradedTable"
						rowKey={(record) => record.id}
						dataSource={dataSource}
						columns={columns}
						pagination={newPagination}
					/>
				</WrappedTableCmp>
			</WrappedOrderTradedCmp>
        );
	}
}