var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react/index';
import { Input, Collapse } from 'antd';
import NoApi from './components/noApi';
import ApiListComponents from './components/apiList';
// import CreateApiCmp from './components/creatApi'
// import EmailConfirm from '../create/components/emailConfirm'
// import RecordApiKey from '../create/components/recordApiKey'
const { Panel } = Collapse;
const { Search } = Input;
let ApiList = class ApiList extends React.Component {
    constructor(props) {
        super(props);
        this.changeStep = (step) => {
            this.setState({ current: step });
        };
        this.state = {
            count: 0,
            current: "1" //没有进入创建页面
        };
    }
    getapiList() {
        let { APIRecordStore } = this.props;
        let self = this;
        ajax({
            url: 'api.getAPIList',
            data: {},
            callback(data) {
                if (data && data.list) {
                    APIRecordStore.getapiRecordList(data.list);
                    self.setState({
                        count: data.list.length,
                    });
                }
            }
        });
    }
    componentDidMount() {
        this.getapiList();
    }
    render() {
        const { count, current } = this.state;
        const radioStyle = {
            display: 'block',
            marginBottom: '12px'
        };
        return (React.createElement(Fragment, null, count == 0 && current == "0" ? React.createElement(NoApi, null) : React.createElement(ApiListComponents, null)));
    }
};
ApiList = __decorate([
    inject('userStore', 'APIRecordStore'),
    observer
], ApiList);
export default ApiList;
//# sourceMappingURL=index.js.map