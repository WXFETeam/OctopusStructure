import * as React from "react";
import { Row } from 'antd';
import { WrappedRegisterCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import WrappedRegisterForm from './regForm';
import RegisterSecondStep from './registerSecondStep';

type RegisterProps = {
    userStore?: any
    history: any
}

type RegisterState = {
    step: Number
}

@inject('userStore')
@observer
export default class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            step: 1
        }
    }

    nextStep = () => {
        this.setState({ step: 2 })
    }

    render() {
        const history = this.props.history;
        return (
            <WrappedRegisterCmp>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                    <div className="regFrame">
                        {this.state.step == 1 ?
                            <WrappedRegisterForm nextStep={this.nextStep} history={history} /> : 
                            <RegisterSecondStep />
                        }
                    </div>
                </Row>
            </WrappedRegisterCmp>
        )
    }
}