import * as React from "react";
import { Row, Col } from 'antd';
import { WrapperSubmitSuccessCmp } from './styled';

type SubmitSuccessProps = {
    [props: string]: any,
    user: string,
    match: any,
    history: any
}

type SubmitSuccessState = {
}

export default class Aduit extends React.Component<SubmitSuccessProps, SubmitSuccessState> {
    constructor(props: SubmitSuccessProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {user, match, history} = this.props;
        const statusList = [
            {
                status: 'done',
                text: '提交成功',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'doing',
                text: '第三方审核中',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '人工初审',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '人工复审',
                date: '2019/12/30 15:09:24'
            },
            {
                status: 'not',
                text: '审核成功',
                date: '2019/12/30 15:09:24'
            }
        ];
        return (
            <WrapperSubmitSuccessCmp>
                <div className="auditIcon"></div>
                <div className="auditTit">{user === 'institution' ? '企业认证审核中' : '个人认证审核中'}</div>
                <div className="auditContent">
                    您已成功申请身份认证。<br/>
                    我们会在7-10个工作日为您完成审核，请您耐心等待邮件通知。
                </div>
                <div className="auditStatus">
                    {statusList.map((item, index) => 
                        <div key={index} className={(statusList.length - 1) != index ? "statusItem notLast " + item.status: "statusItem " + item.status}>
                            <div className={"icon " + item.status}></div>
                            <div className="text">{item.text}</div>
                            {item.status === 'done' ? <div className="date">{item.date}</div> : ''}
                        </div>
                    )}
                </div>
                <div className="auditLink">
                    <a onClick={() => {
                        history.push('/security');
                    }}>前往账户中心 >></a>
                </div>
            </WrapperSubmitSuccessCmp> 
        )
    }
}