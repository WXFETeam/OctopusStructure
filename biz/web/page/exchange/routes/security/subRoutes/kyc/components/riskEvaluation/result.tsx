import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperResultCmp } from './styled';

type ResultProps = {
    user: string,
    restart: any,
    match: any,
    history: any
}

type ResultState = {
}

export default class Result extends React.Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
        this.state = {
        };
    }

    goKyc = () => {
        let {history, match} = this.props;
        history.push(`${match.path.split('riskEvaluation')[0]}identification/customerInfo`);
    }

    render() {
        const submitPaper = common.getLS('submitPaper');
        let restart = this.props.restart;
        return (
            <WrapperResultCmp>
                <Row justify="center" className="title">确认风险评测结果</Row>
                {submitPaper.levelCode != "C1" ? 
                    <div className="result result1">
                        <Row justify="center" className="contentWrapper">
                            <div className="firstLine">您好，根据您的填写内容，您目前的风险承受能力等级为：<span>{submitPaper.riskKind}</span></div>
                            不满足进行数字货币等高风险金融业务的要求；如果您仍想进行数字货币投资，<br/>
                            请前往投资者教育中心学习后重新填写问卷
                        </Row>
                        <Row justify="center">
                            <Button className="centerBtn">前往投资者教育中心学习</Button>
                        </Row>
                        <Row justify="center">
                            <a onClick={() => {restart();}}>我已完成学习，重新填写问卷</a>
                        </Row>
                    </div> : ''
                }
                {submitPaper.levelCode == "C1" ? 
                    <div className="result result2">
                        <Row justify="center" className="contentWrapper">
                            <div className="firstLine">您好，根据您的填写内容，您目前的风险承受能力等级为：<span>{submitPaper.riskKind}</span></div>
                        </Row>
                        <Row justify="center">
                            <Button className="confirmBlueBtn confirmBtn" onClick={this.goKyc}>确认并继续</Button>
                        </Row>
                    </div> : ''
                }
            </WrapperResultCmp> 
        )
    }
}