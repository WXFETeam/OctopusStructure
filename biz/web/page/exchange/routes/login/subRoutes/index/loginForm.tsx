import * as React from "react";
import { Row, Input, Button, message, Form } from 'antd';
// import { FormComponentProps } from '@ant-design';
import { WrapperLoginFormCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { startCase, replace } from 'lodash';
import ImageCode from '@webExchangeComponents/imageCode/index';

// interface LoginFormProps extends FormComponentProps {
//     // [props: string]: any,
//     history?: any
//     userStore?: any
// }

type LoginFormProps = {
    history?: any
    userStore?: any
}
type LoginFormState = {
    focusEmail: string,
    focusPassword: string,
    showOrHidePwd: boolean,
    showImageCode: boolean,
    formValues: any,
    uuid: string
}

@inject('userStore')
@observer
export default class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            focusEmail: "",
            focusPassword: "",
            showOrHidePwd: true,
            showImageCode: false,
            formValues: null,
            uuid: ''
        }
    }
    
    formRef = null;
    
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

    showOrHidePwd = () => {
        this.setState({
            showOrHidePwd: !this.state.showOrHidePwd
        });
    }

    checkEmail = (rule, value, callback) => {
        let reg = /^([\w!.%+\-])+@([\w\-])+(?:\.[\w\-]+)+$/;
        if (value && !reg.test(value)) {
            callback("请输入正确的邮箱格式！");
        } else {
            callback();
        }
    }

    handleSubmit = () => {
        this.formRef.validateFields()   
        .then((values) => {
            this.setState({
                formValues: values,
                showImageCode: true
            });
        })
        .catch((err) => {
        })
    }

    onSuccess = (uuid) => {
        this.setState({
            uuid: uuid
        }, () => {
            this.authPassword();
        });
    }

    onError = () => {
        console.log('error');
    }

    onClose = () => {
        this.setState({
            showImageCode: false
        });
    }

    authDetail = (userId: string) => {
        let that = this;
        ajax({
            url: 'login.authDetail',
            method: 'get',
            needToken: false,
            urlName: `/${userId}`,
            callback(data) {
                let mfa = data.mfa || [];
                if (mfa.length <= 0) {
                    // 没有开启mfa,直接登录
                    that.login();
                }
            }
        })
    }

    authPassword = () => {
        let that = this;
        let values = JSON.parse(JSON.stringify(this.state.formValues));
        ajax({
            url: 'login.authPassword',
            method: 'post',
            needToken: false,
            data: Object.assign(values, {password: sha256(md5(values.password))}),
            callback(data) {
                if (data && data.userId) {
                    that.authDetail(data.userId);
                } else {
                    message.error('邮箱或密码错误');
                }
            }
        })
    }

    login = () => {
        let that = this;
        let values = JSON.parse(JSON.stringify(this.state.formValues));
        let uuid = this.state.uuid;
        ajax({
            url: 'login.login',
            method: 'post',
            needToken: false,
            data: Object.assign(values, {password: sha256(md5(values.password)), code: uuid}),
            callback(data) {
                if (data) {
                    // success
                    that.props.userStore.changeUserInfo({
                        token: data.accessToken,
                        email: values.email
                    });
                    message.success('登录成功');
                    that.props.history.push('security');
                    // 测试
                    // if (values.email == 'test@163.com') {
                    //     common.setLS("clientId", "CL17");
                    // } else {
                    //     common.setLS("clientId", "CL19");
                    // }
                }
            }
        })
    }

    render() {
        const showImageCode = this.state.showImageCode;
        const params = {
            showImageCode: this.state.showImageCode,
            onClose: this.onClose,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        // const { getFieldDecorator } = this.props.form;
        const { history } = this.props;
        
        return (
            <WrapperLoginFormCmp>
                <Form ref={(e) => this.formRef = e} layout="horizontal" name="login" >
                    <Form.Item 
                        className="formItem email" 
                        name="email" 
                        rules={[{
                                required: true, message: "请输入你的邮箱"
                            }, {
                                validator: this.checkEmail
                            }]}
                    >
                        <div className="emailBox">
                            <div className={"label " + this.state.focusEmail}>邮箱</div>
                            <Input onFocus={this.setInputStatus.bind(this, { type: "email", status: true })} onBlur={this.setInputStatus.bind(this, { type: "email", status: false })} />
                        </div>
                    </Form.Item>
                    <Form.Item 
                        className="formItem pwd"
                        name="password"
                        rules={[{
                            required: true, message: "请输入你的密码"
                        }]}
                    >
                        <div className="pwdBox">
                            <div className={"label " + this.state.focusPassword}>密码</div>
                            <Input type={this.state.showOrHidePwd ? "password" : "text"} onFocus={this.setInputStatus.bind(this, { type: "password", status: true })} onBlur={this.setInputStatus.bind(this, { type: "password", status: false })} />
                            <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                        </div>
                    </Form.Item>
                    <Button className="confirmBlueBtn" onClick={this.handleSubmit}>登录</Button>
                </Form>
                <div className="formBottom">
                    <a onClick={() => {history.push('/forgotPwd');}}>忘记密码？</a>
                    <span>还没有帐号？<a onClick={() => {history.push('register');}} className="regA">立即注册</a></span>
                </div>
                {showImageCode ? <ImageCode {...params} /> : ''}
            </WrapperLoginFormCmp>
        )
    }
}

// const WrappedLoginForm = Form.create<LoginFormProps>({ name: 'login' })(LoginForm);
// export default LoginForm;