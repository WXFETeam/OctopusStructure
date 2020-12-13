var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react/index';
import { Input, Collapse } from 'antd';
import CreateApiCmp from './components/creatApi';
import EmailConfirm from '@webExchangeComponents/emailComfirm';
import RecordApiKey from './components/recordApiKey';
const { Panel } = Collapse;
const { Search } = Input;
let ApiList = class ApiList extends React.Component {
    constructor(props) {
        super(props);
        // getapiList(){
        //     let {APIRecordStore}=this.props
        //     let self=this
        //     ajax({
        //         url:'api.getAPIList',
        //         data:{},
        //         callback(data){
        //             if(data&&data.list){
        //                 APIRecordStore.getapiRecordList(data.list)
        //                 self.setState({
        //                     count:data.list.length,
        //                 })
        //             }
        //         }
        //     })
        // }
        this.changeStep = (step) => {
            this.setState({ current: step });
        };
        this.state = {
            count: 0,
            current: "1" //没有进入创建页面
        };
    }
    componentDidMount() {
        // this.getapiList()
    }
    render() {
        const { count, current } = this.state;
        const radioStyle = {
            display: 'block',
            marginBottom: '12px'
        };
        const renderStep = () => {
            switch (current) {
                case "1":
                    return React.createElement(CreateApiCmp, { changeStep: this.changeStep });
                case "2":
                    return React.createElement(EmailConfirm, null);
                case "3":
                    return React.createElement(RecordApiKey, null);
            }
        };
        return (React.createElement(Fragment, null, renderStep()));
    }
};
ApiList = __decorate([
    inject('userStore', 'APIRecordStore'),
    observer,
    renderBreadcrumbs
], ApiList);
export default ApiList;
//# sourceMappingURL=index.js.map