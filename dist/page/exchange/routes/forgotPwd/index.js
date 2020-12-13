import * as React from "react";
import { Row } from 'antd';
import { WrappedForgotPwdCmp } from './styled';
import StepFirst from "./stepFirst";
import StepSecond from "./stepSecond";
import StepThird from "./stepThird";
import StepFourth from "./stepFourth";
export default class ForgotPwd extends React.Component {
    constructor(props) {
        super(props);
        this.changeStep = (step) => {
            this.setState({ step });
        };
        this.state = {
            step: 1
        };
    }
    componentWillMount() {
        let that = this;
        let key = location.search;
        if (key) {
            ajax({
                method: "post",
                url: "forgotPwd.sendResetPwdLink",
                data: { key },
                callback(data) {
                    that.setState({ step: 3 });
                }
            });
        }
    }
    render() {
        const renderStep = () => {
            switch (this.state.step) {
                case 1:
                    return React.createElement(StepFirst, { changeStep: this.changeStep });
                case 2:
                    return React.createElement(StepSecond, { changeStep: this.changeStep });
                case 3:
                    return React.createElement(StepThird, { changeStep: this.changeStep });
                case 4:
                    return React.createElement(StepFourth, null);
            }
        };
        return (React.createElement(WrappedForgotPwdCmp, null,
            React.createElement(Row, { justify: "center", align: "middle", style: { height: '100%' } }, renderStep())));
    }
}
//# sourceMappingURL=index.js.map