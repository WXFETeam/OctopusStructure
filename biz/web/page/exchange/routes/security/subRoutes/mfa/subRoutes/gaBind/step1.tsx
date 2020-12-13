import * as React from "react";
import { Row, Button } from 'antd';
import { Content } from './styled';
import { observer, inject } from 'mobx-react/index';
const appStore = require("@webExchangeImgs/userCenter/twofa/appStore.png");
const googlePlay = require("@webExchangeImgs/userCenter/twofa/googlePlay.png");

type props = {
    userStore? : any,
    langStore? : any,
    // history: any
    nextStep : Function
}


@inject('userStore')
@observer
export default class Step1 extends React.Component<props, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            
        }
    }

    handleSubmit=()=>{
        this.props.nextStep(1);
    }

    render() {
        return (
            <Content>
                <p className='stepTitle'>下载谷歌验证APP</p>
                <div className='box'>
                    <img src={appStore}/>
                    <img src={googlePlay}/>
                </div>
                <div className='btnWrapper'>
                    <Button className="btn" type="primary" onClick={this.handleSubmit} style={{marginTop:86}}>下一步</Button>
                </div>
            </Content>
        )
    }
}