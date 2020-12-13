import * as React from "react";
import { Row, Col, Button, Modal } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { EmailConfirmCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const originmail = require("@webExchangeImgs/mail/originmail.png");


type EmailConfirmProps = { 
    userStore?: any,
    // _close:Function
}

type EmailConfirmState = {
    mailTo:any,
    showLink:boolean

}
const hash=[{
    name:"qq.com",
    href:"http://mail.qq.com"
},{
    name:"gmail.com",
    href:"http://mail.google.com"
},{
    name:"sina.com",
    href:"http://mail.sina.com.cn"
},{
    name:"163.com",
    href:"http://mail.163.com"
},{
    name:"126.com",
    href:"http://mail.126.com"
},{
    name:"sohu.com",
    href:"http://mail.sohu.com/"
},{
    name:"tom.com",
    href:"http://mail.tom.com/"
},{
    name:"sogou.com",
    href:"http://mail.sogou.com/"
},{
    name:"139.com",
    href:"http://mail.10086.cn/"
},{
    name:"hotmail.com",
    href:"http://www.hotmail.com"
},{
    name:"live.com",
    href:"http://login.live.com/"
},{
    name:"live.cn",
    href:"http://login.live.cn/"
},{
    name:"live.com.cn",
    href:"http://login.live.com.cn"
},{
    name:"189.com",
    href:"http://webmail16.189.cn/webmail/"
},{
    name:"yahoo.com.cn",
    href:"http://mail.cn.yahoo.com/"
},{
    name:"yahoo.cn",
    href:"http://mail.cn.yahoo.com/"
},{
    name:"eyou.com",
    href:"http://www.eyou.com/"
},{
    name:"21cn.com",
    href:"http://mail.21cn.com/"
},{
    name:"188.com",
    href:"http://www.188.com/"
},{
    name:"foxmail.com",
    href:"http://www.foxmail.com"
}]

@inject('userStore')
@observer
class EmailConfirm extends React.Component<EmailConfirmProps, EmailConfirmState> {
    constructor(props: EmailConfirmProps) {
        super(props);
        this.state={
            mailTo:"",
            showLink:false
        }
    }
    emailLink=(email)=>{
        let url=email.split("@")[1];
        hash.map((item,index)=>{
            if(item.name==url){
                this.setState({
                    mailTo:item.href,
                    showLink:true
                })
            }
        })

    }
    componentWillMount(){
        this.emailLink("wangcuiqing@163.com")
    }
    render() {
        const {mailTo,showLink}=this.state
        return (
                <EmailConfirmCmp>
                    <section className="emailModal">
                        <img className="emailIcon" src={originmail} />
                        <div className="emailOk">邮箱验证</div>
                        <div className="center" style={{fontSize: 14,marginBottom:"20px"}}>
                            我们已向如下邮箱发送了一封邮件***@**.com，请按照邮件内容进行下一步操作。
                        </div> 
                        {showLink&&<a className="center" href={mailTo} target="_blank" style={{fontSize: 14, color: '#00A0D2'}}>
                            去邮箱确认 >>
                        </a>}
                        <div className="resendEmail">
                            未收到邮件？<a >重新发送</a>
                        </div>
                    </section>
                </EmailConfirmCmp>
        )
    }
}

export default EmailConfirm;