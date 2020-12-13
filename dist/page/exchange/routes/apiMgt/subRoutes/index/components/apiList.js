var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { Button, Input, Collapse, Popover, Checkbox, Row, Col, Radio } from 'antd';
import { WrappApiListCmp } from './styled';
import { InfoCircleFilled, CloseOutlined, DownOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Search } = Input;
let ApiList = class ApiList extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this._close = () => {
            this.setState({
                isShowGmodal: false
            });
        };
        this.changeApiTag = (e) => {
            this.setState({
                apiTag: e.target.value
            });
        };
        this.ApiListTag = () => {
            this.setState({
                isShowGmodal: true
            });
        };
        this.changeAPIAuthority = (id, values, e) => {
            let arr = this.state.APINoPermissionList ? this.state.APINoPermissionList : [];
            console.log(values, "values");
            if (values.indexOf("3") > -1) {
                arr.push(id);
            }
            else {
                let index = arr.indexOf(id);
                if (index > -1) {
                    arr.splice(index, 1);
                }
            }
            console.log(arr, "arreidt");
            this.setState({
                APINoPermissionList: arr
            });
        };
        this.changeIPAddressPermission = (id, e) => {
            let arr = this.state.ipNoPermissionList ? this.state.ipNoPermissionList : [];
            let index = arr.indexOf(id);
            if (e.target.value === "1") {
                arr.push(id);
            }
            else {
                arr.splice(index, 1);
            }
            this.setState({
                ipNoPermissionList: arr
            });
        };
        this.editPermission = (item, e) => {
            e.stopPropagation();
            let { isEditList, apiList, afterApiLIst } = this.state;
            let arrApi = afterApiLIst.length > 0 ? afterApiLIst : [];
            arrApi.push(item);
            let arr = isEditList;
            arr.push(item.id);
            this.setState({
                isEditList: arr,
                afterApiLIst: arrApi
            });
        };
        this.cancelEdit = (item, e) => {
            e.stopPropagation();
            let { isEditList, afterApiLIst } = this.state;
            let arr = isEditList;
            let index = arr.indexOf(item.id);
            let listIndex = afterApiLIst.findIndex((value) => value.id == item.id);
            let afterList = afterApiLIst.splice(listIndex, 1);
            if (index > -1) {
                arr.splice(index, 1);
            }
            this.setState({
                isEditList: arr,
                afterApiLIst
            });
        };
        this.delIP = (id, ip, e) => {
            e.stopPropagation();
            const { apiList } = this.state;
            let index = apiList.findIndex((value) => value.id == id);
            let ipLIst = apiList[index].IPList;
            let ipIndex = ipLIst.findIndex((value) => value == ip);
            let arr = ipLIst.splice(ipIndex, 1);
            console.log(ipIndex, "ipIndex", ipLIst);
            apiList[index].IPList = ipLIst;
            this.setState({
                apiList: apiList
            });
            // console.log(id,ip,"id")
        };
        this.addIp = (id, value) => {
            // e.stopPropagation();
            console.log(id, value, "0000");
            const { apiList } = this.state;
            let index = apiList.findIndex((value) => value.id == id);
            let ipLIst = apiList[index].IPList;
            let arr = ipLIst ? ipLIst : [];
            if (value && value.length > 0) {
                arr.push(value);
            }
            apiList[index].IPList = arr;
            this.setState({
                apiList: apiList
            });
        };
        this.handleSubmit = (id, e) => {
            e.stopPropagation();
        };
        this.finished = (value) => {
            console.log(111, value);
        };
        this.state = {
            apiTag: "",
            count: 0,
            isShowGmodal: false,
            apiList: [],
            afterApiLIst: [],
            isEditList: [],
            ipAddress: "",
            ipNoPermissionList: [],
            APINoPermissionList: [],
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
                        apiList: data.list
                    }, () => {
                        let arrAPIAuthority = [];
                        let arrIPAddressAuthority = [];
                        self.state.apiList.map((item, index) => {
                            if (item.APIAuthority.indexOf("3") > -1) {
                                arrAPIAuthority.push(item.id);
                            }
                            if (item.IPAddressAuthority.indexOf("1") > -1) {
                                arrIPAddressAuthority.push(item.id);
                            }
                        });
                        self.setState({
                            APINoPermissionList: arrAPIAuthority,
                            ipNoPermissionList: arrIPAddressAuthority
                        });
                    });
                }
            }
        });
    }
    componentDidMount() {
        this.getapiList();
    }
    render() {
        const { history, APIRecordStore } = this.props;
        const { apiTag, isShowGmodal, isEditList, apiList, ipAddress, ipNoPermissionList, APINoPermissionList, count } = this.state;
        const radioStyle = {
            display: 'block',
            marginBottom: '12px'
        };
        return (React.createElement("section", null,
            React.createElement(WrappApiListCmp, null,
                React.createElement("section", { className: "createApiBox" },
                    React.createElement("div", { className: "createContent" },
                        React.createElement("div", { className: "creatTitle" }, "\u521B\u5EFAAPI"),
                        React.createElement("p", { className: "apiInfo" }, "\u521B\u5EFAAPI\u5BC6\u94A5\u53EF\u8BA9\u7B2C\u4E09\u65B9\u7F51\u7AD9\u6216\u5E94\u7528\u8BBF\u95EEHashkeyPro\u5E73\u53F0\u7684\u5E02\u573A\u6216\u8FDB\u884C\u5B9E\u65F6\u4EA4\u6613"),
                        React.createElement("a", { className: "apiLink" }, "\u67E5\u770BAPI\u8D44\u6599 >>"),
                        React.createElement("div", { className: "apiForm" },
                            React.createElement(Input, { placeholder: "\u7ED9API\u5BC6\u94A5\u4E00\u4E2A\u597D\u8BB0\u7684\u6807\u7B7E", className: "apiInput", value: apiTag, onChange: this.changeApiTag.bind(this) }),
                            React.createElement(Button, { className: "creatApiBtn", onClick: this.ApiListTag.bind(this), disabled: apiTag.length == 0 }, "\u521B\u5EFA")))),
                React.createElement("section", { className: "apiListBox" },
                    React.createElement("div", { className: "apiListTitle" },
                        React.createElement("div", null,
                            "API\u5217\u8868(",
                            apiList.length,
                            ")"),
                        React.createElement(Button, null, "\u5220\u9664\u6240\u6709API")),
                    React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1"], expandIconPosition: "right", expandIcon: ({ isActive }) => React.createElement(DownOutlined, { rotate: isActive ? 180 : 0 }) }, apiList && apiList.map(item => React.createElement(Panel, { header: React.createElement("div", { className: "headerBox" },
                            React.createElement("div", { className: "headerItemTitle" }, item.APIName),
                            isEditList.indexOf(item.id) == -1 ? React.createElement("div", { className: "settingBox" },
                                React.createElement(Button, { onClick: this.editPermission.bind(this, item) }, "\u7F16\u8F91\u6743\u9650"),
                                React.createElement(Button, { style: { marginLeft: "20px" } }, "\u5220\u9664")) :
                                React.createElement("div", { className: "settingBox" },
                                    React.createElement(Button, { onClick: this.handleSubmit.bind(this, item.id) }, "\u786E\u8BA4"),
                                    React.createElement(Button, { style: { marginLeft: "20px" }, onClick: this.cancelEdit.bind(this, item) }, "\u53D6\u6D88"))), key: item.id },
                        React.createElement("div", { className: "apiContentBox" },
                            React.createElement("div", { className: "apiItem" },
                                React.createElement("div", { className: "apiItemTitle" },
                                    "\u5BC6\u94A5 ",
                                    React.createElement(Popover, { title: false, content: React.createElement("div", { style: { maxWidth: "329px", fontSize: "12px" } }, "\u4E3A\u4E86\u60A8\u7684\u5B89\u5168\uFF0C\u60A8\u7684API\u5BC6\u94A5\u4EC5\u4F1A\u5728\u521B\u5EFA\u65F6\u51FA\u73B0\u4E00\u6B21\uFF0C\u5982\u679C\u60A8\u4E22\u5931\u4E86\u5BC6\u94A5\uFF0C\u5219\u9700\u8981\u60A8\u5220\u9664API\u4E14\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BC6\u94A5") },
                                        React.createElement(InfoCircleFilled, null))),
                                React.createElement("div", { className: "apiItemContent" }, "***********")),
                            React.createElement("div", { className: "apiItem" },
                                React.createElement("div", { className: "apiItemTitle" }, "API\u6743\u9650"),
                                React.createElement("div", { className: "apiItemContent" },
                                    React.createElement(Checkbox.Group, { disabled: isEditList.indexOf(item.id) == -1, defaultValue: item.APIAuthority, style: { width: "100%" }, onChange: this.changeAPIAuthority.bind(this, item.id) },
                                        React.createElement(Row, null,
                                            React.createElement(Col, { span: 4 },
                                                React.createElement(Checkbox, { value: "1", disabled: true }, "\u53EA\u8BFB")),
                                            React.createElement(Col, { span: 4 },
                                                React.createElement(Checkbox, { value: "2" }, " \u5141\u8BB8\u4EA4\u6613")),
                                            React.createElement(Col, { span: 4 },
                                                React.createElement(Checkbox, { value: "3", disabled: ipNoPermissionList.indexOf(item.id) > -1 },
                                                    "\u5141\u8BB8\u63D0\u73B0 ",
                                                    React.createElement(Popover, { title: false, content: React.createElement("div", { style: { fontSize: "12px" } }, "\u5F00\u542F\u63D0\u73B0\u9009\u9879\u5FC5\u987B\u9009\u4E2D\u3010\u9650\u5236\u53EA\u5BF9\u53D7\u4FE1\u4EFBIP\u8BBF\u95EE\u3011") },
                                                        React.createElement(InfoCircleFilled, null)))))))),
                            React.createElement("div", { className: "apiItem" },
                                React.createElement("div", { className: "apiItemTitle" }, "IP\u5730\u5740\u6743\u9650"),
                                React.createElement("div", { className: "apiItemContent" },
                                    React.createElement(Radio.Group, { disabled: isEditList.indexOf(item.id) == -1, defaultValue: item.IPAddressAuthority, onChange: this.changeIPAddressPermission.bind(this, item.id) },
                                        React.createElement(Radio, { value: "1", disabled: APINoPermissionList.indexOf(item.id) > -1, style: radioStyle },
                                            " \u65E0\u9650\u5236\uFF08\u7F3A\u4E4F\u5B89\u5168\uFF09 ",
                                            React.createElement("span", { style: { color: "#E05A66", marginLeft: "20px" } }, "\u8FD9\u4E2AAPI\u5BC6\u94A5\u5141\u8BB8\u4EFB\u4F55\u5730\u5740\u8BBF\u95EE\uFF0C\u4E0D\u63A8\u8350")),
                                        React.createElement(Radio, { value: "2" }, "\u9650\u5236\u53EA\u5BF9\u53D7\u4FE1\u4EFBip\u7684\u8BBF\u95EE(\u63A8\u8350)")),
                                    isEditList.indexOf(item.id) > -1 && ipNoPermissionList.indexOf(item.id) == -1 && React.createElement("div", { className: "ipInput" },
                                        React.createElement("div", { className: "ipList" }, item.IPList && item.IPList.map(ip => React.createElement("span", { className: "ipItem", key: ip },
                                            ip,
                                            " ",
                                            React.createElement(CloseOutlined, { onClick: this.delIP.bind(this, item.id, ip) })))),
                                        React.createElement(Search, { placeholder: "\u6DFB\u52A0\u53EF\u4FE1IP\u5730\u5740", ref: "addIpAddress", style: { width: "400px" }, enterButton: React.createElement("div", { style: { color: "#00A0D2" } }, "\u786E\u8BA4"), onSearch: this.addIp.bind(this, item.id) }))))))))))));
    }
};
ApiList = __decorate([
    inject('userStore', 'APIRecordStore'),
    observer
], ApiList);
export default ApiList;
//# sourceMappingURL=apiList.js.map