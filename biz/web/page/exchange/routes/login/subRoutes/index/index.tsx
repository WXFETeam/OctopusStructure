import * as React from "react";
import { Row } from 'antd';
import { WrapperLoginCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
// import WrappedLoginForm from './loginForm';
import LoginForm from './loginForm';
type LoginProps = {
    [props: string]: any,
    userStore?: any
}

type LoginState = {
}

@inject('userStore')
@observer
export default class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { history } = this.props;
        return (
            <WrapperLoginCmp>
                <Row justify="center" style={{height: '100%', paddingTop: 96}}>
                    <div className="loginFrame">
                        <div className="title">登录</div>
                        <LoginForm history={history} />
                    </div>
                </Row>
            </WrapperLoginCmp>
        )
    }
}