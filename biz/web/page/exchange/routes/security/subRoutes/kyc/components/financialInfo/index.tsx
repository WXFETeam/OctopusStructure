import * as React from "react";
import { Row, Col, Button, Input, Select, Radio, Checkbox, Form, message } from 'antd';
import { WrapperFinancialInfoCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';
const { Option } = Select;

type FinancialInfoProps = {
    [props: string]: any,
    user: string
}

type FinancialInfoState = {
    employment: number
}

export default class FinancialInfo extends React.Component<FinancialInfoProps, FinancialInfoState> {
    constructor(props: FinancialInfoProps) {
        super(props);
        this.state = {
            employment: 0
        };
    }

    formRef = null;

    handleSubmit = (e) => {
        this.formRef.validateFields()
        .then((values) => {
            let that = this;
            let user = this.props.user;
            let url = '';
            if (user === 'institution') {
                // 企业认证
                url = 'orgKyc.saveOrgFinanceInfo';
                values.capitalSourceCountry = values.capitalSourceCountry.toString();
            } else {
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

    changeEmployment = (e) => {
        this.setState({
            employment: Number(e.target.value)
        });
    }

    onSuccess = (key, val) => {
        this.formRef.setFieldsValue({
            [key]: val
        });
    }

    onError = () => {}

    getDom = (item: any, index: any, initialValues: any) => {
        const employment = this.state.employment;
        const normFile = (e) => {
            console.log(e.fileList);
            return '';
        }
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
            case 'radio':
                dom = <Form.Item key={index} className="formItem">
                    <div className={item.key}>
                        <Form.Item name={item.key} noStyle rules={[{
                            required: item.required ? true : false
                        }]}>
                            <Radio.Group onChange={this.changeEmployment}>
                                {item.radios.map((item2: any, index2: any) => 
                                    <Radio key={index2} value={item2.value}>{item2.text}</Radio>
                                )}
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="employmentStateInput" noStyle>
                            <Input className={employment == 5 ? "active" : ""} />
                        </Form.Item>
                    </div>
                </Form.Item>
                break;
            case 'checkbox':
                dom = <Form.Item key={index} className="formItem formCheckbox" name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Checkbox.Group className={item.key}>
                        <Row>
                            {item.checkboxs.map((item2: any, index2: any) => 
                                <Col span={8} key={index2}>
                                    <Checkbox value={item2.value}>{item2.text}</Checkbox>
                                </Col>
                            )}
                        </Row>
                    </Checkbox.Group>
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
                        <div className="point">
                            所提供的所有文件必须是按罗马/拉丁字母顺序或者需要经公证的英文译本<br/>
                            上传的所有文件必须是pdf、jpg、jpeg或png格式<br/>
                            上传的所有内容必须是清晰可见的<br/>
                            文件大小：不超过5MB
                            <p>*上传必要的最低资产/投资组合规模（即相关日期不少于4000万元的投资组合）所要求的证明文件</p>
                        </div>
                    </div>
                </Form.Item>
                break;
        }
        return dom;
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
        if (user === 'institution') formContent = [
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
        } else {
            let personalData = common.getLS('personalData');
            if (personalData && personalData.kycPersonalFinanceSaveResponse) {
                personalData.kycPersonalFinanceSaveResponse.capitalSource = personalData.kycPersonalFinanceSaveResponse.capitalSource.split(',');
                initialValues = personalData.kycPersonalFinanceSaveResponse;
            }
        }
        return (
            <WrapperFinancialInfoCmp>
                <div className="routeName">财务信息</div>
                <div className="notice">根据相关法律法规，个人投资者进行数字货币投资需要有不少于800万元的投资组合；或总资产不少于4000万元</div>
                <Form ref={ (e) => this.formRef = e } className="financialForm" initialValues={initialValues}>
                    {formContent.map((item: any, index: any) => 
                        this.getDom(item, index, initialValues)
                    )}
                </Form>
                <div className="financialBtn">
                    <Button className="confirmBlueBtn saveBtn" onClick={this.handleSubmit}>保存</Button>
                </div>
            </WrapperFinancialInfoCmp> 
        )
    }
}