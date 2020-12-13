import * as React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Select } from 'antd';
const { Option } = Select;
import { WrapperHeaderCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const logo = require("@webExchangeImgs/logo.png");

type HeaderProps = {
    userStore?: any,
    langStore?: any,
    history?: any
}

type HeaderState = {

}

@(withRouter as any)
@inject('userStore', 'langStore')
@observer
export default class Register extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
    }

    changeLocales = (locale) => {
        this.props.langStore.changeLang(locale);
    }

    render() {
        const { userStore, langStore, history } = this.props
        const { currentLang } = langStore;

        return (
            <WrapperHeaderCmp>
                <Row justify="space-between">
                    <Col span={10}>
                        <img src={logo} className="logo" onClick={() => { console.log("123") }} />
                        <ul className="menuBar">
                            <li className="active" onClick={() => {history.push('trade')}}>{intl.get("layout.header.menuBar.exchange")}</li>
                            <li>{intl.get("layout.header.menuBar.help")}</li>
                        </ul>
                    </Col>
                    <Col offset={8} span={6}>
                        <Select className="localesChange" onChange={this.changeLocales} style={{ width: 90 }} value={currentLang}>
                            <Option value="zh-CN">中文</Option>
                            <Option value="en-US">English</Option>
                        </Select>
                        {
                            !userStore.userInfo.email ? 
                            [
                                <a key="reg" className="regBtn confirmBlueBtn" onClick={() => history.push("/register")}>{intl.get("layout.header.btn.register")}</a>,
                                <div key="login" className="loginBtn" onClick={() => history.push("/login")}>{intl.get("layout.header.btn.login")}</div>
                            ] : 
                            [
                                <div key="userCenter" className="avatarIcon" onClick={() => history.push("/userCenter")}></div>,
                                <div key="order" className="loginBtn" onClick={() => history.push("/order")}>订单</div>,
                                <div key="assets" className="loginBtn" onClick={() => history.push("/assets")}>资产</div>
                            ]
                        }
                    </Col>
                </Row>
            </WrapperHeaderCmp>
        )
    }
}


