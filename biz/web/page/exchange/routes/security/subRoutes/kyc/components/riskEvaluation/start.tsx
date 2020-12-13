import * as React from "react";
import { Radio, Button, Row, Form, message } from 'antd';
import { WrapperStartCmp } from './styled';

type StartProps = {
    [props: string]: any,
    startEvaluation: any,
    user: string
}

type StartState = {
    paperMsgInfo: any
}

export default class Start extends React.Component<StartProps, StartState> {
    constructor(props: StartProps) {
        super(props);
        this.state = {
            paperMsgInfo: {
                id: null,
                questionList: []
            }
        };
    }

    formRef = null;

    handleSubmit = (e) => {
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
                    } else {
                        message.success(data.errMsg);
                    }
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleReset = (e) => {
        this.formRef.resetFields()
    }

    getQuestions = () => {
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
                } else {
                    message.success(data.errMsg);
                }
            }
        })
    }

    componentWillMount() {
        this.getQuestions();
    }

    render() {
        let questions = this.state.paperMsgInfo.questionList || [];
        return (
            <WrapperStartCmp>
                <Form ref={ (e) => this.formRef = e}>
                    <div className="formBox">
                        {questions.map((item: any, index: any) => {
                            return <Form.Item className="formItem" key={index} name={item.paperQuestionId} rules={[{
                                required: true
                            }]}>
                                <div className="radioBox">
                                    <div className="radioTit">{index + 1}.{item.title.titleCn}</div>
                                    <Radio.Group>
                                        {item.optionList.map((item2: any, index2: any) => {
                                            return <Radio className="radioItem" value={item2.optionId} key={index2}>{item2.desc.descCn}</Radio>
                                        })}
                                    </Radio.Group>
                                </div>
                            </Form.Item>
                        })}
                    </div>
                    <Row justify="center" className="btns">
                        <Button className="confirmBlueBtn submit" onClick={this.handleSubmit}>提交</Button>
                        <Button className="reset" onClick={this.handleReset}>重置</Button>
                    </Row>
                </Form>
            </WrapperStartCmp> 
        )
    }
}