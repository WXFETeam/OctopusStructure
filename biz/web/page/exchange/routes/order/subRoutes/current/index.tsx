import * as React from "react";
import { Row, Col, Table, Select, Button, message, Form } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedOrderCurrentCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import Header from '../../components/header';

type orderCurrentProps = {
	orderCurrentStore?: any
}
type orderCurrentState = {
	selectValue: string,
	page: number
}

const { Option } = Select;
const typeList = ["全部", "001", "002", "003"];
@inject('orderCurrentStore')
@observer
export default class Current extends React.Component<orderCurrentProps, orderCurrentState> {
	constructor(props: orderCurrentProps) {
		super(props);
		this.state = {
			selectValue: "",
			page: 0
		}
	}

	getAllOrders() {
		let that = this;
		const { selectValue, page } = this.state;
		// TODO 入参数据假的
		let data = {
			acctNo: "123@qq.com",
			size: 1,
			start: page || 1,
			type: selectValue || typeList[1]
		}
		// 获取当前所有委托
		ajax({
				method: "post",
				url: "order.getAllOrders",
				data: data,
				callback(data) {
					if(data && data.length >= 0) {
						that.props.orderCurrentStore.updateOrderCurrentList(data)
					}
				}
		})
	}

	componentDidMount() {
		this.getAllOrders();
	}
	handleSelect= (value) => {
		this.setState({
			selectValue: value
		}, () => {
			// 调取接口
			this.getAllOrders()
		})
	}

	cancelOrder(id:string=""){
		let that = this;
		ajax({
			url: "order.cancelOrder",
			data: {id: id || ''},
			callback(data) {
				message.success('取消成功~');
				// 取消成功后删除对应数据 （？重新获取list）
				that.setState({
					selectValue: "全部"
				})
				that.props.orderCurrentStore.cancelOrder(id || '')
			}
		})
	}

	handleCancel(record){
		if(record.isCancle){
			this.cancelOrder(record.id);
		}
	}

	cancelAllOrders = () => {
		this.cancelOrder();
	}

	handlePageChange = (v) => {
		this.setState({page: v}, () => {
			this.getAllOrders()
		})
	}
	render() {
		const { orderCurrentList } = this.props.orderCurrentStore;
		const { selectValue } = this.state;
		let dataSource = orderCurrentList;
		let columns = [
			{
				title: '时间',
				dataIndex: 'delegationTime',
				key: 'delegationTime',    
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '交易对',
				dataIndex: 'product',
				key: 'product',
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '类型',
				dataIndex: 'type',
				key: 'type',    
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
				dataIndex: 'price',
				key: 'price',    
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '数量',
				dataIndex: 'num',
				key: 'num',    
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '完成度',
				dataIndex: 'completeness',
				key: 'completeness',    
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '成交额',
				dataIndex: 'dealAmt',
				key: 'dealAmt',    
				render: (value) => (
					<div>{ value }</div>
			)},{
				title: '触发条件',
				dataIndex: 'condition',
				key: 'condition',    
				render: (value) => (
					<div>{ value }</div>
			)}, {
				title: '操作',
				key: 'action',    
				render: (value) => {
					return (
						<div className='show' onClick={() => this.handleCancel(value)}>
							撤单
						</div>
				)
				}
			}
		]
		
		const newPagination = {
			pageSize: 1,
			total: dataSource.length,
			onChange: (page) => this.handlePageChange(page),
			showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
		}
		return (
			<WrappedOrderCurrentCmp>
				<Header title="当前委托" />
				<WrappedHorizontalFormCmp>
					<Form className="orderCurrentForm" layout="vertical">
						<Form.Item label="筛选">
							<Select 
								className="selectContent"
								value={selectValue}
								onChange={this.handleSelect}
								bordered={false}
							>
								{typeList.map((t, index) =>
										<Option key={index} value={t}>{t}</Option>
								)}
							</Select>
						</Form.Item>
						<Form.Item className="btnItem">
							<Button onClick={this.cancelAllOrders}>
								取消全部订单
							</Button>
						</Form.Item>
					</Form>
				</WrappedHorizontalFormCmp>
				<WrappedTableCmp>
					<Table 
						className="orderCurrentTable"
						dataSource={dataSource}
						rowKey={(record) => record.id}
						columns={columns}
						pagination={newPagination}
					/>
				</WrappedTableCmp>
			</WrappedOrderCurrentCmp>
		)
	}
}