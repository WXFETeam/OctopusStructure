import * as React from "react";
import { Row, Col, Select, Radio, Button, Form,Tabs } from 'antd';
import Header from '../../components/header';
import { WrappedVerticalFormCmp } from 'webExchangeGlobalConf';
import { WrappedRechargeCmp } from './styled';
import attentionList from './attentionList';
const copyIcon = require("@webExchangeImgs/assets/copy.png");
const listIcon = require("@webExchangeImgs/assets/list.png");
import {CopyOutlined,DownloadOutlined} from "@ant-design/icons"
import Qrcode from 'qrcode.react';

type RechargeProps = {
    // rechargeStore?: any
}
type RechargeState = {
    selectedValue?: any,
    currencyList: Array<string>,
    QRCode?: string,
    QRCodeImg?: any,
    radioValue?: string
}

const { Option } = Select;
const { Item } = Form;
const { Button: RadioButton, Group } = Radio;
const {TabPane}=Tabs

// @inject('rechargeStore')
export default class Recharge extends React.Component<RechargeProps, RechargeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            currencyList: ['BTC', 'USDT', 'ETH'],
            selectedValue: 'BTC',
            QRCode: 'asdfghjklpoiuy123456789', 
            QRCodeImg: null,
            radioValue: '0'
        }
    }

    selectedChange(e){
        console.log('change')
    }

    render() {
        const { selectedValue, currencyList, QRCode, QRCodeImg, radioValue } = this.state;

        return (
            <WrappedRechargeCmp>
				<Header title="充值" />
                <WrappedVerticalFormCmp>
                    <Tabs type="card" className="tab-wrapper" tabBarGutter={24}>
                        <TabPane tab="数字货币充值" key="1">
                            <Form layout='vertical'>
                                <Row className="content">
                                    <Col span={12} className='leftPart'>
                                        <Item label="币种">
                                            <Select
                                                defaultValue={selectedValue}
                                                onChange={(e) => this.selectedChange(e)}
                                                bordered={false}
                                                >
                                                {currencyList.map((type, index) =>
                                                    <Option key={index} value={type}>{type}</Option>
                                                )}
                                            </Select>
                                        </Item>
                                        <Row className="attention"  gutter={[12, 0]}>
                                            <Col span={24} className="attentionTitle">温馨提示</Col>
                                            {
                                                attentionList.map(c => (
                                                    <Col span={24} className="attentionCol">
                                                        <span className="attentiolCircle"></span>
                                                        <div>{c}</div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </Col>
                                    <Col span={12} className='rightPart'>
                                        <div className="right-title">选择主网</div>
                                        <Tabs type="card" className="tab-right-wrapper" tabBarGutter={20}>
                                            <TabPane tab="ERC20" key="1">
                                                <div className="tabPan-content">
                                                    <div className="right-title">BTC地址：</div>
                                                    <div className="BTC-address">
                                                        <div className="BTC-con">
                                                            <span className="address">467896748</span>
                                                            <div>
                                                                <Button style={{marginRight:"20px"}} icon={<img style={{marginRight:"20px"}} src={copyIcon}></img>}>复制地址</Button>
                                                                <Button icon={<DownloadOutlined></DownloadOutlined>}>下载二维码</Button>
                                                            </div>
                                                        </div>
                                                        <div className="qrcode-box">
                                                            <Qrcode value="" size={96}/>
                                                        </div>
                                                    </div>
                                                    <div className="lookRecord">
                                                        <img src={listIcon}></img> <a className="lookHref">查看充币记录跟踪状态 >></a>
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="Omni" key="2">
                                                779700
                                            </TabPane>  
                                        </Tabs>
                                    </Col>
                                </Row>
                            </Form>
                        </TabPane>
                        <TabPane tab="法币充值" key="2">
                              
                        </TabPane> 
                    </Tabs>
                </WrappedVerticalFormCmp>
                
                {/* <Row className="accountAddress" align="middle">
                    <Col span={3}>
                        <Row>地址</Row>
                        <Row className="addressP"></Row>
                    </Col>
                    <Col span={21} >
                        <Row className="QRCode">{ QRCode }</Row>
                        <Row>
                            <Button>复制</Button>
                        </Row>
                    </Col>
                </Row> */}
            </WrappedRechargeCmp>
        )
    }
}