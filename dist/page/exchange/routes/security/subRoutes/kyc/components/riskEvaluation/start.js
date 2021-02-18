import * as React from "react";
import { Radio, Button, Row, Form, message } from 'antd';
import { WrapperStartCmp } from './styled';
export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = null;
        this.handleSubmit = (e) => {
            this.formRef.validateFields()
                .then((values) => {
                let that = this;
                let user = this.props.user;
                let paperMsgInfo = this.state.paperMsgInfo;
                let submittedList = [];
                for (let key in values) {
                    let newItem = {
                        optionSelectedList: Array.isArray(values[key]) ? values[key] : [values[key]],
                        paperQuestionId: key
                    };
                    submittedList.push(newItem);
                }
                let postData = {
                    paperSubmitRequest: {
                        id: paperMsgInfo.id,
                        submittedList: submittedList
                    },
                    targetType: user === 'individual' ? '1' : '2'
                };
                ajax({
                    url: 'riskEvaluation.submitPaper',
                    method: 'post',
                    needToken: false,
                    isFullData: true,
                    data: postData,
                    callback(data) {
                        console.log(data);
                        if (data.errNo === '0') {
                            common.setLS('submitPaper', data.data);
                            that.props.startEvaluation('2');
                        }
                        else {
                            message.success(data.errMsg);
                        }
                    }
                });
            })
                .catch((err) => {
                console.log(err);
            });
        };
        this.handleReset = (e) => {
            this.formRef.resetFields();
        };
        this.getQuestions = () => {
            let that = this;
            let user = this.props.user;
            ajax({
                url: 'riskEvaluation.loadPaperMessage',
                method: 'get',
                needToken: false,
                isFullData: true,
                urlName: user === 'individual' ? `/1` : '/2',
                callback(data) {
                    console.log(data);
                    if (data.errNo === '0') {
                        that.setState({
                            paperMsgInfo: data.data
                        });
                    }
                    else {
                        message.success(data.errMsg);
                    }
                }
            });
        };
        this.state = {
            paperMsgInfo: {
                id: null,
                questionList: []
            }
        };
    }
    componentWillMount() {
        this.getQuestions();
    }
    render() {
        let questions = this.state.paperMsgInfo.questionList || [];
        return (React.createElement(WrapperStartCmp, null,
            React.createElement(Form, { ref: (e) => this.formRef = e },
                React.createElement("div", { className: "formBox" }, questions.map((item, index) => {
                    return React.createElement(Form.Item, { className: "formItem", key: index, name: item.paperQuestionId, rules: [{
                                required: true
                            }] },
                        React.createElement("div", { className: "radioBox" },
                            React.createElement("div", { className: "radioTit" },
                                index + 1,
                                ".",
                                item.title.titleCn),
                            React.createElement(Radio.Group, null, item.optionList.map((item2, index2) => {
                                return React.createElement(Radio, { className: "radioItem", value: item2.optionId, key: index2 }, item2.desc.descCn);
                            }))));
                })),
                React.createElement(Row, { justify: "center", className: "btns" },
                    React.createElement(Button, { className: "confirmBlueBtn submit", onClick: this.handleSubmit }, "\u63D0\u4EA4"),
                    React.createElement(Button, { className: "reset", onClick: this.handleReset }, "\u91CD\u7F6E")))));
    }
}
//# sourceMappingURL=start.js.map