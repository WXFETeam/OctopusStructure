import * as React from "react";
import { Select, Radio, Input, Button, Form, Row, Col, Tabs } from 'antd';
import Header from '../../components/header';
import { WrappedVerticalFormCmp } from 'webExchangeGlobalConf';
import { WrappedWithdrawCmp } from './styled';


type WithdrawProps = {
    // withdrawStore?: any
}
type WithdrawState = {
    selectedValue?: any,
    currencyList: Array<string>,
    QRCode?: string,
    QRCodeImg?: any,
    radioValue?: string
}

const { Option } = Select;
const { Item } = Form;
const { Button: RadioButton, Group } = Radio;
const { TabPane } = Tabs

export default class Assets extends React.Component<WithdrawProps, WithdrawState> {
    constructor(props: WithdrawProps) {
        super(props);
        this.state = {
            currencyList: ['BTC', 'USDT', 'ETH'],
            selectedValue: 'BTC',
            radioValue: '0'
        }
    }

    onChange = () => {
        console.log('caneg')
    }
    selectedChange(e) {
        console.log(e, '111')
    }

    render() {
        const { selectedValue, currencyList, radioValue } = this.state;

        return (
            <WrappedWithdrawCmp>
                <Header title="提现" />
                <WrappedVerticalFormCmp>
                    <Tabs type="card" className="tab-wrapper" tabBarGutter={24}>
                        <TabPane tab="数字货币充值" key="1">
                            <Form layout='vertical'>
                                <Row className='content'>
                                    <Col span={12} className='leftPart'>
                                        <Item label="币种">
                                            <Select
                                                defaultValue={selectedValue}
                                                onChange={(e) => this.selectedChange(e)}
                                                bordered={false}
                                            >
                                                {currencyList.map((type, index) => <Option key={index} value={type}>
                                                        <i>
                                                            <img src={require(`@webExchangeImgs/assets/${type}.png`)} alt=""/>
                                                        </i>
                                                        <span>{type}</span>
                                                    </Option>
                                                )}
                                            </Select>
                                        </Item>
                                        <Row className='assetInfo'>
                                            <Col span={6}>总资产</Col>
                                            <Col>0.0000000000 BTC</Col>
                                        </Row>
                                        <Row className='assetInfo'>
                                            <Col span={6}>下单冻结</Col>
                                            <Col>0.0000000000 BTC</Col>
                                        </Row>
                                        <Row className='assetInfo'>
                                            <Col span={6}>可用资产</Col>
                                            <Col>0.0000000000 BTC</Col>
                                        </Row>
                                        <Row style={{ marginTop: 15 }}>请勿直接体现至众筹或ICO地址，否则将无法收到众筹或ICO发放的代币。</Row>
                                    </Col>
                                    <Col span={12} className='rightPart'>
                                        <div className="right-title">选择主网</div>
                                        <Tabs type="card" className="tab-right-wrapper" tabBarGutter={20}>
                                            <TabPane tab="ERC20" key="1">
                                                <Item className='inputWrapper bold'>
                                                    <Input defaultValue='您未添加白名单地址' suffix={<a>地址管理>></a>} />
                                                </Item>
                                                <Item className='inputWrapper'>
                                                    <Input
                                                        placeholder='数量'
                                                        suffix={<div className='suffix'><a>最大</a>|<span>BTC</span></div>}
                                                    />
                                                </Item>
                                                <Row className='tip' style={{ justifyContent: 'space-between' }}>
                                                    <Col>最小提现数量 <span className='amount'>0.001 BTC</span></Col>
                                                    <Col>可用资产 <span className='amount'>0.001 BTC</span></Col>
                                                </Row>
                                                <Row className='tip'>
                                                    <Col className='amount'>手续费： 0.0004 BTC</Col>
                                                </Row>
                                                <Row className='tip'>
                                                    <Col className='amount'>实际到帐： 0.0004 BTC</Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tab="Omni" key="2">
                                            Omni
                                            </TabPane>
                                        </Tabs>
                                        <Button className='btn'>提现</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </TabPane>
                        <TabPane tab="法币充值" key="2">
                        法币充值
                        </TabPane>
                    </Tabs>
                </WrappedVerticalFormCmp>
            </WrappedWithdrawCmp>
        )
    }
}