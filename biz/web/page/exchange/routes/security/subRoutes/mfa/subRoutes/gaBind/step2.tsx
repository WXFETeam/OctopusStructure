import * as React from "react";
import { Row, Button, Input } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
import Qrcode from 'qrcode.react';

type props = {
    userStore? : any,
    langStore? : any,
    // history: any
    returnPage : Function,
    nextStep : Function
}

type stepState = {
    gaInfo:any
}


@inject('userStore')
@observer
export default class Step2 extends React.Component<props, stepState> {
    constructor(props: any) {
        super(props);
        this.state = {
            gaInfo:{
                qrcode:'',
                secret:''
            }
        }
    }

    componentDidMount(){
        let gaInfo = common.getLS('GA');
        if(gaInfo){
            this.setState({ gaInfo })
        }else{
            this.getGAInfo();
        }
    }

    getGAInfo=()=>{
        let that = this;
        ajax({
            url: 'MFA.getGoogleKey',
            method: 'get',
            data: {},
            callback(data) {
                that.setState({
                    gaInfo:data
                })
                common.setLS('GA',data);
            }
        })
    }

    handleSubmit=()=>{
        this.props.nextStep(2);
    }

    render() {
        return (
            <Content>
                <p className='stepTitle'>用谷歌验证APP扫描二维码</p>
                <div className='box' style={{width:320}}>
                    <Qrcode value={this.state.gaInfo && this.state.gaInfo.qrcode} size={80}/>
                    <div style={{marginLeft:25}}>
                        <p style={{fontSize:12,color:'#76787E'}}>如果您无法扫描这个二维码，请在App中手动输入这串字符</p>
                        <Input value={this.state.gaInfo && this.state.gaInfo.secret} className='qrCodeInput' disabled/>
                    </div>
                    
                </div>
                <div className='btnWrapper'>
                    <Button className="btn" type="primary" onClick={this.handleSubmit}>下一步</Button>
                </div>
                <p className='return' onClick={()=>this.props.returnPage(2)}>返回上一步</p>
            </Content>
        )
    }
}