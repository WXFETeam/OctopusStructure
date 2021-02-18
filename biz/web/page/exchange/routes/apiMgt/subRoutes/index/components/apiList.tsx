import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import {toJS} from "mobx";
import {Button,Input,Collapse,Popover,Checkbox,Row,Col,Radio,Form} from 'antd'
import {WrappApiListCmp } from './styled'
import {InfoCircleFilled,CloseOutlined,DownOutlined} from '@ant-design/icons'
import { Item } from "rc-menu";

const {Panel}=Collapse
const {Search}=Input;
type ApiListProps={
    userStore?:any,
    history?:any,
    APIRecordStore?:any
}
type ApiListState={
    apiTag:string, 
    count?:number, 
    isShowGmodal:boolean,
    apiList:any,
    afterApiLIst:any,
    ipAddress:any,
    ipNoPermissionList:Array<any>,
    APINoPermissionList:Array<any>,
    isEditList:Array<any>,//判断是否是正在编辑状态
}
@inject('userStore','APIRecordStore')
@observer
export default class ApiList extends React.Component<ApiListProps,ApiListState>{
    constructor(props:ApiListProps){
        super(props);
        this.state={
            apiTag:"",
            count:0,
            isShowGmodal:false,
            apiList:[],//未修改状态的api列表
            afterApiLIst:[],//编辑过状态的api列表
            isEditList:[],
            ipAddress:"",
            ipNoPermissionList:[],//当前条目ip地址全限无限制是否可被选择
            APINoPermissionList:[],//当前条目api权限允许提现是否可被选择
        }
    }
    formRef=null;
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
    ApiListTag=()=>{
        this.setState({
            isShowGmodal:true
        })
    }
    changeAPIAuthority=(id,values,e)=>{//修改API权限
        let arr=this.state.APINoPermissionList? this.state.APINoPermissionList:[]
        console.log(values,"values")
        if(values.indexOf("3")>-1){
            arr.push(id)
        }else{
            let index=arr.indexOf(id);
            if(index>-1){
                arr.splice(index,1)
            }
        }
        console.log(arr,"arreidt")
        this.setState({
            APINoPermissionList:arr
        })

    }
    changeIPAddressPermission=(id,e)=>{//修改ip地址权限
        let arr=this.state.ipNoPermissionList? this.state.ipNoPermissionList:[]
        let index=arr.indexOf(id);
        if(e.target.value==="1"){
            arr.push(id)
        }else{
            arr.splice(index,1)
        }
        this.setState({
            ipNoPermissionList:arr
        })
    }
    editPermission=(item,e)=>{//点击编辑权限
        e.stopPropagation();
        let {isEditList,apiList,afterApiLIst}=this.state;
        let arrApi=afterApiLIst.length>0?afterApiLIst:[]
        arrApi.push(item)
        let arr=isEditList;
        arr.push(item.id)
        this.setState({
            isEditList:arr,
            afterApiLIst:arrApi
        })
    }
    cancelEdit=(item,e)=>{//取消修改，将状态改为
        e.stopPropagation();
        let {isEditList,afterApiLIst}=this.state;
        let arr=isEditList;
        let index=arr.indexOf(item.id);
        let listIndex=afterApiLIst.findIndex((value)=>value.id==item.id)
        let afterList=afterApiLIst.splice(listIndex,1)
        if(index>-1){
            arr.splice(index,1)
        }
        this.setState({
            isEditList:arr,
            afterApiLIst
        })

    }
    delIP=(id,ip,e)=>{//删除某个ip地址
        e.stopPropagation();
        const {apiList}=this.state;
        let index=apiList.findIndex((value)=>value.id==id);
        let ipLIst=apiList[index].IPList
        let ipIndex=ipLIst.findIndex((value)=>value==ip)
        
         let arr= ipLIst.splice(ipIndex,1)
        console.log(ipIndex,"ipIndex",ipLIst)
        apiList[index].IPList=ipLIst
            this.setState({
                apiList:apiList
            })
        // console.log(id,ip,"id")

    }
    addIp=(id,value)=>{
        // e.stopPropagation();
        console.log(id,value,"0000")
        const {apiList}=this.state;
        let index=apiList.findIndex((value)=>value.id==id);
        let ipLIst=apiList[index].IPList
        let arr=ipLIst?ipLIst:[]
        if(value&&value.length>0){
            arr.push(value);
        }
        apiList[index].IPList=arr
        this.setState({
            apiList:apiList
        })
       
    }
   
    handleSubmit=(id:number,e:any)=>{
        e.stopPropagation();
    }
  
