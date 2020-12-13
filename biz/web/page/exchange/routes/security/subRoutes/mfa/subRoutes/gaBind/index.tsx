import * as React from "react";
import { Row, Steps } from 'antd';
import { WrapperGACmp, Content } from './styled';
import { observer, inject } from 'mobx-react/index';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

const { Step } = Steps;
type GAProps = {
    userStore?: any,
    history?:any
}

type GAState = {
    current:any
}

@renderBreadcrumbs
@inject('userStore')
@observer

export default class GABind extends React.Component<GAProps, GAState> {
    constructor(props: GAProps) {
        super(props);
        this.state = {
            current:1
        }
    }

    changeStepStatus = (index:any) => {
        let curIndex = this.state.current;
        if (curIndex > index) {
            return 'finish';
        } else if (curIndex == index) {
            return 'process';
        } else if (curIndex < index) {
            return 'wait';
        }
    }

    _returnPage=(page:number)=>{
        this.setState({
            current:page-1
        })
    }

    _nextStep=(page:number)=>{
        if(page==4){
            this.props.history.push('/security');
        }else{
            this.setState({
                current:page+1
            })
        }
    }

    render() {
        let Options = {
            returnPage:this._returnPage.bind(this)
            // verificationInfo:this.state.verificationInfo,
            // nextStep:this.handleNext.bind(this),
            // goBack:this.goBack.bind(this),
            // show:() => this.setState({ isShow: true })
        }
        return (
            <WrapperGACmp>
                <Row justify="center" style={{height: '100%', paddingTop: 100}}>
                    <div className="title">启用谷歌验证</div>
                    <div className='frame'>
                        <Steps current={this.state.current}>
                            <Step title='STEP1' status={this.changeStepStatus(1)}></Step>
                            <Step title='STEP2' status={this.changeStepStatus(2)}></Step>
                            <Step title='STEP3' status={this.changeStepStatus(3)}></Step>
                            <Step title='STEP4' status={this.changeStepStatus(4)}></Step>
                        </Steps>
                        {
                        this.state.current == 1 ?
                            <Step1 nextStep={this._nextStep}/> :
                            this.state.current == 2 ?
                                <Step2 returnPage={this._returnPage} nextStep={this._nextStep}/> :
                                this.state.current == 3 ?
                                    <Step3 returnPage={this._returnPage} nextStep={this._nextStep}/> :
                                    this.state.current == 4 ?
                                        <Step4 returnPage={this._returnPage} nextStep={this._nextStep}/> : null
                        }
                    </div>
                </Row>
            </WrapperGACmp>
        )
    }
}