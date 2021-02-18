import * as React from "react";
import { Row, Col, Button, Form, Input, Checkbox, message } from 'antd';
import { WrapperOtherInfoCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';
const { TextArea } = Input;

type OtherInfoProps = {
    [props: string]: any,
    user: string
}

type OtherInfoState = {
    imageUrl: any
}

export default class OtherInfo extends React.Component<OtherInfoProps, OtherInfoState> {
    constructor(props: OtherInfoProps) {
        super(props);
        this.state = {
            imageUrl: null
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
                url = 'orgKyc.saveOrgSupplement';
            } else {
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
                        } else {
                            message.success(data.errMsg);
                        }
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onSuccess = (key, val) => {
        this.formRef.setFieldsValue({[key]: val});
    }

    onError = () => {}

    getDom = (item: any, index: any, initialValues: any) => {
        let dom: any = '';
        switch(item.type) {
            case 'title':
                dom = <div key={index} className="formTit">{item.value}</div>
                break;
            case 'checkbox':
                dom = <Form.Item key={index} valuePropName="checked" className="formItem formCheckbox" name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Checkbox>{item.text}</Checkbox>
                </Form.Item>
                break;
            case 'textAreaAndUpload':
                dom = <Form.Item key={index} className="formItem uploadItem" name={item.key} rules={[{
                    required: item.required ? true : false
                }]}>
                    <Form.Item name={item.inputKey} noStyle>
                        <TextArea placeholder={item.placeholder} />
                    </Form.Item>
                    <Form.Item name={item.uploadKey} noStyle>
                        <UploadCmp 
                            keyName={item.uploadKey} 
                            fileName={initialValues[item.uploadKey]} 
                            onSuccess={this.onSuccess} 
                            onError={this.onError} />
                    </Form.Item>
                </Form.Item>
                break;
        }
        return dom;
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
        } else {
            let personalData = common.getLS('personalData');
            if (personalData && personalData.kycPersonalSupplementSaveResponse) {
                initialValues = personalData.kycPersonalSupplementSaveResponse;
            }
        }
        return (
            <WrapperOtherInfoCmp>
                <div className="routeName">补充文件</div>
                <Form ref={ (e) => this.formRef = e } className="otherInfoForm" initialValues={initialValues}>
                    {formContent.map((item: any, index: any) => 
                        this.getDom(item, index, initialValues)
                    )}
                </Form>
                <div className="otherInfoBtn">
                    <Button className="confirmBlueBtn saveBtn" onClick={this.handleSubmit}>保存</Button>
                </div>
            </WrapperOtherInfoCmp> 
        )
    }
}