import * as React from "react";
import { observer, inject } from 'mobx-react';
import {Button} from 'antd'
import {WrappedNoApiCmp } from './styled'
const API = require("@webExchangeImgs/api/API.png");

type IndexProps={
    userStore?:any,
    history?:any,
    APIRecordStore?:any
}
type IndexState={
    count:number
}
@inject('userStore','APIRecordStore') 
@observer
export default class Index extends React.Component<IndexProps,IndexState>{
    constructor(props:IndexProps){
        super(props);
        this.state={
            count:1
        }
    }
    componentWillMount(){

    }
    render(){
        const {history}=this.props;
        const {count}=this.state
        return (
            <WrappedNoApiCmp>
                <img src={API} alt=""/>
                <div className="apiTitle">API管理</div>
                <div className="apiInfo">创建API密钥可让第三方网站或应用访问HashkeyPro平台的市场或进行实时交易</div>
                <a className="apiLink">查看API资料 >></a>
                <Button className="creatApiBtn" onClick={() => history.push("/api/createApi")}>立即创建</Button>
            </WrappedNoApiCmp> 
        )
    }
    
}