import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import {Button,Input} from 'antd'
// import GoogleCodeModal from '@webExchangeComponents/googleCodeModal'
import {WrappRecordApiKeyCmp } from './styled'
import {CopyOutlined} from '@ant-design/icons'
import Qrcode from 'qrcode.react';
type RecordApiKeyProps={
    userStore?:any,
    history?:any
}
type RecordApiKeyState={
    apiTag:string,
    isShowGmodal:boolean,
    qrcode:any
}
@inject('userStore')
@observer
export default class RecordApiKey extends React.Component<RecordApiKeyProps,RecordApiKeyState>{
    constructor(props:RecordApiKeyProps){
        super(props);
        this.state={
            apiTag:"",
            isShowGmodal:false,
            qrcode:""
        }
    }
    _close=()=>{
        this.setState({
            isShowGmodal:false
        })
    }
    changeApiTag=(e)=>{
        this.setState({
            apiTag:e.target.value
        })
    }
    RecordApiKeyTag=()=>{
        this.setState({
            isShowGmodal:true
        })
    }
    copyToClipboard=()=>{
        document.execCommand("copy")
    }
    render(){
        const {history}=this.props;
        const {apiTag,qrcode}=this.state
        return (
            <WrappRecordApiKeyCmp>
                    <div className="apiTitle">记录API密钥</div>
                    <section className="content">
                        <p className="apiInfo">基金1号专用API</p>
                        <div className="barCode"><Qrcode value={this.state.qrcode} size={128} /></div>
                        <div  className="recordInfoBox">
                            <div className="KeyTitle">API密钥</div>
                            <div className="keyContent">sdafqafqeey2iey12iye12ieg12iog2f</div>
                            <Button icon={<CopyOutlined/>} onClick={this.copyToClipboard.bind(this)}>复制密钥</Button>
                        </div>
                        <Button className="creatApiBtn" onClick={this.RecordApiKeyTag.bind(this)} disabled={apiTag.length==0}>我已妥善保存密钥</Button>
                        <a href="" className="apiLink">继续创建API</a>
                    </section>
            </WrappRecordApiKeyCmp>
        )
    }

}