    finished=(value)=>{//编辑完成确认按钮
        console.log(111,value)
    }
    getapiList(){
        let {APIRecordStore}=this.props
        let self=this
        ajax({
            url:'api.getAPIList',
            data:{},
            callback(data){
                if(data&&data.list){
                    APIRecordStore.getapiRecordList(data.list)
                    self.setState({
                        count:data.list.length,
                        apiList:data.list
                    },()=>{
                        let arrAPIAuthority=[];
                        let arrIPAddressAuthority=[];
                        self.state.apiList.map((item,index)=>{
                            if(item.APIAuthority.indexOf("3")>-1){
                                arrAPIAuthority.push(item.id)
                            }
                            if(item.IPAddressAuthority.indexOf("1")>-1){
                                arrIPAddressAuthority.push(item.id)
                            }
                        })
                        self.setState({
                            APINoPermissionList:arrAPIAuthority,
                            ipNoPermissionList:arrIPAddressAuthority
                        })
                    })
                }
            }
        })
    }
    componentDidMount(){
        this.getapiList()
    }
    render(){
        const {history,APIRecordStore}=this.props;
        const {apiTag,isShowGmodal,isEditList,apiList,ipAddress,ipNoPermissionList,APINoPermissionList,count}=this.state
        const radioStyle={
            display:'block',
            marginBottom:'12px'
        }
        return (
            <section>
                <WrappApiListCmp>
                <section className="createApiBox">
                    <div className="createContent">
                        <div className="creatTitle">创建API</div>
                        <p className="apiInfo">创建API密钥可让第三方网站或应用访问HashkeyPro平台的市场或进行实时交易</p>
                        <a className="apiLink">查看API资料 >></a>
                        <div className="apiForm">
                        <Input placeholder="给API密钥一个好记的标签" className="apiInput" value={apiTag} onChange={this.changeApiTag.bind(this)}></Input>
                        <Button className="creatApiBtn" onClick={this.ApiListTag.bind(this)} disabled={apiTag.length==0}>创建</Button>
                        </div>
                    </div>
                </section>
                <section className="apiListBox">
                    <div className="apiListTitle">
                            <div>API列表({apiList.length})</div>
                            <Button>删除所有API</Button>
                    </div>
                    <Collapse 
                        bordered={false}
                        defaultActiveKey={["1"]}
                        expandIconPosition="right"
                        expandIcon={({isActive})=><DownOutlined rotate={isActive?180:0}/>}
                    >
                      {apiList&&apiList.map(item=><Panel header={<div className="headerBox">
                            <div className="headerItemTitle">{item.APIName}</div>
                           {isEditList.indexOf(item.id)==-1 ? <div className="settingBox" >
                                <Button onClick={this.editPermission.bind(this,item)}>编辑权限</Button>
                                <Button style={{marginLeft:"20px"}}>删除</Button>
                            </div>:
                            <div className="settingBox">
                                <Button onClick={this.handleSubmit.bind(this,item.id)}>确认</Button>
                                <Button style={{marginLeft:"20px"}} onClick={this.cancelEdit.bind(this,item)}>取消</Button>
                            </div>}

                        </div>} key={item.id}>
                            <div className="apiContentBox">
                                <div className="apiItem">
                                    <div className="apiItemTitle">密钥 <Popover title={false} content={<div  style={{maxWidth:"329px",fontSize:"12px"}}>为了您的安全，您的API密钥仅会在创建时出现一次，如果您丢失了密钥，则需要您删除API且重新创建一个新的密钥</div>}><InfoCircleFilled></InfoCircleFilled></Popover></div>
                                    <div className="apiItemContent">***********</div>
                                </div>
                                <div className="apiItem">
                                    <div className="apiItemTitle">API权限</div>
                                    <div className="apiItemContent">
                                            {/* <Form.Item name="apiAuthority">  */}
                                                <Checkbox.Group disabled={isEditList.indexOf(item.id)==-1} defaultValue={item.APIAuthority} style={{width:"100%"}}  onChange={this.changeAPIAuthority.bind(this,item.id)}>
                                                    <Row>
                                                        <Col span={4}>
                                                            <Checkbox value="1" disabled>只读</Checkbox>
                                                        </Col>
                                                        <Col span={4}>
                                                            <Checkbox value="2"> 允许交易</Checkbox>
                                                        </Col>
                                                        <Col span={4}>
                                                            <Checkbox value="3" disabled={ipNoPermissionList.indexOf(item.id)>-1}>允许提现 <Popover title={false} content={<div  style={{fontSize:"12px"}}>开启提现选项必须选中【限制只对受信任IP访问】</div>}><InfoCircleFilled></InfoCircleFilled></Popover></Checkbox>
                                                        </Col>
                                                    </Row>
                                                 </Checkbox.Group>
                                            {/* </Form.Item>    */}
                                    </div>
                                </div>
                                <div className="apiItem">
                                    <div className="apiItemTitle">IP地址权限</div>
                                    <div className="apiItemContent">
                                        {/* <Form.Item name="ipAuthority"> */}
                                            <Radio.Group disabled={isEditList.indexOf(item.id)==-1} defaultValue={item.IPAddressAuthority} onChange={this.changeIPAddressPermission.bind(this,item.id)}>
                                                <Radio value="1"   disabled={APINoPermissionList.indexOf(item.id)>-1}  style={radioStyle}> 无限制（缺乏安全） <span style={{color:"#E05A66",marginLeft:"20px"}} >这个API密钥允许任何地址访问，不推荐</span></Radio>
                                                <Radio value="2">限制只对受信任ip的访问(推荐)</Radio>
                                            </Radio.Group>
                                        {/* </Form.Item> */}
                                        {isEditList.indexOf(item.id)>-1&&ipNoPermissionList.indexOf(item.id)==-1&& <div className="ipInput">
                                            <div className="ipList">
                                            {item.IPList&&item.IPList.map(ip=>
                                            <span className="ipItem" key={ip}>{ip} <CloseOutlined onClick={this.delIP.bind(this,item.id,ip)}></CloseOutlined></span>)}  
                                            </div>
                                            <Search placeholder="添加可信IP地址" ref="addIpAddress" style={{width:"400px"}}   enterButton={<div style={{color:"#00A0D2"}} >确认</div>} onSearch={this.addIp.bind(this,item.id)}></Search>
                                        </div>}
                                    </div>
                                </div>
                                {/* </Form> */}
                            </div>
                      </Panel>)}
                    </Collapse>
                </section>
            </WrappApiListCmp>
            </section>
           
        )
    }

}