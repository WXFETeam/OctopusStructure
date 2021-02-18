import * as React from "react";
import { Row, Col } from 'antd';
import { withRouter} from 'react-router-dom';
import { WrappedForgotPwdCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
import { startCase, replace } from 'lodash';
import StepFirst from "./stepFirst";
import StepSecond from "./stepSecond";
import StepThird from "./stepThird";
import StepFourth from "./stepFourth";

type ForgotPwdState = {
    step: Number
}

export default class ForgotPwd extends React.Component<{}, ForgotPwdState> {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }
    }

    componentWillMount() {
        let that = this;
        let key = location.search;
        if(key) {
            ajax({
                method: "post",
                url: "forgotPwd.sendResetPwdLink",
                data: {key},
                callback(data) {
                    that.setState({step: 3})
                }
            });
        }
    }

    changeStep = (step) => {
        this.setState({step});
    }

    render() {
        const renderStep = () => {
            switch(this.state.step) {
                case 1:
                    return <StepFirst changeStep={this.changeStep} />;
                case 2:
                    return <StepSecond changeStep={this.changeStep} />;
                case 3:
                    return <StepThird changeStep={this.changeStep} />;
                case 4:
                    return <StepFourth />;
            }
        }

        return (
            <WrappedForgotPwdCmp>
                <Row justify="center" align="middle" style={{ height: '100%' }}>
                    {renderStep()}
                </Row>
            </WrappedForgotPwdCmp>
        )
    }
}
