import * as React from "react";
import { Row, Col, Button } from 'antd';
import { WrapperRiskCmp } from './styled';
import WrappedStart from './start';
import Result from './result';

type RiskProps = {
    [props: string]: any,
    user: string,
    match: any,
    history: any
}

type RiskState = {
    status: string
}

export default class Risk extends React.Component<RiskProps, RiskState> {
    constructor(props: RiskProps) {
        super(props);
        this.state = {
            status: '0'
        };
    }

    startEvaluation = (val: string) => {
        this.setState({
            status: val
        });
    }

    restart = () => {
        this.setState({
            status: '0'
        });
    }

    render() {
        const status = this.state.status;
        const {user, match, history} = this.props;
        return (
            <WrapperRiskCmp>
                {status === '0' || status === '1' ? 
                    <div>
                        <Row justify="center" className="title">风险评测</Row>
                        <Row justify="center" className="contentWrapper">
                            欢迎您来到Hashkey Pro交易所，根据相关法律法规，在进行KYC身份认证前您必须完成风险评测，<br/>
                            这可能花费您3-5分钟时间，我们非常感谢您的信任与支持！
                        </Row>
                        <Row justify="center">
                            {status === '0' ? 
                                <Button className="confirmBlueBtn btnWrapper" onClick={() => {this.startEvaluation('1');}}>开始评测</Button> : 
                                <WrappedStart user={user} startEvaluation={this.startEvaluation} />
                            }
                        </Row>
                    </div> : ''
                }
                {status === '2' ? <Result user={user} match={match} history={history} restart={this.restart} /> : ''}
            </WrapperRiskCmp> 
        )
    }
}