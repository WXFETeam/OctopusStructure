import * as React from "react";
import { Button, Form, Input, Checkbox, message } from 'antd';
import { WrapperOtherInfoCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';
const { TextArea } = Input;
export default class OtherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                let that = this;
                let user = this.props.user;
                let url = '';
                if (user === 'institution') {
                    // 企业认证
                    url = 'orgKyc.saveOrgSupplement';
                }
                else {
                    // 个人认证
                    url = 'personalKyc.savePersonalSupplement';
                }
                if (!values.hasOtherInfo && (values.supplementDesc || values.supplementFile)) {
                    let postData = {
                        userNo: '2',
                        supplementDesc: values.supplementDesc,
                        supplementFile: values.supplementFile,
                    };
                    ajax({
                        url: url,
                        method: 'post',
                        needToken: false,
                        isFullData: true,
                        data: postData,
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
                }
            })
                .catch((err) => {
                console.log(err);
            });
        };
        this.onSuccess = (key, val) => {
            this.formRef.setFieldsValue({ [key]: val });
        };
        this.onError = () => { };
        this.getDom = (item, index, initialValues) => {
            let dom = '';
            switch (item.type) {
                case 'title':
                    dom = React.createElement("div", { key: index, className: "formTit" }, item.value);
                    break;
                case 'checkbox':
                    dom = React.createElement(Form.Item, { key: index, valuePropName: "checked", className: "formItem formCheckbox", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Checkbox, null, item.text));
                    break;
                case 'textAreaAndUpload':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem uploadItem", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Form.Item, { name: item.inputKey, noStyle: true },
                            React.createElement(TextArea, { placeholder: item.placeholder })),
                        React.createElement(Form.Item, { name: item.uploadKey, noStyle: true },
                            React.createElement(UploadCmp, { keyName: item.uploadKey, fileName: initialValues[item.uploadKey], onSuccess: this.onSuccess, onError: this.onError })));
                    break;
            }
            return dom;
        };
        this.state = {
            imageUrl: null
        };
    }
    render() {
        const user = this.props.user;
        const formContent = [
            {
                type: 'title',
                value: '如果您认为还有其它必要资料提交，请在此页面上传'
            },
            {
                type: 'textAreaAndUpload',
                key: 'otherInfo',
                inputKey: 'supplementDesc',
                uploadKey: 'supplementFile',
                placeholder: '您可以在这里提交其它说明，并上传您认为必要的文件'
            },
            {
                type: 'checkbox',
                key: 'hasOtherInfo',
                text: '我没有补充资料需要上传'
            }
        ];
        let initialValues = {};
        if (user === 'institution') {
            let insData = common.getLS('insData');
            if (insData && insData.kycInsSupplementResponse) {
                initialValues = insData.kycInsSupplementResponse;
            }
        }
        else {
            let personalData = common.getLS('personalData');
            if (personalData && personalData.kycPersonalSupplementSaveResponse) {
                initialValues = personalData.kycPersonalSupplementSaveResponse;
            }
        }
        return (React.createElement(WrapperOtherInfoCmp, null,
            React.createElement("div", { className: "routeName" }, "\u8865\u5145\u6587\u4EF6"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "otherInfoForm", initialValues: initialValues }, formContent.map((item, index) => this.getDom(item, index, initialValues))),
            React.createElement("div", { className: "otherInfoBtn" },
                React.createElement(Button, { className: "confirmBlueBtn saveBtn", onClick: this.handleSubmit }, "\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map