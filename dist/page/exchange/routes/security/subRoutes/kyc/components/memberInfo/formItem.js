import * as React from "react";
import { Button, Input, DatePicker, Select, Form, Checkbox, message } from 'antd';
import UploadCmp from '@webExchangeComponents/upload/index';
import moment from 'moment';
const { Option } = Select;
export default class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                values.userNo = '2';
                values.id = 0;
                let hasAdded = this.state.hasAdded;
                let memberList = common.getLS('memberList');
                let list = [values];
                if (hasAdded) {
                    // 修改
                    let formItem = this.props.formItem;
                    values.id = formItem.id;
                    if (memberList) {
                        memberList[values.id] = values;
                        list = memberList;
                    }
                    message.success('修改成功');
                }
                else {
                    // 添加
                    if (memberList) {
                        values.id = memberList.length;
                        list = memberList.concat([values]);
                    }
                    this.setState({
                        hasAdded: true
                    });
                    message.success('添加成功');
                }
                common.setLS('memberList', list);
                this.props.updateList(list);
            })
                .catch((err) => {
                console.log(err);
            });
        };
        this.changeExpireDate = (e) => {
            let date = '';
            if (e.target.checked) {
                date = '9999-12-30';
            }
            else {
                let now = new Date();
                let year = now.getFullYear();
                let month = (now.getMonth() + 1).toString();
                let day = now.getDate().toString();
                date = `${year}-${month.length < 2 ? '0' + month : month}-${day.length < 2 ? '0' + day : day}`;
            }
            this.formRef.setFieldsValue({
                expireDate: moment(date, 'YYYY-MM-DD')
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
            let prefixSelector = (item) => {
                return (React.createElement(Form.Item, { name: "prefix" },
                    React.createElement(Select, { defaultValue: item.selectDefault }, item.options.map((item2, index2) => React.createElement(Option, { key: index2, value: item2.value }, item2.text)))));
            };
            switch (item.type) {
                case 'title':
                    dom = React.createElement("div", { key: index, className: item.key + " formTit" }, item.value);
                    break;
                case 'input':
                    dom = React.createElement(Form.Item, { key: index, className: item.float ? item.float + " formItem" : item.key + 'Item formItem', name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Input, { className: item.key, placeholder: item.placeholder }));
                    break;
                case 'date':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float, name: item.key, rules: [{
                                type: 'object',
                                required: item.required ? true : false
                            }] },
                        React.createElement(DatePicker, { className: item.key, placeholder: item.placeholder, format: "YYYY-MM-DD" }));
                    break;
                case 'dateAndCheckbox':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float },
                        React.createElement(Form.Item, { name: item.key, noStyle: true, rules: [{
                                    required: item.required ? true : false
                                }] },
                            React.createElement(DatePicker, { placeholder: item.placeholder })),
                        React.createElement(Checkbox, { onChange: this.changeExpireDate }, "\u957F\u671F"));
                    break;
                case 'selectAndInput':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float, name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Input, { className: item.key, addonBefore: prefixSelector(item), placeholder: item.placeholder }));
                    break;
                case 'upload':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem uploadItem", name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement("div", { className: item.key },
                            React.createElement(UploadCmp, { keyName: item.key, fileName: initialValues[item.key], onSuccess: this.onSuccess, onError: this.onError }),
                            item.key === 'addressTest' ?
                                React.createElement("div", { className: "point" },
                                    "\u4E3A\u4E86\u907F\u514D\u5728\u5BA1\u6838\u60A8\u7684\u4FE1\u606F\u65F6\u51FA\u73B0\u5EF6\u8FDF\uFF0C\u8BF7\u786E\u4FDD\uFF1A",
                                    React.createElement("br", null),
                                    "1.\u60A8\u7684\u540D\u79F0\u53CA\u5730\u5740\u6E05\u6670\u53EF\u8BFB",
                                    React.createElement("br", null),
                                    "2.\u53EF\u63A5\u6536\u6587\u4EF6\u5305\u62EC\uFF1A\u4FE1\u7528\u5361/\u94F6\u884C\u5BF9\u8D26\u5355\u3001\u516C\u7528\u4E8B\u4E1A\u8D26\u5355\uFF08\u4F8B\u5982\uFF0C\u901A\u4FE1\u3001\u4E92\u8054\u7F51\u3001\u6709\u7EBF\u7535\u89C6\uFF09/\u653F\u5E9C\u673A\u6784\u51FD\u4EF6") : ''));
                    break;
                case 'select':
                    dom = React.createElement(Form.Item, { key: index, className: "formItem " + item.float, name: item.key, rules: [{
                                required: item.required ? true : false
                            }] },
                        React.createElement(Select, { className: item.key, placeholder: item.placeholder, defaultValue: item.selectDefault }, item.options.map((item2, index2) => React.createElement(Option, { key: index2, value: item2.value }, item2.text))));
                    break;
                case 'point':
                    dom = React.createElement("div", { key: index, className: "formItem pointBox" },
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
            }
            return dom;
        };
        this.state = {
            hasAdded: false
        };
    }
    componentWillMount() {
        let formItem = this.props.formItem;
        if (formItem && formItem.firstName) {
            this.setState({
                hasAdded: true
            });
        }
    }
    render() {
        const formContent = [
            {
                type: 'title',
                key: 'baseInfo',
                value: '基本信息'
            },
            {
                type: 'input',
                key: 'firstName',
                placeholder: '名字',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'middleName',
                float: 'right',
                placeholder: '中间名（选填）'
            },
            {
                type: 'input',
                key: 'lastName',
                placeholder: '姓',
                float: 'left',
                required: true
            },
            {
                type: 'select',
                key: 'gender',
                selectDefault: 0,
                placeholder: '性别',
                options: [
                    {
                        text: '男',
                        value: 0
                    },
                    {
                        text: '女',
                        value: 1
                    }
                ],
                float: 'right',
                required: true
            },
            {
                type: 'date',
                key: 'birthDate',
                placeholder: '出生日期',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'position',
                placeholder: '职位',
                float: 'right',
                required: true
            },
            {
                type: 'selectAndInput',
                key: 'phone',
                selectDefault: '852',
                options: [
                    {
                        text: '香港 +852',
                        value: '852'
                    },
                    {
                        text: '上海 +021',
                        value: '021'
                    }
                ],
                placeholder: '电话号码',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'email',
                placeholder: '电子邮箱（企业邮箱）',
                float: 'right',
                required: true
            },
            {
                type: 'title',
                key: 'addressInfo',
                value: '住址信息'
            },
            {
                type: 'input',
                key: 'address',
                placeholder: '常住地址',
                required: true
            },
            {
                type: 'input',
                key: 'city',
                placeholder: '城市',
                float: 'left',
                required: true
            },
            {
                type: 'input',
                key: 'country',
                placeholder: '国家',
                float: 'right',
                required: true
            },
            {
                type: 'title',
                key: 'addressTestTit',
                value: '现有住址的证明（不超过3个月的银行或公用事业声明）'
            },
            {
                type: 'upload',
                key: 'addressProofFile',
                required: true
            },
            {
                type: 'title',
                key: 'cardInfo',
                value: '证件信息'
            },
            {
                type: 'select',
                key: 'issuingCountry',
                placeholder: '选择签发国家/地图',
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
                type: 'select',
                key: 'certType',
                placeholder: '证件类型',
                options: [
                    {
                        text: '身份证',
                        value: '1'
                    },
                    {
                        text: '护照',
                        value: '2'
                    }
                ],
                float: 'right',
                required: true
            },
            {
                type: 'input',
                key: 'certId',
                placeholder: '证件号码',
                float: 'left',
                required: true
            },
            {
                type: 'dateAndCheckbox',
                key: 'expireDate',
                placeholder: '有效期',
                float: 'right',
                required: true
            },
            {
                type: 'point',
                key: 'point'
            },
            {
                type: 'title',
                key: 'cardFrontTit',
                value: '身份证正面'
            },
            {
                type: 'upload',
                key: 'certFrontPhoto',
                value: '身份证正面',
                required: true
            },
            {
                type: 'title',
                key: 'cardBackTit',
                value: '身份证反面'
            },
            {
                type: 'upload',
                key: 'certBackPhoto',
                value: '身份证反面',
                required: true
            },
            {
                type: 'title',
                key: 'translateFileTit',
                value: '身份信息翻译文件（选填）'
            },
            {
                type: 'upload',
                key: 'certTranslateFile',
                value: '身份信息翻译文件',
                required: true
            },
            {
                type: 'title',
                key: 'selfieFileTit',
                value: '自拍照（手持证件+带有“HashKey&今天日期”的纸条）'
            },
            {
                type: 'upload',
                key: 'certPhotoUrl',
                required: true
            }
        ];
        const formItem = this.props.formItem;
        const hasAdded = this.state.hasAdded;
        if (formItem && formItem.birthDate) {
            formItem.birthDate = moment(formItem.birthDate, 'YYYY-MM-DD');
            formItem.expireDate = moment(formItem.expireDate, 'YYYY-MM-DD');
        }
        let initialValues = formItem;
        return (React.createElement(Form, { ref: (e) => this.formRef = e, className: "memberInfoForm", initialValues: initialValues },
            formContent.map((item, index) => this.getDom(item, index, initialValues)),
            React.createElement(Button, { className: "modifyBtn", onClick: this.handleSubmit }, hasAdded ? '修改' : '添加')));
    }
}
//# sourceMappingURL=formItem.js.map