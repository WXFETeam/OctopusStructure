import React, { Fragment, useState } from 'react';
import moment from 'moment';
import { Button, Select, DatePicker, Table, Row, Col, Form, Radio } from 'antd';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import columns from './columns';
import ClearableLabeledInput from 'antd/lib/input/ClearableLabeledInput';

const { Option } = Select;
const { RangePicker } = DatePicker;
const { Item } = Form;

const Content = (props) => {
    const currencyList = ['USDT', 'ETH', 'BTC'];
    const newPagination = {
        pageSize: 5,
        total: props.list.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    }
    const [form, setForm] = useState({
        currency: '',
        startDate: undefined,
        endDate: undefined
    })
    function dateChange(value) {
        console.log(value, 'date')
        setForm({
            ...form,
            startDate: value[0],
            endDate: value[1]
        })
    }
    function currencyChange(value) {
        console.log(value, 'currency')
        setForm({
            ...form,
            currency: value
        })
    }
    function clearAll() {
        setForm({
            currency: '',
            startDate: '',
            endDate: ''
        })
        props.setSubForm({
            form
        })
    }
    function search() {
        props.setSubForm({
            form
        })
    }

    return (
        <div className="recordContentWrapped">
            <WrappedHorizontalFormCmp>
                <Form className="recordForm" layout="vertical">
                    <Item label="时间" className="date">
                        <RangePicker bordered={false} value={[form.startDate, form.endDate]} onChange={(value) => dateChange(value)}/>
                    </Item>
                    <Item label="币种" className="currency">
                        <Select 
                            value={form.currency}
                            onChange={(value) => currencyChange(value)}
                            bordered={false}
                        >
                            {currencyList.map((type, index) =>
                                <Option key={index} value={type}>{type}</Option>
                            )}
                        </Select>
                    </Item>
                    <Item className="btnGroup">
                        <Button className="btn resetBtn" onClick={() => clearAll()}>重置</Button>
                        <Button className="btn searchBtn" onClick={() => search()}>搜索</Button>
                    </Item>
                </Form>
                <a className="export">导出全部记录</a>
            </WrappedHorizontalFormCmp>
            <WrappedTableCmp>
                <Table 
                    className="recordTable"
                    rowKey={record => record.id}
                    dataSource={props.list}
                    columns={columns}
                    pagination={newPagination}
                />
            </WrappedTableCmp>
        </div>
    )
}
export default Content;



// selectedChange = (value) => {
//     const { searchType } = this.state;
//     if(searchType === 'recharge') {
//         this.setState({
//             rechargeForm: {
//                 ...this.state.rechargeForm,
//                 selectedCurrency: value
//             }
//         })
//     } else {
//         this.setState({
//             withDrawForm: {
//                 ...this.state.withDrawForm,
//                 selectedCurrency: value
//             }
//         })
//     }
// }
// handleClear= () => {
//     console.log(222)
//     const { searchType } = this.state;
//     if (searchType === 'recharge') {
//         this.setState({
//             rechargeForm: {
//                 startDate: '',
//                 selectedCurrency: '',
//                 endDate: ''
//             }
//         })
//     } else {
//         this.setState({
//             withDrawForm: {
//                 startDate: '',
//                 selectedCurrency: '',
//                 endDate: ''
//             }
//         })
//     }
// }
// dateChange = (value) => {
//     const { searchType } = this.state;
//     if(searchType === 'recharge'){
//         this.setState({
//             rechargeForm: {
//                 ...this.state.rechargeForm,
//                 // startDate:moment(value[0]).format('YYYY-MM-DD'),
//                 // endDate: moment(value[1]).format('YYYY-MM-DD')
//                 startDate: value[0],
//                 endDate: value[1]
//             }
//         })
//     } else {
//         this.setState({
//             withDrawForm: {
//                 ...this.state.withDrawForm,
//                 // startDate:moment(value[0]).format('YYYY-MM-DD'),
//                 // endDate: moment(value[1]).format('YYYY-MM-DD')
//                 startDate: value[0],
//                 endDate: value[1]
//             }
//         })
//     }
// }
// handleSubmit = () => {
//     console.log(333)
// }

// handleTableChange = (page) => {
//     console.log(page, 'page')
// }


// getTable(){
//     const { rechargeRecordList, withdrawRecordList} = this.props.recordStore;
//     const { searchType } = this.state;
//     let dataSource = searchType === 'recharge'? rechargeRecordList: withdrawRecordList
//     const newPagination = {
//         pageSize: 5,
//         total: dataSource.length,
//         showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
//         onChange: (page) => this.handleTableChange(page)
//     }
//     return(
//         <WrappedTableCmp>
//             <Table 
//                 className="recordTable"
//                 rowKey={record => record.id}
//                 dataSource={dataSource}
//                 columns={this.columns()}
//                 pagination={newPagination}
//             />
//         </WrappedTableCmp>
//     )
// }


