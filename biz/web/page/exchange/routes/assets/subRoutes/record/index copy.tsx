import * as React from "react";
import { Button, Select, DatePicker, Table, Row, Col, Form, Radio } from 'antd';
import { observer, inject } from 'mobx-react/index';
import moment from 'moment';
import Header from '../../components/header';
import { WrappedRecordCmp } from './styled';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';

type RecordProps = {
    recordStore?: any
}
type RecordState = {
    withDrawForm?: any,
    rechargeForm?: any,
    searchType?: any,
    searchCurrency?: any,
    pagination?: any
}

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Item } = Form;

const currencyList = ['USDT', 'ETH', 'BTC'];

@inject('recordStore')
@observer
export default class Record extends React.Component<RecordProps, RecordState> {
    constructor(props: RecordProps) {
        super(props);
        this.state = {
            rechargeForm: {
                startDate: '',
                selectedCurrency: '',
                endDate: ''
            },
            withDrawForm: {
                startDate: '',
                selectedCurrency: '',
                endDate: ''
            },
            searchType: 'recharge',
            searchCurrency: 'digital',
            pagination: {}
        }
    }
    getRecordList(){
        const {searchType, searchCurrency} = this.state;
        console.log(searchType, searchCurrency, 'changed')
        // 调用ajax 传参不一样
        let that = this;
        let url = 'assets.getRechargeRecordList' // 'assets.getWithdrawRecordList'
        ajax({
            url: url,
            callback(data) {
                if (searchType === 'recharge') {
                    that.props.recordStore.updateRechargeRecord(data.list)
                } else {
                    that.props.recordStore.updateWithdrawRecord(data.list)
                }
            }
        })
    }
    componentDidMount() {
        this.getRecordList()
    }
    columns = () => ([
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',    
            render: (value) => (
                <div>{ value }</div>
        )},{
            title: '币对',
            dataIndex: 'currency',
            key: 'currency',
            render: (value) => (
                <div>{ value }</div>
        )},{
            title: '类型',
            dataIndex: 'type',
            key: 'type',    
            render: (value) => (
                <div>{ value }</div>
        )},{
            title: '数量',
            dataIndex: 'size',
            key: 'size',    
            render: (value) => (
                <div>{ value }</div>
        )},{
            title: '时间',
            dataIndex: 'date',
            key: 'date',    
            render: (value) => (
                <div>{ value }</div>
        )}
    ])
    selectedChange = (value) => {
        const { searchType } = this.state;
        if(searchType === 'recharge') {
            this.setState({
                rechargeForm: {
                    ...this.state.rechargeForm,
                    selectedCurrency: value
                }
            })
        } else {
            this.setState({
                withDrawForm: {
                    ...this.state.withDrawForm,
                    selectedCurrency: value
                }
            })
        }
    }
    handleClear= () => {
        console.log(222)
        const { searchType } = this.state;
        if (searchType === 'recharge') {
            this.setState({
                rechargeForm: {
                    startDate: '',
                    selectedCurrency: '',
                    endDate: ''
                }
            })
        } else {
            this.setState({
                withDrawForm: {
                    startDate: '',
                    selectedCurrency: '',
                    endDate: ''
                }
            })
        }
    }
    dateChange = (value) => {
        const { searchType } = this.state;
        if(searchType === 'recharge'){
            this.setState({
                rechargeForm: {
                    ...this.state.rechargeForm,
                    // startDate:moment(value[0]).format('YYYY-MM-DD'),
                    // endDate: moment(value[1]).format('YYYY-MM-DD')
                    startDate: value[0],
                    endDate: value[1]
                }
            })
        } else {
            this.setState({
                withDrawForm: {
                    ...this.state.withDrawForm,
                    // startDate:moment(value[0]).format('YYYY-MM-DD'),
                    // endDate: moment(value[1]).format('YYYY-MM-DD')
                    startDate: value[0],
                    endDate: value[1]
                }
            })
        }
    }
    handleSubmit = () => {
        console.log(333)
    }
    getForm() {
        const { rechargeForm, withDrawForm, searchType } = this.state;
        const currency = searchType === 'recharge' ? rechargeForm.selectedCurrency : withDrawForm.selectedCurrency
        const start = searchType === 'recharge' ? rechargeForm.startDate : withDrawForm.startDate
        const end = searchType === 'recharge' ? rechargeForm.endDate : withDrawForm.endDate
        console.log(currency, 'form changed')
        return (
            <WrappedHorizontalFormCmp>
                <Form className="recordForm" layout="vertical">
                    <Item label="时间" className="date">
                        <RangePicker bordered={false} onChange={this.dateChange} value={[start, end]}/>
                    </Item>
                    <Item label="币种" className="currency">
                        <Select 
                            value={currency}
                            onChange={this.selectedChange}
                            bordered={false}
                        >
                            {currencyList.map((type, index) =>
                                <Option key={index} value={type}>{type}</Option>
                            )}
                        </Select>
                    </Item>
                    <Item className="btnGroup">
                        <Button className="btn resetBtn" onClick={this.handleClear}>重置</Button>
                        <Button className="btn searchBtn" onClick={this.handleSubmit}>搜索</Button>
                    </Item>
                </Form>
                <a className="export">导出全部记录</a>
            </WrappedHorizontalFormCmp>
        )
    }
    handleTableChange = (page) => {
        console.log(page, 'page')
    }
    getTable(){
        const { rechargeRecordList, withdrawRecordList} = this.props.recordStore;
        const { searchType } = this.state;
        let dataSource = searchType === 'recharge'? rechargeRecordList: withdrawRecordList
        const newPagination = {
            pageSize: 5,
            total: dataSource.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            onChange: (page) => this.handleTableChange(page)
        }
        return(
            <WrappedTableCmp>
                <Table 
                    className="recordTable"
                    rowKey={record => record.id}
                    dataSource={dataSource}
                    columns={this.columns()}
                    pagination={newPagination}
                />
            </WrappedTableCmp>
        )
    }
    
    getContentRender() {
        return (
            <Row className="recordContentWrapped">
                <Col className="searchForm">{ this.getForm() }</Col>
                <Col>
                    { this.getTable() }
                </Col>
            </Row>
        )
    }

    typeChange = (e) => {
        // state中的type类型更改
        this.setState({searchType: e.target.value}, () => {
            this.getRecordList()
            this.getContentRender()
        })
    }
    currencyChange = (e) => {
        // state中的currency类型更改
        this.setState({searchCurrency: e.target.value}, () => {
            this.getRecordList()
            this.getContentRender()
        }) 
    }
    render() {
        const { searchCurrency, searchType } = this.state;
		return (
            <WrappedRecordCmp>
				<Header title="充提记录" />
                <Row className="searchWrapped">
                    <Col span={8}>
                        <Row align="middle">
                            <span className="btn-title">类型</span>
                            <Radio.Group defaultValue={searchType} buttonStyle="solid" onChange={this.typeChange}>
                                <Radio.Button value="recharge">充值</Radio.Button>
                                <Radio.Button value="withDraw">提现</Radio.Button>
                            </Radio.Group>
                         </Row>
                    </Col>
                    <Col>
                        <Row align="middle">
                            <span className="btn-title">货币</span>
                            <Radio.Group defaultValue={searchCurrency} buttonStyle="solid"  onChange={this.currencyChange}>
                                <Radio.Button value="digital">数字货币</Radio.Button>
                                <Radio.Button value="legal">法币</Radio.Button>
                            </Radio.Group>
                         </Row>  
                    </Col>
                </Row>
                {
                    this.getContentRender() 
                }
			</WrappedRecordCmp>
        );
    }
}