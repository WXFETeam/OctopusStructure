import * as React from "react";
import { Row, Col, Button, Modal, message } from 'antd';
import { WrapperAgreementCmp, GlobalStyle } from './styled';

type AgreementProps = {
    [props: string]: any,
    user: string
}

type AgreementState = {
    reskExplanationUrl: string,
    applyUrl: string,
    businessUrl: string,
    visible: boolean,
    currentUrl: string
}

export default class Agreement extends React.Component<AgreementProps, AgreementState> {
    constructor(props: AgreementProps) {
        super(props);
        this.state = {
            reskExplanationUrl: '0',
            applyUrl: '0',
            businessUrl: '0',
            currentUrl: '',
            visible: false
        };
    }

    handleCancel = () => {
        this.setState({
            visible: false
        });
    }

    read = () => {
        let key = this.state.currentUrl;
        if (key == 'reskExplanationUrl') {
            this.setState({
                visible: false,
                reskExplanationUrl: '1'
            });
        } else if (key == 'applyUrl') {
            this.setState({
                visible: false,
                applyUrl: '1'
            });
        } else if (key == 'businessUrl') {
            this.setState({
                visible: false,
                businessUrl: '1'
            });
        }
    }

    confirmAgreememt = (key) => {
        this.setState({
            visible: true,
            currentUrl: key
        });
    }

    saveProtocol = () => {
        let that = this;
        let user = this.props.user;
        let url = '';
        let postData = null;
        if (user === 'institution') {
            // 企业认证
            url = 'orgKyc.saveOrgProtocol';
            postData = {
                userNo: '2',
                applyName: 'apply',
                applyUrl: '1',
                businessName: 'business',
                businessUrl: '1',
                reskExplanationName: 'reskExplanation',
                reskExplanationUrl: '1'
            };
        } else {
            // 个人认证
            url = 'personalKyc.savePersonalProtocol';
            postData = {
                userNo: '2',
                kycType: '1',
                applyName: 'apply',
                applyUrl: '1',
                businessName: 'business',
                businessUrl: '1',
                reskExplanationName: 'reskExplanation',
                reskExplanationUrl: '1'
            };
        }
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

    componentWillMount() {
        let user = this.props.user;
        let protocol = null;
        if (user == 'institution') {
            // 企业
            protocol = common.getLS('insData').kycInsProtocolResponse;
        } else {
            // 个人
            protocol = common.getLS('personalData').kycPersonalProtocolSaveResponse;
        }
        if (protocol) {
            this.setState({
                reskExplanationUrl: protocol.reskExplanationUrl,
                applyUrl: protocol.applyUrl,
                businessUrl: protocol.businessUrl
            });
        }
    }

    render() {
        const agreementList = [
            {
                key: 'reskExplanationUrl',
                name: '数字货币风险解释', // reskExplanationUrl
                content: '请认真阅读数字货币风险解释，了解并确认所有投资风险'
            },
            {
                key: 'applyUrl', // applyUrl
                name: '专业投资者申请书',
                content: '请认真阅读专业投资者申请书，了解并确认所有投资风险'
            },
            {
                key: 'businessUrl', // businessUrl
                name: '专业投资者业务条款',
                content: '请认真阅读并确认专业投资者业务条款'
            }
        ];
        const { reskExplanationUrl, applyUrl, businessUrl, visible } = this.state;
        return (
            <WrapperAgreementCmp>
                <GlobalStyle />
                <Modal
                    visible={visible}
                    title="Title"
                    onOk={this.handleCancel}
                    footer={null}
                    onCancel={this.handleCancel}
                    className="agreementModal"
                >
                    <div className="modalHeader">
                        <div className="headerTit">专业投资者申请书</div>
                        <div className="headerPoint">请认真阅读专业投资者申请书，了解并确认所有投资风险</div>
                    </div>
                    <div className="modalContent"></div>
                    <div className="modalBtn">
                        <Button className="confirmBlueBtn cfmBtn" onClick={this.read}>我已阅读并知晓</Button>
                    </div>
                </Modal>
                <div className="routeName">签署协议</div>
                <div className="agreementTit">请认真阅读并签署以下协议</div>
                {agreementList.map((item, index) => 
                    <div className={item.key + " agreementItem"} key={index}>
                        <div className="itemLeft">
                            <div className="name">{item.name}</div>
                            <div className="content">{item.content}</div>
                        </div>
                        <div className="itemRight">
                            {(item.key == 'reskExplanationUrl' && reskExplanationUrl == '1') ||
                             (item.key == 'applyUrl' && applyUrl == '1') ||
                             (item.key == 'businessUrl' && businessUrl == '1') ? 
                                <div className="confirmAgreement">
                                    <a onClick={() => {this.confirmAgreememt(item.key);}}>查看协议</a>
                                    <span>我已同意并确认</span>
                                    <span className="icon"></span>
                                </div> : <Button onClick={() => {this.confirmAgreememt(item.key);}}>查看并确认</Button>
                            }
                        </div>
                    </div>
                )}
                <div className="agreementBtn">
                    <Button className={reskExplanationUrl == '1' && applyUrl == '1' && businessUrl == '1' ? "confirmBlueBtn saveBtn" : "saveBtn"} onClick={this.saveProtocol}>确认签署并保存</Button>
                </div>
            </WrapperAgreementCmp> 
        )
    }
}