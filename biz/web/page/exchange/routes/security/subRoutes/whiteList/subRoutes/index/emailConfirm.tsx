import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const originmail = require("@webExchangeImgs/mail/originmail.png");


type EmailConfirmProps = { 
    userStore?: any,
    _close:Function
}

type EmailConfirmState = {

}

@inject('userStore')
@observer
class EmailConfirm extends React.Component<EmailConfirmProps, EmailConfirmState> {
    constructor(props: EmailConfirmProps) {
        super(props);
    }

    _onClose=()=>{
        this.props._close && this.props._close();
    }

    render() {
        return (
            <Modal
                visible
                centered
                maskClosable
                width={518}
                onCancel={this._onClose}
                footer={false}
                closable={false}
            >
                <WrapperModalCmp>
                    <section className="emailModal">
                        <img className="emailIcon" src={originmail} />
                        <div className="emailOk">需要邮件确认</div>
                        <div className="center" style={{fontSize: 14,marginBottom:"20px"}}>
                            我们已向如下邮箱发送了一封邮件***@**.com，请按照邮件内容进行下一步操作。
                        </div>
                        <a className="center" style={{fontSize: 14, color: '#00A0D2'}}>
                            去邮箱确认 >>
                        </a>
                        <div className="resendEmail">
                            未收到邮件？<a >重新发送</a>
                        </div>
                    </section>
                </WrapperModalCmp>
            </Modal>
        )
    }
}

export default EmailConfirm;