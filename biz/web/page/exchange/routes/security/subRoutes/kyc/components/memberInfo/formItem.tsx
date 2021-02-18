import * as React from "react";
import { Row, Col, Button, Input, DatePicker, Select, Form, Checkbox, message } from 'antd';
import UploadCmp from '@webExchangeComponents/upload/index';
import moment from 'moment';
const { Option } = Select;

type FormItemProps = {
    [props: string]: any,
    formItem: any,
    updateList: any
}

type FormItemState = {
    hasAdded: boolean
}

export default class FormItem extends React.Component<FormItemProps, FormItemState> {
    constructor(props: FormItemProps) {
        super(props);
        this.state = {
            hasAdded: false
        };
    }

    formRef = null;

    handleSubmit = (e) => {
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
            } else {
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
            console.log(err)
        })
    }

    changeExpireDate = (e) => {
        let date = '';
        if (e.target.checked) {
            date = '9999-12-30';
        } else {
            let now = new Date();
            let year = now.getFullYear();
            let month = (now.getMonth() + 1).toString();
            let day = now.getDate().toString();
            date = `${year}-${month.length < 2 ? '0' + month : month}-${day.length < 2 ? '0' + day : day}`
        }
        this.formRef.setFieldsValue({
            expireDate : moment(date, 'YYYY-MM-DD')
        });
    }

    onSuccess = (key, val) => {
        this.formRef.setFieldsValue({
            [key]: val
        });
    }

    onError = () => {}

    getDom = (item: any, index: any, initialValues: any) => {
        let dom:any = '';
        let prefixSelector = (item) => {
            return (
                <Form.Item name="prefix">
                    <Select defaultValue={item.selectDefault}>
                        {item.options.map((item2: any, index2: any) => 
                            <Option key={index2} value={item2.value}>{item2.text}</Option>
                        )}
                    </Select>
                </Form.Item>
            );
        };
        switch(item.type) {
            case 'title':
                dom = <div key={index} className={item.key + " formTit"}>{item.value}</div>
                break;
            case 'input':
                dom = <Form.Item key={index} className={item.float ? item.float + " formItem" : item.key + 'Item formItem' } name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Input className={item.key} placeholder={item.placeholder} />
                </Form.Item>
                break;
            case 'date':
                dom = <Form.Item key={index} className={"formItem " + item.float } name={item.key} rules={[{
                    type: 'object',
                    required: item.required ? true : false
                }]}>
                    <DatePicker className={item.key} placeholder={item.placeholder} format="YYYY-MM-DD" />
                </Form.Item>
                break;
            case 'dateAndCheckbox':
                dom = <Form.Item key={index} className={"formItem " + item.float}>
                    <Form.Item name={item.key} noStyle rules={[{
                        required: item.required ? true : false
                    }]}>
                        <DatePicker placeholder={item.placeholder} />
                    </Form.Item>
                    <Checkbox onChange={this.changeExpireDate}>长期</Checkbox>
                </Form.Item>
                break;
            case 'selectAndInput':
                dom = <Form.Item key={index} className={"formItem " + item.float } name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Input className={item.key} addonBefore={prefixSelector(item)} placeholder={item.placeholder} />
                </Form.Item>
                break;
            case 'upload':
                dom = <Form.Item key={index} className="formItem uploadItem" name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <div className={item.key}>
                        <UploadCmp 
                            keyName={item.key}
                            fileName={initialValues[item.key]} 
                            onSuccess={this.onSuccess} 
                            onError={this.onError} />
                        {item.key === 'addressTest' ? 
                            <div className="point">
                                为了避免在审核您的信息时出现延迟，请确保：<br/>
                                1.您的名称及地址清晰可读<br/>
                                2.可接收文件包括：信用卡/银行对账单、公用事业账单（例如，通信、互联网、有线电视）/政府机构函件
                            </div> : ''
                        }
                    </div>
                </Form.Item>
                break;
            case 'select':
                dom = <Form.Item key={index} className={"formItem " + item.float } name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Select className={item.key} placeholder={item.placeholder} defaultValue={item.selectDefault}>
                        {item.options.map((item2: any, index2: any) => 
                            <Option key={index2} value={item2.value}>{item2.text}</Option>
                        )}
                    </Select>
                </Form.Item>
                break;
            case 'point':
                dom = <div key={index} className="formItem pointBox">
                    <span>文件上传说明：</span><br/>
                    1.所提供的所有文件必须是按罗马/拉丁字母顺序或者需要经公证的英文译本<br/>
                    2.上传的所有文件必须是pdf、jpg、jpeg或png格式<br/>
                    3.上传的所有内容必须是清晰可见的<br/>
                    4.文件大小：不超过5MB
                </div>
                break;
        }
        return dom;
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
        return (
            <Form ref={ (e) => this.formRef = e } className="memberInfoForm" initialValues={initialValues}>
                {formContent.map((item: any, index: any) => 
                    this.getDom(item, index, initialValues)
                )}
                <Button className="modifyBtn" onClick={this.handleSubmit}>{hasAdded ? '修改' : '添加'}</Button>
            </Form>
        )
    }
}