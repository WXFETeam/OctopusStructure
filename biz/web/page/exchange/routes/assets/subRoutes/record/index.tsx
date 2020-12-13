import React, { useEffect, useState } from "react";
import { Row, Col, Radio } from 'antd';
import Header from '../../components/header';
import { WrappedRecordCmp } from './styled';
import Content from './content';

const Record: React.FC = () => {
    const [recordType, setRecordType] = useState('recharge');
    const [currencyType, setCurrencyType] = useState('digital');
    const [list, setList] = useState([]);
    const [subForm, setSubForm]= useState({
        currency: '',
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        getRecordList()
    }, [recordType, currencyType, subForm])
    
    function getRecordList() {
        console.log('changed')
        // 调用ajax 传参不一样
        // 参数：1.recordType 2.currencyType 3.date 4.currency
        let that = this;
        let url = 'assets.getRechargeRecordList' // 'assets.getWithdrawRecordList'
        ajax({
            url: url,
            callback(data) {
                setList(data.list)
            }
        })
    }

    return (
        <WrappedRecordCmp>
				<Header title="充提记录" />
                <Row className="searchWrapped">
                    <Col span={8}>
                        <Row align="middle">
                            <span className="btn-title">类型</span>
                            <Radio.Group defaultValue={recordType} buttonStyle="solid" onChange={(e) => setRecordType(e.target.value)}>
                                <Radio.Button value="recharge">充值</Radio.Button>
                                <Radio.Button value="withDraw">提现</Radio.Button>
                            </Radio.Group>
                         </Row>
                    </Col>
                    <Col>
                        <Row align="middle">
                            <span className="btn-title">货币</span>
                            <Radio.Group defaultValue={currencyType} buttonStyle="solid"  onChange={(e) => setCurrencyType(e.target.value)}>
                                <Radio.Button value="digital">数字货币</Radio.Button>
                                <Radio.Button value="legal">法币</Radio.Button>
                            </Radio.Group>
                         </Row>  
                    </Col>
                </Row>
                <Content list={list} subForm={subForm} setSubForm={setSubForm}/>
			</WrappedRecordCmp>
    )
}
export default Record;
    
    
    
    
    