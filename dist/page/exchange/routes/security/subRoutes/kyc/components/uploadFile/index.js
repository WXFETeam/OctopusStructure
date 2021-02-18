import * as React from "react";
import { Button, Form, message } from 'antd';
import { WrapperUploadFileCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';
export default class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                console.log(values);
                let that = this;
                ajax({
                    url: 'orgKyc.saveOrgFile',
                    method: 'post',
                    needToken: false,
                    isFullData: true,
                    data: Object.assign(values, { userNo: '2' }),
                    callback(data) {
                        console.log(data);
                        if (data.errNo === '0') {
                            message.success('保存成功');
                        }
                        else {
                            message.success(data.errMsg);
                        }
                    }
                });
            })
                .catch((err) => {
                console.log(err);
            });
        };
        this.onSuccess = (key, val) => {
            this.formRef.setFieldsValue({
                [key]: val
            });
        };
        this.onError = () => { };
        this.getDom = (item, index, initialValues) => {
            let dom = '';
            switch (item.type) {
                case 'point':
                    dom = React.createElement("div", { key: index, className: "pointBox" },
                        React.createElement("span", null, "\u6587\u4EF6\u4E0A\u4F20\u8BF4\u660E\uFF1A"),
                        React.createElement("br", null),
                        "1.\u6240\u63D0\u4F9B\u7684\u6240\u6709\u6587\u4EF6\u5FC5\u987B\u662F\u6309\u7F57\u9A6C/\u62C9\u4E01\u5B57\u6BCD\u987A\u5E8F\u6216\u8005\u9700\u8981\u7ECF\u516C\u8BC1\u7684\u82F1\u6587\u8BD1\u672C",
                        React.createElement("br", null),
                        "2.\u4E0A\u4F20\u7684\u6240\u6709\u6587\u4EF6\u5FC5\u987B\u662Fpdf\u3001jpg\u3001jpeg\u6216png\u683C\u5F0F",
                        React.createElement("br", null),
                        "3.\u4E0A\u4F20\u7684\u6240\u6709\u5185\u5BB9\u5FC5\u987B\u662F\u6E05\u6670\u53EF\u89C1\u7684",
                        React.createElement("br", null),
                        "4.\u6587\u4EF6\u5927\u5C0F\uFF1A\u4E0D\u8D85\u8FC75MB");
                    break;
                case 'title':
                    dom = React.createElement("div", { key: index, className: "formTit" }, item.value);
                    break;
                case 'upload':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem uploadItem", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement("div", { className: item.key },
                            React.createElement(UploadCmp, { keyName: item.key, fileName: initialValues[item.key], onSuccess: this.onSuccess, onError: this.onError })));
                    break;
            }
            return dom;
        };
        this.state = {};
    }
    render() {
        const formContent = [
            {
                type: 'point',
                key: 'point'
            },
            {
                type: 'title',
                value: '1.公司注册证书及商业登记证'
            },
            {
                type: 'upload',
                key: 'incorporationCertificate',
                required: true
            },
            {
                type: 'title',
                value: '2.公司章程大纲及章程'
            },
            {
                type: 'upload',
                key: 'companyMemorandum',
                required: true
            },
            {
                type: 'title',
                value: '3.所有权和结构控制的详细信息（所有权图表）'
            },
            {
                type: 'upload',
                key: 'ownershipChart',
                required: true
            },
            {
                type: 'title',
                value: '4.有地址的公司银行对账单'
            },
            {
                type: 'upload',
                key: 'bankStatement',
                required: true
            },
            {
                type: 'title',
                value: '5.使用HashKey开立账户的公司会议记录'
            },
            {
                type: 'upload',
                key: 'hashkeyCompanyMinute',
                required: true
            },
            {
                type: 'title',
                value: '6.股东名册'
            },
            {
                type: 'upload',
                key: 'shareholder',
                required: true
            },
            {
                type: 'title',
                value: '7.最终受益人的名单'
            },
            {
                type: 'upload',
                key: 'ultimateBeneficiary',
                required: true
            },
            {
                type: 'title',
                value: '8.控制率超过25%的股东名单'
            },
            {
                type: 'upload',
                key: 'controlShareholder',
                required: true
            },
            {
                type: 'title',
                value: '9.所有董事名单'
            },
            {
                type: 'upload',
                key: 'director',
                required: true
            },
            {
                type: 'title',
                value: '10.在职证明（可选）'
            },
            {
                type: 'upload',
                key: 'careerFile'
            },
            {
                type: 'title',
                value: '11.良好信誉证书（可选）'
            },
            {
                type: 'upload',
                key: 'creditFile'
            }
        ];
        let insData = common.getLS('insData');
        let initialValues = {};
        if (insData && insData.kycInsFileResponse) {
            initialValues = insData.kycInsFileResponse;
        }
        return (React.createElement(WrapperUploadFileCmp, null,
            React.createElement("div", { className: "routeName" }, "\u516C\u53F8\u6587\u4EF6"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "uploadFileForm", initialValues: initialValues }, formContent.map((item, index) => this.getDom(item, index, initialValues))),
            React.createElement("div", { className: "uploadFileBtn" },
                React.createElement(Button, { className: "confirmBlueBtn saveBtn", onClick: this.handleSubmit }, "\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map