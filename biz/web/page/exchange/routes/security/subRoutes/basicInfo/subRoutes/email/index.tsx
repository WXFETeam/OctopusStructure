import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
// import { hashHistory } from 'react-router';
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp } from './styled';
const lockIcon = require("@webExchangeImgs/mail/lockIcon.png");
const processIcon = require("@webExchangeImgs/mail/processIcon.png");
const arrow = require("@webExchangeImgs/mail/arrow.png");


type IndexProps = {
    [props: string]: any,
    userStore?: any;
    history?: any,
}

type IndexState = {
    display: any;
}

@inject('userStore')
@observer
@renderBreadcrumbs
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            display: 'down'
        }
    }

    toNext(){
        let that = this;
        ajax({
            url: 'security.sendUpdateEmail',
            data:{
                email:'1964418121@qq.com'
            },
            isFullData: true,
            callback(json) {
                if(json.errNo == "0"){
                    that.props.history.push('/security/basicInfo/originmail')
                }
            }
        })
    }

    render() {
        const { history } = this.props;

        const steps = [{
                value:'1',
                label:'1.原邮箱验证'
            },{
                value:'2',
                label:'2.原邮箱密码验证'
            },{
                value:'3',
                label:'3.填写新邮箱'
            },{
                value:'4',
                label:'4.新邮箱验证'
            },,{
                value:'5',
                label:'5.完成'
            }
        ];

        return (
            <WrapperIndexCmp>
                <Row style={{paddingBottom:"40px"}} justify="center">
                    <Col className="title">更换邮箱</Col>
                </Row>
                <Row style={{paddingBottom:"20px"}} justify="center">
                    <Col className="title-confirm">请确认您在访问https://pro.hashkey.com</Col>
                </Row>
                <Row style={{paddingBottom:"58px"}} justify="center">
                    <Col className="title-link">
                        <Row style={{height:"100%"}} justify="center" align="middle">
                            <Col style={{fontSize:0}}>
                                <img className="lock-icon" src={lockIcon} alt=""/>
                            </Col>
                            <Col style={{marginLeft:"8px"}}>
                                <span style={{color:"#5EB44E"}}>https://</span>
                                <span>pro.hashkey.com</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col className="process">
                        <Row style={{marginBottom:"60px"}} className="process-title" align="middle">
                            <Col style={{fontSize:0,marginLeft:"24px"}}><img className="process-icon" src={processIcon} alt=""/></Col>
                            <Col style={{marginLeft:"12px"}}>1.更换邮箱需先启用谷歌或手机验证。</Col>
                            <Col style={{marginLeft:"36px"}}>2.更换邮箱成功后，您的提现将被禁用5天</Col>
                        </Row>
                        <Row style={{marginBottom:"80px"}} className="" justify="center">
                            {steps.map((item,index)=>{
                                if(index == steps.length-1){
                                    return (
                                        <Col key={index}>
                                            <Row style={{marginBottom:"24px"}}>
                                                <img className="step-img" src={require(`@webExchangeImgs/mail/step${item.value}.png`)} alt=""/>
                                            </Row>
                                            <Row justify="center">
                                                {item.label}
                                            </Row>
                                        </Col>
                                    )
                                }
                                return (<Col>
                                    <Row>
                                        <Col>
                                            <Row style={{marginBottom:"24px"}}>
                                                <img className="step-img" src={require(`@webExchangeImgs/mail/step${item.value}.png`)} alt=""/>
                                            </Row>
                                            <Row justify="center">
                                                {item.label}
                                            </Row>
                                        </Col>
                                        <Col>
                                            <img className="arrow-img" src={arrow} alt=""/>
                                        </Col>
                                    </Row>
                                </Col>)
                            })}
                        </Row>
                        <Row style={{marginBottom:"40px"}} justify="center">
                            <Button className="next-btn" type="primary" onClick={this.toNext.bind(this)}>下一步</Button>
                        </Row>
                        <Row justify="center">
                            <Button className="forget-btn" type="link" onClick={()=>this.props.history.push('/security/basicInfo/faceverify')}>丢失邮箱？</Button>
                        </Row>
                    </Col>
                </Row>
            </WrapperIndexCmp>
        )
    }
}