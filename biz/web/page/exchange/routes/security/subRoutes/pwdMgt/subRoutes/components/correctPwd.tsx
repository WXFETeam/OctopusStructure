import * as React from "react";
import { Row, Col, Button, Input, Form, message } from 'antd';
import { WrapperCorrectPwdCmp } from './styled';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { startCase, replace } from 'lodash';
import { withRouter } from 'react-router-dom';
const LightIcon = require("@webExchangeImgs/security/lightIcon.png");
// interface CorrectPwdFormProps extends FormComponentProps {
//     [props: string]: any,
//     userStore?: any
// }

type CorrectPwdFormProps = {
    [props: string]: any,
    userStore?: any
}

type CorrectPwdState = {
    userStore?: any,
    langStore?: any,
    history?: any,
    focusOldPassword: string,
    focusNewPassword: string,
    focusConfirmPassword: string,
    showOrHidePwdOld: boolean,
    showOrHidePwdNew: boolean,
    showOrHidePwdConfirm: boolean,
    formValues: any,
}
@renderBreadcrumbs
export default class CorrectPwd extends React.Component<CorrectPwdFormProps, CorrectPwdState> {
    constructor(props: CorrectPwdFormProps) {
        super(props);
        this.state = {
            focusOldPassword: "",
            focusNewPassword: "",
            focusConfirmPassword: "",
            showOrHidePwdOld: true,
            formValues: null,
            showOrHidePwdNew: true,
            showOrHidePwdConfirm: true
        };
    }

    formRef = null;

    showOrHidePwdOld = () => {
        this.setState({
            showOrHidePwdOld: !this.state.showOrHidePwdOld
        });
    }

    showOrHidePwdNew = () => {
        this.setState({
            showOrHidePwdNew: !this.state.showOrHidePwdNew
        });
    }

    showOrHidePwdConfirm = () => {
        this.setState({
            showOrHidePwdConfirm: !this.state.showOrHidePwdConfirm
        });
    }


    setInputStatus = ({ type, status }) => {
        let key = `focus${replace(startCase(type), " ", "")}`;
        let result;
        if (status) {
            result = "up";
        } else {
            if (this.formRef.getFieldValue(type)) {
                result = "up";
            } else {
                result = ""
            }
        }
        //@ts-ignore
        this.setState({ [key]: result })
    }

    handleSubmit = () => {
        const { userStore, changeStep } = this.props;
        let isExchangePage = window.location.pathname.includes('pwdMgt/exchange'); //设置交易密码
        let isLoginPage = window.location.pathname.includes('login'); //修改登录密码
        let isfinancialPage = window.location.pathname.includes('financial'); //设置资金密码
        this.formRef.validateFields().then((values) => {
            // let loginValues = {
            //     oldPassword: sha256(md5(values.oldPassword)),
            //     newPassword: sha256(md5(values.newPassword)),
            //     token: common.getLS("userInfo").token
            // }
            let financialValues = {
                accountNumber: "cc@126.com",
                fundPassWord: sha256(md5(values.newPassword)),
                confirmPassword:sha256(md5(values.confirmPassword)),
                passWord: sha256(md5(values.oldPassword))
            }

            let exchangeValues = {
                accountNumber: "cc@126.com",
                businessPassWord: sha256(md5(values.newPassword)),
                confirmPassword:sha256(md5(values.confirmPassword)),
                passWord: sha256(md5(values.oldPassword))
            }
           
            if (isLoginPage == true) {
                // ajax({
                //     url: 'security.updatePassword',
                //     method: 'post',
                //     data: loginValues,
                //     isFullData: true,
                //     callback(data) {
                //         if (data.errNo == 0) {
                //             message.success("修改登录密码成功")
                //         } else {
                //             message.error("修改登录密码失败")
                //         }
                //     }
                // })
            } else if (isfinancialPage == true) {
                ajax({
                    url: 'security.setFundPassWord',
                    method: 'post',
                    data: financialValues,
                    isFullData: true,
                    callback(data) {
                        if (data.errNo == 0) {
                            message.success("设置资金密码成功")
                        } else {
                            message.error("修改资金密码失败")
                        }
                    }
                })
            }else if (isExchangePage == true) {
                ajax({
                    url: 'security.setBusinessPassWord',
                    method: 'post',
                    data: exchangeValues,
                    isFullData: true,
                    callback(data) {
                        if (data.errNo == 0) {
                            message.success("设置资金密码成功")
                        } else {
                            message.error("修改资金密码失败")
                        }
                    }
                })
            }
        })
    }


