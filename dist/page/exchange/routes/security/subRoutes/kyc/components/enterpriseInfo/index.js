import * as React from "react";
import { Button, Input, Select, Checkbox, Form, message } from 'antd';
import { WrapperEnterpriseInfoCmp } from './styled';
const { Option } = Select;
export default class EnterpriseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                let that = this;
                ajax({
                    url: 'orgKyc.saveOrgInfo',
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
        this.changeOfficeAddress = (e) => {
            let officeAddress = '';
            if (e.target.checked) {
                officeAddress = this.formRef.getFieldValue('registrationAddress');
            }
            this.formRef.setFieldsValue({
                officeAddress: officeAddress
            });
        };
        this.getDom = (item, index) => {
            let dom = '';
            switch (item.type) {
                case 'title':
                    dom = React.createElement("div", { key: index, className: "formTit" }, item.value);
                    break;
                case 'input':
                    dom = React.createElement(Form.Item, { key: index, className: item.float ? item.float + " formItem" : item.key + 'Item formItem', name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Input, { className: item.key, placeholder: item.placeholder }));
                    break;
                case 'select':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float, name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Select, { className: item.key, placeholder: item.placeholder }, item.options.map((item2, index2) => React.createElement(Option, { key: index2, value: item2.value }, item2.text))));
                    break;
                case 'inputAndCheckbox':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem inputAndCheckbox" },
                        React.createElement(Form.Item, { name: item.key, noStyle: true, rules: [{
                                    required: item.required ? true : false
                                }] },
                            React.createElement(Input, { className: item.key, placeholder: item.placeholder })),
                        React.createElement(Checkbox, { onChange: this.changeOfficeAddress }, "\u4E0E\u6CE8\u518C\u5730\u5740\u76F8\u540C"));
                    break;
            }
            return dom;
        };
        this.state = {};
    }
    render() {
        const formContent = [
            {
                type: 'title',
                value: '基本信息'
            },
            {
                type: 'input',
                key: 'fullName',
                float: 'left',
                placeholder: '公司全称',
                required: true
            },
            {
                type: 'input',
                key: 'registrationDate',
                float: 'right',
                placeholder: '公司注册日期',
                required: true
            },
            {
                type: 'input',
                key: 'jurisdiction',
                float: 'left',
                placeholder: '公司注册管辖权',
                required: true
            },
            {
                type: 'input',
                key: 'registrationId',
                float: 'right',
                placeholder: '机构注册文件号',
                required: true
            },
            {
                type: 'select',
                key: 'insType',
                placeholder: '公司类型',
                options: [
                    {
                        text: '有限公司',
                        value: '1'
                    },
                    {
                        text: '上市公司',
                        value: '2'
                    }
                ],
                required: true
            },
            {
                type: 'select',
                key: 'taxCountry',
                placeholder: '公司用于纳税目的地国家',
                options: [
                    {
                        text: '中国大陆',
                        value: 'cn'
                    },
                    {
                        text: '中国香港',
                        value: 'hk'
                    }
                ],
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'taxpayerId',
                float: 'right',
                placeholder: '税标识号',
                required: true
            },
            {
                type: 'input',
                key: 'governmentWebsite',
                placeholder: '验证公司注册信息的政府网站',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'insWebsite',
                placeholder: '企业网站（选填）',
                float: 'right'
            },
            {
                type: 'title',
                value: '注册地址信息'
            },
            {
                type: 'input',
                key: 'registrationAddress',
                placeholder: '注册地址信息',
                required: true
            },
            {
                type: 'input',
                key: 'officePostcode',
                placeholder: '邮编',
                required: true
            },
            {
                type: 'inputAndCheckbox',
                key: 'officeAddress',
                placeholder: '企业办公地址',
                checkboxText: '与注册地址相同',
                required: true
            }
        ];
        let insData = common.getLS('insData');
        let initialValues = {};
        if (insData && insData.kycInsInfoResponse) {
            initialValues = insData.kycInsInfoResponse;
        }
        return (React.createElement(WrapperEnterpriseInfoCmp, null,
            React.createElement("div", { className: "routeName" }, "\u4F01\u4E1A\u4FE1\u606F"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "enterpriseInfoForm", initialValues: initialValues }, formContent.map((item, index) => this.getDom(item, index))),
            React.createElement("div", { className: "enterpriseInfoBtn" },
                React.createElement(Button, { className: "confirmBlueBtn saveBtn", onClick: this.handleSubmit }, "\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map