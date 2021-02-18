import * as React from "react";
import { Row, Col, Button, Form, message } from 'antd';
import { WrapperUploadFileCmp } from './styled';
import UploadCmp from '@webExchangeComponents/upload/index';

type UploadFileProps = {
    [props: string]: any
}

type UploadFileState = {
}

export default class UploadFile extends React.Component<UploadFileProps, UploadFileState> {
    constructor(props: UploadFileProps) {
        super(props);
        this.state = {
        };
    }

    formRef = null;

    handleSubmit = (e) => {
        this.formRef.validateFields()
        .then((values) => {
            console.log(values)
            let that = this;
            ajax({
                url: 'orgKyc.saveOrgFile',
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

    onSuccess = (key, val) => {
        this.formRef.setFieldsValue({
            [key]: val
        });
    }

    onError = () => {}

    getDom = (item: any, index: any, initialValues: any) => {
        let dom:any = '';
        switch(item.type) {
            case 'point':
                dom = <div key={index} className="pointBox">
                    <span>文件上传说明：</span><br/>
                    1.所提供的所有文件必须是按罗马/拉丁字母顺序或者需要经公证的英文译本<br/>
                    2.上传的所有文件必须是pdf、jpg、jpeg或png格式<br/>
                    3.上传的所有内容必须是清晰可见的<br/>
                    4.文件大小：不超过5MB
                </div>
                break;
            case 'title':
                dom = <div key={index} className="formTit">{item.value}</div>
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
                    </div>
                </Form.Item>
                break;
        }
        return dom;
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
        return (
            <WrapperUploadFileCmp>
                <div className="routeName">公司文件</div>
                <Form ref={ (e) => this.formRef = e } className="uploadFileForm" initialValues={initialValues}>
                    {formContent.map((item: any, index: any) => 
                        this.getDom(item, index, initialValues)
                    )}
                </Form>
                <div className="uploadFileBtn">
                    <Button className="confirmBlueBtn saveBtn" onClick={this.handleSubmit}>保存</Button>
                </div>
            </WrapperUploadFileCmp> 
        )
    }
}