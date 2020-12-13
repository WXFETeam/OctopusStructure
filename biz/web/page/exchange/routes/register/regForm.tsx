import * as React from "react";
import { Row, Input, Select, Checkbox, Button, Form } from 'antd';
const { Option } = Select;
import { WrappedRegisterFormCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { startCase, replace } from 'lodash';
import ImageCode from '@webExchangeComponents/imageCode/index';

type RegisterFormProps = {
    userStore?: any
    langStore?: any
    nextStep: any,
    history: any
}

type RegisterFormState = {
    focusEmail: string
    focusPassword: string
    focusReferralCode: string,
    showOrHidePwd: boolean,
    showImageCode: boolean,
    isAgreeClause: boolean,
    inputPassword: string,
    areaList: Array<any>
}

@inject('userStore', 'langStore')
@observer
export default class RegisterForm extends React.Component<RegisterFormProps, RegisterFormState> {
    constructor(props: RegisterFormProps) {
        super(props);
        this.state = {
            focusEmail: "",
            focusPassword: "",
            focusReferralCode: "",
            showOrHidePwd: true,
            showImageCode: false,
            isAgreeClause: false,
            inputPassword: '',
            areaList: []
        }
    }

    formRef = null;

    componentWillMount() {
        let that = this;
        this.props.userStore.clearUserInfo();
        ajax({
            url: "register.getAreaList",
            callback(data) {
                that.setState({areaList: data.list})
            }
        });
    }

    onSuccess = (identityCode) => {
        const { userStore } = this.props;
        let values = this.formRef.getFieldsValue();
        let that = this;
        this.setState((state) => {
            ajax({
                url: 'register.submitBasic',
                method: 'post',
                data: Object.assign(values,{
                    identityCode, 
                    password:sha256(md5(values.password))
                }),
                callback(data) {
                    userStore.changeUserInfo({
                        email: this.formRef.getFieldValue("email"),
                        userId: data.userId
                    });
                    that.props.nextStep();
                }
            });
            return { showImageCode: false }
        })
    }

    onError = () => {
        console.log('error');
    }

    onClose = () => {
        this.setState({
            showImageCode: false
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

    checkPwd = (rule, value, callback) => {
        let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,30}$/;
        if (value && !reg.test(value)) {
            callback("至少8个字符，必须包含大小写字母及数字")
        } else {
            callback();
        }
    }

    handleSubmit = (e) => {
        this.formRef.validateFields()
        .then((values) => {
            this.setState({
                showImageCode: true
            });
        })
        .catch((err) => {
            console.log(err, 'err')
        })
    }

    calcPwdLevel = (val) => {
        let level = 0;
        if(val) {
            if (val.match(/[A-Z]/)) {
                level++;
            }
            if (val.match(/[a-z]/)) {
                level++;
            }
            if (val.match(/[0-9]/)) {
                level++;
            }
            if (val.match(/[#?!@$%^&*\\-_]/)) {
                level++;
            }
        }
        return level > 2 ? "third" : level > 1 ? "second" : "first";
    }

    changeClause = () => {
        const status = this.state.isAgreeClause;
        this.setState({
            isAgreeClause: !status
        })
    }

    passwordChange = (e) => {
        const { inputPassword } = this.state;
        this.setState({
            inputPassword: e.target.value
        })
    }
    render() {
        const params = {
            showImageCode: this.state.showImageCode,
            onClose: this.onClose,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        const { showImageCode, isAgreeClause, inputPassword, areaList } = this.state;

        const history = this.props.history;
        let pwdLevel = this.calcPwdLevel(inputPassword || '');

        return (
            <WrappedRegisterFormCmp>
                <div className="title">注册</div>
                <Form ref={(e) => this.formRef = e} layout="vertical" initialValues={{ residence: '国籍'}}>
                    <Form.Item 
                        className="formItem nation"
                        name="residence"
                        rules= {[{
                            required: true, message: "请选择你的国籍"
                        }]}
                    >
                        <Select bordered={false}>
                            <Option value="">国籍</Option>
                            {areaList.map(item => 
                                <Option key={item.value} value={item.value}>{item.label}</Option>
                            )}
                        </Select>
                    </Form.Item>
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
                        rules={ [{
                            required: true, message: "请输入你的密码"
                        }, {
                            validator: this.checkPwd,
                        }]}
                    >
                        <div className="pwdBox">
                            <div className={"label " + this.state.focusPassword}>密码</div>
                            <div className={"level " + 　this.state.focusPassword}>
                                <i className={"one " + pwdLevel}></i>
                                <i className={"two " + pwdLevel}></i>
                                <i className={"three " + pwdLevel}></i>
                                <span className={"text " + pwdLevel}>{pwdLevel == "first" ? "弱" : pwdLevel == "third" ? "强" : "中"}</span>
                            </div>
                            <Input 
                                type={this.state.showOrHidePwd ? "password" : "text"} 
                                onFocus={this.setInputStatus.bind(this, { type: "password", status: true })} 
                                onBlur={this.setInputStatus.bind(this, { type: "password", status: false })} 
                                onChange={this.passwordChange}
                            />
                            <div onClick={this.showOrHidePwd} className={this.state.showOrHidePwd ? "pwdStatus show" : "pwdStatus hide"}></div>
                        </div>
                    </Form.Item>
                    <Form.Item 
                        className="formItem"
                        name="referralCode"
                    >
                        <div className="recommendBox">
                            <div className={"label " + this.state.focusReferralCode}>推荐人ID</div>
                            <Input onFocus={this.setInputStatus.bind(this, { type: "referralCode", status: true })} onBlur={this.setInputStatus.bind(this, { type: "referralCode", status: false })} />
                        </div>
                    </Form.Item>
                    <Form.Item 
                        className="formItem policyBox"
                        name="policy"
                    >
                        <Checkbox onChange={this.changeClause }>我（确认年龄在18周岁以上）/我们（确认是现存实体）承认数字资产交易活动存在高的风险，并同意<a>HashKey Pro服务条款、隐私政策</a>及收集<a>个人资料声明</a></Checkbox>
                    </Form.Item>
                    <Button className={!isAgreeClause ? "regBtn" : "regBtn confirmBlueBtn"} type="primary" disabled={!isAgreeClause} onClick={this.handleSubmit}>注册</Button>
                    <div className="loginLink">已有帐号？&nbsp;&nbsp;<a onClick={() => {history.push('login')}}>立即登录</a></div>
                </Form>
                {showImageCode ? <ImageCode {...params} /> : ''}
            </WrappedRegisterFormCmp>
        )
    }
}

// const WrappedRegForm = Form.create<RegisterFormProps>({ name: 'register' })(RegisterForm);
// export default WrappedRegForm;