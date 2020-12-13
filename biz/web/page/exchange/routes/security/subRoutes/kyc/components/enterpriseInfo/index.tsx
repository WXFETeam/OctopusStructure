import * as React from "react";
import { Row, Col, Button, Input, Select, Checkbox, Form, message } from 'antd';
import { WrapperEnterpriseInfoCmp } from './styled';
const { Option } = Select;

type EnterpriseInfoProps = {
    [props: string]: any
}
type EnterpriseInfoState = {
}

export default class EnterpriseInfo extends React.Component<EnterpriseInfoProps, EnterpriseInfoState> {
    constructor(props: EnterpriseInfoProps) {
        super(props);
        this.state = {
        };
    }

    formRef = null;

    handleSubmit = (e) => {
        this.formRef.validateFields()
        .then((values) => {
            let that = this;
            ajax({
                url: 'orgKyc.saveOrgInfo',
                method: 'post',
                needToken: false,
                isFullData: true,
                data: Object.assign(values, {userNo: '2'}),
                callback(data) {
                    console.log(data);
                    if (data.errNo === '0') {
                        message.success('保存成功');
                    } else {
                        message.success(data.errMsg);
                    }
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    changeOfficeAddress = (e) => {
        let officeAddress = '';
        if (e.target.checked) {
            officeAddress = this.formRef.getFieldValue('registrationAddress');
        }
        this.formRef.setFieldsValue({
            officeAddress: officeAddress
        });
    }

    getDom = (item: any, index: any) => {
        let dom:any = '';
        switch(item.type) {
            case 'title':
                dom = <div key={index} className="formTit">{item.value}</div>
                break;
            case 'input':
                dom = <Form.Item key={index} className={item.float ? item.float + " formItem" : item.key + 'Item formItem' } name={item.key} rules={[{
                            required: item.required ? true : false
                        }]}>
                    <Input className={item.key} placeholder={item.placeholder} />
                </Form.Item>
                break;
            case 'select':
                dom = <Form.Item key={index} className={"formItem " + item.float } name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Select className={item.key} placeholder={item.placeholder}>
                        {item.options.map((item2: any, index2: any) => 
                            <Option key={index2} value={item2.value}>{item2.text}</Option>
                        )}
                    </Select>
                </Form.Item>
                break;
            case 'inputAndCheckbox':
                dom = <Form.Item key={index} className="formItem inputAndCheckbox">
                    <Form.Item name={item.key} noStyle rules={[{
                        required: item.required ? true : false
                    }]}>
                        <Input className={item.key} placeholder={item.placeholder} />
                    </Form.Item>
                    <Checkbox onChange={this.changeOfficeAddress}>与注册地址相同</Checkbox>
                </Form.Item>
                break;
        }
        return dom;
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
        return (
            <WrapperEnterpriseInfoCmp>
                <div className="routeName">企业信息</div>
                <Form ref={ (e) => this.formRef = e } className="enterpriseInfoForm" initialValues={initialValues}>
                    {formContent.map((item: any, index: any) => 
                        this.getDom(item, index)
                    )}
                </Form>
                <div className="enterpriseInfoBtn">
                    <Button className="confirmBlueBtn saveBtn" onClick={this.handleSubmit}>保存</Button>
                </div>
            </WrapperEnterpriseInfoCmp> 
        )
    }
}