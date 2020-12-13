import * as React from "react";
import { Row, Col, Button, Card, Divider, Menu, Dropdown, Radio, Slider } from 'antd';
import { WrapperIndexCmp } from './styled';
import ModifyModal from './modals/modify';

type IndexProps = {
    userStore?: any;
    history?: any,
}

type IndexState = {
    showModal:boolean,
}

@renderBreadcrumbs
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            showModal:false,
        }
    }

    handleClick=(type)=>{
        console.log(type)
        switch(type){
            case 'account':
                this.setState({showModal:true});
            break;
            case 'email':
                this.props.history.push('/security/basicInfo/email');
            break;
        }
    }

    render() {
        return (
            <WrapperIndexCmp>
               <Row justify="center" style={{height: '100%', paddingTop: 100}}>
                    <div className="title">基础资料</div>
                    <div className='account'>
                        <Row className='item'>
                            <Col className='firstCol'>账户名</Col>
                            <Col className='secondCol'>12****@qq.com</Col>
                            <Col><Button className='btn' onClick={this.handleClick.bind(this,'account')}>修改</Button></Col>
                        </Row>
                        <Row className='item'>
                            <Col className='firstCol'>账户实际控制人</Col>
                            <Col className='secondCol'>吴震春</Col>
                        </Row>
                        <Row className='item'>
                            <Col className='firstCol'>我的证件</Col>
                            <Col className='secondCol'>身份证 ｜ 29837119860206</Col>
                        </Row>
                    </div>
                    <div className='email'>
                    <Row className='item sp'>
                            <Col className='firstCol'>邮箱</Col>
                            <Col className='secondCol'>12****@qq.com</Col>
                            <Col><Button className='btn' onClick={this.handleClick.bind(this,'email')}>修改</Button></Col>
                        </Row>
                        <Row className='item sp'>
                            <Col className='firstCol'>用户号</Col>
                            <Col className='secondCol'>123235357645757</Col>
                        </Row>
                        <Row className='item sp'>
                            <Col className='firstCol'>客户号</Col>
                            <Col className='secondCol'>457645648734452</Col>
                        </Row>
                        <Row className='item sp'>
                            <Col className='firstCol'>账户名</Col>
                            <Col className='secondCol'>347646845834522</Col>
                        </Row>
                    </div>
               </Row>
               {
                   this.state.showModal && <ModifyModal _close={()=>this.setState({showModal:false})}/>
               }
            </WrapperIndexCmp>
        )
    }
}