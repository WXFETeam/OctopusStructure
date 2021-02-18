import * as React from "react";
import { Row, Button, Input } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
const noteBook = require("@webExchangeImgs/userCenter/twofa/noteBook.png");

type props = {
    userStore?: any,
    langStore?: any,
    // history: any
    returnPage : Function,
    nextStep : Function
}

type stepState = {
    gaInfo:any
}

@inject('userStore')
@observer
export default class Step3 extends React.Component<props, stepState> {
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
        }
    }

    handleSubmit=()=>{
        this.props.nextStep(3);
    }

    render() {
        return (
            <Content>
                <p className='stepTitle'>请把密钥写在纸上。当手机丢失时，这串密钥能够帮助您重置谷歌验证</p>
                <div className='box' style={{ width: 365 }}>
                    <img src={noteBook}/>
                    <div style={{ marginLeft: 25 }}>
                        <p style={{ fontSize: 12, color: '#76787E' }}>通常，提交工单重置谷歌验证至少需要花7天时间</p>
                        <Input className='qrCodeInput' style={{marginTop:18,textAlign:'center'}} disabled value={this.state.gaInfo && this.state.gaInfo.secret}/>
                    </div>

                </div>
                <div className='btnWrapper'>
                    <Button className="btn" type="primary" onClick={this.handleSubmit}>下一步</Button>
                </div>
                <p className='return' onClick={()=>this.props.returnPage(3)}>返回上一步</p>
            </Content>
        )
    }
}