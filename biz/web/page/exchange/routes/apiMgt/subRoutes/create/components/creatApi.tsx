import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import {Button,Input} from 'antd'
import GoogleCodeModal from '@webExchangeComponents/googleCodeModal'
import {WrappCreateApiCmp } from './styled'

type CreateApiProps={
    userStore?:any,
    history?:any,
    changeStep?:any
}
type CreateApiState={
    apiTag:string,
    isShowGmodal:boolean
}
@inject('userStore')
@observer
export default class CreateApi extends React.Component<CreateApiProps,CreateApiState>{
    constructor(props:CreateApiProps){
        super(props);
        this.state={
            apiTag:"",
            isShowGmodal:false
        }
    }
    _close=()=>{
        const {changeStep}=this.props
        this.setState({
            isShowGmodal:false
        })
        changeStep("2")
        
    }
    changeApiTag=(e)=>{
        this.setState({
            apiTag:e.target.value
        })
    }
    createApiTag=()=>{
        this.setState({
            isShowGmodal:true
        })
    }
    render(){
        const {history}=this.props;
        const {apiTag,isShowGmodal}=this.state
        return (
            <WrappCreateApiCmp>
                    <div className="apiTitle">创建API</div>
                    <section className="content">
                        <p className="apiInfo">创建API密钥可让第三方网站或应用访问HashkeyPro平台的市场或进行实时交易</p>
                        <a className="apiLink">查看API资料 >></a>
                        <Input placeholder="给API密钥一个好记的标签" className="apiInput" value={apiTag} onChange={this.changeApiTag.bind(this)}></Input>
                        <Button className="creatApiBtn" onClick={this.createApiTag.bind(this)} disabled={apiTag.length==0}>创建</Button>
                    </section>
                    {isShowGmodal?<GoogleCodeModal _close={this._close.bind(this)}></GoogleCodeModal>:""}
            </WrappCreateApiCmp>
        )
    }

}