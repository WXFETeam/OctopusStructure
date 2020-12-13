import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react/index';
import {toJS} from "mobx";
import {Button,Input,Collapse,Popover,Checkbox,Row,Col,Radio,Form} from 'antd'
import NoApi from './components/noApi'
import ApiListComponents from './components/apiList'
// import CreateApiCmp from './components/creatApi'
// import EmailConfirm from '../create/components/emailConfirm'
// import RecordApiKey from '../create/components/recordApiKey'

const {Panel}=Collapse
const {Search}=Input;
type ApiListProps={
    userStore?:any,
    history?:any,
    APIRecordStore?:any
}
type ApiListState={
    count?:number,
    current?:any
}
@inject('userStore','APIRecordStore')
@observer
export default class ApiList extends React.Component<ApiListProps,ApiListState>{
    constructor(props:ApiListProps){
        super(props);
        this.state={
            count:0,
            current:"1"//没有进入创建页面
        }
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
                    })
                }
            }
        })
    }
    changeStep = (step) => {
        this.setState({current:step});
    }
    componentDidMount(){
        this.getapiList()
    }
    render(){
        const {count,current}=this.state
        const radioStyle={
            display:'block',
            marginBottom:'12px'
        }
        return (
            <Fragment>
                {count==0&&current=="0"?<NoApi></NoApi>:<ApiListComponents></ApiListComponents>}
            </Fragment>
           
        )
    }

}