    render() {
        const { history, match } = this.props;
        let isExchangePage = window.location.pathname.includes('pwdMgt/exchange');
        let isLoginPage = window.location.pathname.includes('login');
        let isfinancialPage = window.location.pathname.includes('financial');
        return (
            <WrapperCorrectPwdCmp>
                <Row justify="center">
                    <Col className="title">{isExchangePage ? "设置交易密码" : (isLoginPage ? "修改登录密码" : (isfinancialPage ? "设置资金密码" : ""))}</Col>
                </Row>
                <Row justify="center">
                    <div className="tip"><img src={LightIcon} />{isExchangePage ? "资金密码将用于数字货币交易，请妥善保管。" : (isLoginPage ? "为了保证您的安全，重置密码后24小时内无。" : (isfinancialPage ? "资金密码将用于资产转出，请妥善保管。" : ""))}</div>
                </Row>
                <Row justify="center">
                    <Form ref={(e) => this.formRef = e} className="CorrectPwdForm">
                        <Form.Item
                            className="formItem pwd"
                            name="oldPassword"
                            rules={[{
                                required: true, message: "请输入你的密码"
                            }]}
                        >
                            <div className="pwdBox">
                                <div className={"label " + this.state.focusOldPassword}>登录密码</div>
                                <Input type={this.state.showOrHidePwdOld ? "password" : "text"} onFocus={this.setInputStatus.bind(this, { type: "oldPassword", status: true })} onBlur={this.setInputStatus.bind(this, { type: "oldPassword", status: false })} />
                                <div onClick={this.showOrHidePwdOld} className={this.state.showOrHidePwdOld ? "pwdStatus show" : "pwdStatus hide"}></div>
                            </div>
                        </Form.Item>
                        <Form.Item
                            className="formItem pwd"
                            name="newPassword"
                            rules={[{
                                required: true, message: "请输入你的密码"
                            }]}
                        >
                            <div className="pwdBox">
                                <div className={"label " + this.state.focusNewPassword}>{isExchangePage ? "设置交易密码" : (isLoginPage ? "新密码" : (isfinancialPage ? "设置资金密码" : ""))}</div>
                                <Input type={this.state.showOrHidePwdNew ? "password" : "text"} onFocus={this.setInputStatus.bind(this, { type: "newPassword", status: true })} onBlur={this.setInputStatus.bind(this, { type: "newPassword", status: false })} />
                                <div onClick={this.showOrHidePwdNew} className={this.state.showOrHidePwdNew ? "pwdStatus show" : "pwdStatus hide"}></div>
                            </div>
                        </Form.Item>

                        <Form.Item
                            className="formItem pwd"
                            name="confirmPassword"
                            rules={[{
                                required: true, message: "请输入你的密码"
                            }]}
                        >
                            <div className="pwdBox">
                                <div className={"label " + this.state.focusConfirmPassword}>{isExchangePage ? "确认资金密码" : (isLoginPage ? "确认新密码" : (isfinancialPage ? "确认资金密码": ""))}</div>
                                <Input type={this.state.showOrHidePwdConfirm ? "password" : "text"} onFocus={this.setInputStatus.bind(this, { type: "confirmPassword", status: true })} onBlur={this.setInputStatus.bind(this, { type: "confirmPassword", status: false })} />
                                <div onClick={this.showOrHidePwdConfirm} className={this.state.showOrHidePwdConfirm ? "pwdStatus show" : "pwdStatus hide"}></div>
                            </div>
                        </Form.Item>
                        <Button className="confirmBlueBtn" onClick={this.handleSubmit}>确认修改</Button>
                    </Form>
                </Row>

            </WrapperCorrectPwdCmp>
        )
    }
}


// const WrappedCorrectPwd = Form.create<CorrectPwdFormProps>({ name: 'register' })(CorrectPwd);
// export default WrappedCorrectPwd;