import React, { useState } from 'react';
import { Button, Select, DatePicker, Table, Form } from 'antd';
import { WrappedHorizontalFormCmp, WrappedTableCmp } from 'webExchangeGlobalConf';
import columns from './columns';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Item } = Form;
const Content = (props) => {
    const currencyList = ['USDT', 'ETH', 'BTC'];
    const newPagination = {
        pageSize: 5,
        total: props.list.length,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
    };
    const [form, setForm] = useState({
        currency: '',
        startDate: undefined,
        endDate: undefined
    });
    function dateChange(value) {
        console.log(value, 'date');
        setForm(Object.assign(Object.assign({}, form), { startDate: value[0], endDate: value[1] }));
    }
    function currencyChange(value) {
        console.log(value, 'currency');
        setForm(Object.assign(Object.assign({}, form), { currency: value }));
    }
    function clearAll() {
        setForm({
            currency: '',
            startDate: '',
            endDate: ''
        });
        props.setSubForm({
            form
        });
    }
    function search() {
        props.setSubForm({
            form
        });
    }
    return (React.createElement("div", { className: "recordContentWrapped" },
        React.createElement(WrappedHorizontalFormCmp, null,
            React.createElement(Form, { className: "recordForm", layout: "vertical" },
                React.createElement(Item, { label: "\u65F6\u95F4", className: "date" },
                    React.createElement(RangePicker, { bordered: false, value: [form.startDate, form.endDate], onChange: (value) => dateChange(value) })),
                React.createElement(Item, { label: "\u5E01\u79CD", className: "currency" },
                    React.createElement(Select, { value: form.currency, onChange: (value) => currencyChange(value), bordered: false }, currencyList.map((type, index) => React.createElement(Option, { key: index, value: type }, type)))),
                React.createElement(Item, { className: "btnGroup" },
                    React.createElement(Button, { className: "btn resetBtn", onClick: () => clearAll() }, "\u91CD\u7F6E"),
                    React.createElement(Button, { className: "btn searchBtn", onClick: () => search() }, "\u641C\u7D22"))),
            React.createElement("a", { className: "export" }, "\u5BFC\u51FA\u5168\u90E8\u8BB0\u5F55")),
        React.createElement(WrappedTableCmp, null,
            React.createElement(Table, { className: "recordTable", rowKey: record => record.id, dataSource: props.list, columns: columns, pagination: newPagination }))));
};
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
//# sourceMappingURL=content.js.map