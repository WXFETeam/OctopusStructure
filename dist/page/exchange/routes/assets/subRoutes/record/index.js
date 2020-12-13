import React, { useEffect, useState } from "react";
import { Row, Col, Radio } from 'antd';
import Header from '../../components/header';
import { WrappedRecordCmp } from './styled';
import Content from './content';
const Record = () => {
    const [recordType, setRecordType] = useState('recharge');
    const [currencyType, setCurrencyType] = useState('digital');
    const [list, setList] = useState([]);
    const [subForm, setSubForm] = useState({
        currency: '',
        startDate: '',
        endDate: ''
    });
    useEffect(() => {
        getRecordList();
    }, [recordType, currencyType, subForm]);
    function getRecordList() {
        console.log('changed');
        // 调用ajax 传参不一样
        // 参数：1.recordType 2.currencyType 3.date 4.currency
        let that = this;
        let url = 'assets.getRechargeRecordList'; // 'assets.getWithdrawRecordList'
        ajax({
            url: url,
            callback(data) {
                setList(data.list);
            }
        });
    }
    return (React.createElement(WrappedRecordCmp, null,
        React.createElement(Header, { title: "\u5145\u63D0\u8BB0\u5F55" }),
        React.createElement(Row, { className: "searchWrapped" },
            React.createElement(Col, { span: 8 },
                React.createElement(Row, { align: "middle" },
                    React.createElement("span", { className: "btn-title" }, "\u7C7B\u578B"),
                    React.createElement(Radio.Group, { defaultValue: recordType, buttonStyle: "solid", onChange: (e) => setRecordType(e.target.value) },
                        React.createElement(Radio.Button, { value: "recharge" }, "\u5145\u503C"),
                        React.createElement(Radio.Button, { value: "withDraw" }, "\u63D0\u73B0")))),
            React.createElement(Col, null,
                React.createElement(Row, { align: "middle" },
                    React.createElement("span", { className: "btn-title" }, "\u8D27\u5E01"),
                    React.createElement(Radio.Group, { defaultValue: currencyType, buttonStyle: "solid", onChange: (e) => setCurrencyType(e.target.value) },
                        React.createElement(Radio.Button, { value: "digital" }, "\u6570\u5B57\u8D27\u5E01"),
                        React.createElement(Radio.Button, { value: "legal" }, "\u6CD5\u5E01"))))),
        React.createElement(Content, { list: list, subForm: subForm, setSubForm: setSubForm })));
};
export default Record;
//# sourceMappingURL=index.js.map