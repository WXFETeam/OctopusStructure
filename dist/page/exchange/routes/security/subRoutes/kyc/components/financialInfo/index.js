import * as React from "react";
import { Row, Col, Button, Input, Select, Radio, Checkbox, Form, message } from 'antd';
import { WrapperFinancialInfoCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';
const { Option } = Select;
export default class FinancialInfo extends React.Component {
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
                    url = 'orgKyc.saveOrgFinanceInfo';
                    values.capitalSourceCountry = values.capitalSourceCountry.toString();
                }
                else {
                    // 个人认证
                    url = 'personalKyc.savePersonalFinance';
                    values.kycType = '1';
                }
                values.capitalSource = values.capitalSource.toString();
                ajax({
                    url: url,
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
        this.changeEmployment = (e) => {
            this.setState({
                employment: Number(e.target.value)
            });
        };
        this.onSuccess = (key, val) => {
            this.formRef.setFieldsValue({
                [key]: val
            });
        };
        this.onError = () => { };
        this.getDom = (item, index, initialValues) => {
            const employment = this.state.employment;
            const normFile = (e) => {
                console.log(e.fileList);
                return '';
            };
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
                case 'radio':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem" },
                        React.createElement("div", { className: item.key },
                            React.createElement(Form.Item, { name: item.key, noStyle: true, rules: [{
                                        required: item.required ? true : false
                                    }] },
                                React.createElement(Radio.Group, { onChange: this.changeEmployment }, item.radios.map((item2, index2) => React.createElement(Radio, { key: index2, value: item2.value }, item2.text)))),
                            React.createElement(Form.Item, { name: "employmentStateInput", noStyle: true },
                                React.createElement(Input, { className: employment == 5 ? "active" : "" }))));
                    break;
                case 'checkbox':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem formCheckbox", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Checkbox.Group, { className: item.key },
                            React.createElement(Row, null, item.checkboxs.map((item2, index2) => React.createElement(Col, { span: 8, key: index2 },
                                React.createElement(Checkbox, { value: item2.value }, item2.text))))));
                    break;
                case 'select':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float, name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Select, { className: item.key, placeholder: item.placeholder }, item.options.map((item2, index2) => React.createElement(Option, { key: index2, value: item2.value }, item2.text))));
                    break;
                case 'upload':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem uploadItem", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement("div", { className: item.key },
                            React.createElement(UploadCmp, { keyName: item.key, fileName: initialValues[item.key], onSuccess: this.onSuccess, onError: this.onError }),
                            React.createElement("div", { className: "point" },
                                "\u6240\u63D0\u4F9B\u7684\u6240\u6709\u6587\u4EF6\u5FC5\u987B\u662F\u6309\u7F57\u9A6C/\u62C9\u4E01\u5B57\u6BCD\u987A\u5E8F\u6216\u8005\u9700\u8981\u7ECF\u516C\u8BC1\u7684\u82F1\u6587\u8BD1\u672C",
                                React.createElement("br", null),
                                "\u4E0A\u4F20\u7684\u6240\u6709\u6587\u4EF6\u5FC5\u987B\u662Fpdf\u3001jpg\u3001jpeg\u6216png\u683C\u5F0F",
                                React.createElement("br", null),
                                "\u4E0A\u4F20\u7684\u6240\u6709\u5185\u5BB9\u5FC5\u987B\u662F\u6E05\u6670\u53EF\u89C1\u7684",
                                React.createElement("br", null),
                                "\u6587\u4EF6\u5927\u5C0F\uFF1A\u4E0D\u8D85\u8FC75MB",
                                React.createElement("p", null, "*\u4E0A\u4F20\u5FC5\u8981\u7684\u6700\u4F4E\u8D44\u4EA7/\u6295\u8D44\u7EC4\u5408\u89C4\u6A21\uFF08\u5373\u76F8\u5173\u65E5\u671F\u4E0D\u5C11\u4E8E4000\u4E07\u5143\u7684\u6295\u8D44\u7EC4\u5408\uFF09\u6240\u8981\u6C42\u7684\u8BC1\u660E\u6587\u4EF6"))));
                    break;
            }
            return dom;
        };
        this.state = {
            employment: 0
        };
    }
    render() {
        const user = this.props.user;
        let formContent = [
            {
                type: 'title',
                value: '就业状态'
            },
            {
                type: 'radio',
                key: 'employmentState',
                radios: [
                    {
                        text: '受雇',
                        value: 1
                    },
                    {
                        text: '自雇',
                        value: 2
                    },
                    {
                        text: '退休',
                        value: 3
                    },
                    {
                        text: '家庭主妇',
                        value: 4
                    },
                    {
                        text: '其他',
                        value: 5
                    }
                ],
                required: true
            },
            {
                type: 'input',
                key: 'employerName',
                placeholder: '雇主名称',
                required: true
            },
            {
                type: 'input',
                key: 'occupation',
                placeholder: '职业',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'position',
                placeholder: '职称',
                float: 'right',
                required: true
            },
            {
                type: 'input',
                key: 'workSeniority',
                placeholder: '工作年限',
                float: 'left',
                required: true
            },
            {
                type: 'select',
                key: 'annualIncome',
                placeholder: '年收入（港币）',
                options: [
                    {
                        text: '10000以下',
                        value: '1'
                    },
                    {
                        text: '10000~50000',
                        value: '2'
                    },
                    {
                        text: '50000以上',
                        value: '3'
                    }
                ],
                float: 'right',
                required: true
            },
            {
                type: 'title',
                value: '资金最初来源'
            },
            {
                type: 'checkbox',
                key: 'capitalSource',
                checkboxs: [
                    {
                        text: '积蓄',
                        value: '1'
                    },
                    {
                        text: '收入积蓄',
                        value: '2'
                    },
                    {
                        text: '佣金/营业收入',
                        value: '3'
                    },
                    {
                        text: '退休金/准备金',
                        value: '4'
                    },
                    {
                        text: '投资收益',
                        value: '5'
                    },
                    {
                        text: '其它',
                        value: '6'
                    }
                ],
                required: true
            },
            {
                type: 'select',
                key: 'cashFlow',
                placeholder: '持有流动资产（港币）',
                options: [
                    {
                        text: '10000以下',
                        value: '1'
                    },
                    {
                        text: '10000~50000',
                        value: '2'
                    },
                    {
                        text: '50000以上',
                        value: '3'
                    }
                ],
                float: 'left',
                required: true
            },
            {
                type: 'select',
                key: 'netAsset',
                placeholder: '净值（港币）',
                options: [
                    {
                        text: '10000以下',
                        value: '1'
                    },
                    {
                        text: '10000~50000',
                        value: '2'
                    },
                    {
                        text: '50000以上',
                        value: '3'
                    }
                ],
                float: 'right',
                required: true
            },
            {
                type: 'title',
                value: '上传资产证明文件'
            },
            {
                type: 'upload',
                key: 'assetProofFile',
                required: true
            }
        ];
        if (user === 'institution')
            formContent = [
                {
                    type: 'title',
                    value: '资金来源地'
                },
                {
                    type: 'checkbox',
                    key: 'capitalSourceCountry',
                    checkboxs: [
                        {
                            text: '中国香港',
                            value: '1'
                        },
                        {
                            text: '中国大陆',
                            value: '2'
                        },
                        {
                            text: '其它',
                            value: '3'
                        }
                    ],
                    required: true
                },
                {
                    type: 'title',
                    value: '资金最初来源'
                },
                {
                    type: 'checkbox',
                    key: 'capitalSource',
                    checkboxs: [
                        {
                            text: '积蓄',
                            value: '1'
                        },
                        {
                            text: '收入积蓄',
                            value: '2'
                        },
                        {
                            text: '佣金/营业收入',
                            value: '3'
                        },
                        {
                            text: '退休金/准备金',
                            value: '4'
                        },
                        {
                            text: '投资收益',
                            value: '5'
                        },
                        {
                            text: '其它',
                            value: '6'
                        }
                    ],
                    required: true
                },
                {
                    type: 'input',
                    key: 'totalNetWorth',
                    placeholder: '预计现时资产净值',
                    float: 'left',
                    required: true
                },
                {
                    type: 'input',
                    key: 'liquidNetWorth',
                    placeholder: '预计现时流动资产净值',
                    float: 'right',
                    required: true
                },
                {
                    type: 'input',
                    key: 'annualActivityWorth',
                    placeholder: '预计交易活动总计（年计）',
                    float: 'left',
                    required: true
                },
                {
                    type: 'title',
                    value: '上传资产证明文件'
                },
                {
                    type: 'upload',
                    key: 'assetProofFile',
                    required: true
                }
            ];
        let initialValues = {};
        if (user === 'institution') {
            let insData = common.getLS('insData');
            console.log(insData);
            if (insData && insData.kycInsFinanceResponse) {
                insData.kycInsFinanceResponse.capitalSourceCountry = insData.kycInsFinanceResponse.capitalSourceCountry.split(',');
                insData.kycInsFinanceResponse.capitalSource = insData.kycInsFinanceResponse.capitalSource.split(',');
                initialValues = insData.kycInsFinanceResponse;
            }
        }
        else {
            let personalData = common.getLS('personalData');
            if (personalData && personalData.kycPersonalFinanceSaveResponse) {
                personalData.kycPersonalFinanceSaveResponse.capitalSource = personalData.kycPersonalFinanceSaveResponse.capitalSource.split(',');
                initialValues = personalData.kycPersonalFinanceSaveResponse;
            }
        }
        return (React.createElement(WrapperFinancialInfoCmp, null,
            React.createElement("div", { className: "routeName" }, "\u8D22\u52A1\u4FE1\u606F"),
            React.createElement("div", { className: "notice" }, "\u6839\u636E\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u4E2A\u4EBA\u6295\u8D44\u8005\u8FDB\u884C\u6570\u5B57\u8D27\u5E01\u6295\u8D44\u9700\u8981\u6709\u4E0D\u5C11\u4E8E800\u4E07\u5143\u7684\u6295\u8D44\u7EC4\u5408\uFF1B\u6216\u603B\u8D44\u4EA7\u4E0D\u5C11\u4E8E4000\u4E07\u5143"),
            React.createElement(Form, { ref: (e) => this.formRef = e, className: "financialForm", initialValues: initialValues }, formContent.map((item, index) => this.getDom(item, index, initialValues))),
            React.createElement("div", { className: "financialBtn" },
                React.createElement(Button, { className: "confirmBlueBtn saveBtn", onClick: this.handleSubmit }, "\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map