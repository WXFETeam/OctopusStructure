import * as React from "react";
import { Row, Col, Input,Form, Button, Modal, Dropdown, Menu, Tabs,Select } from 'antd';
// import { FormComponentProps } from '@ant-design/compatible/es/form';
import { WrapperModalCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const { TabPane } = Tabs;
const {Option}=Select
type AddAddrProps = {
    userStore?: any,
    history?:any,
    _close:Function,
    _openGAModal: Function
}

type AddAddrState = {

}
const currencyList=[{
    name:"ETH",
    value:"ETH"
},{
    name:"BTC",
    value:"BTC"
}]

@inject('userStore')
@observer
class AddAddr extends React.Component<AddAddrProps, AddAddrState> {
    constructor(props: AddAddrProps) {
        super(props);
        this.state = {

        }
    }
    formRef=null
    _onClose=()=>{
        this.props._close && this.props._close();
    }

    callback=() =>{

    }

    _onSubmit=() =>{
        this.props._openGAModal && this.props._openGAModal();
    }
    changeCurrency=(currency)=>{
    }
    render() {
        // const menu = (
        //     <Menu>
        //         <Menu.Item>
        //             <a>BTC</a>
        //         </Menu.Item>
        //         <Menu.Item>
        //             <a>ETH</a>
        //         </Menu.Item>
        //     </Menu>
        // );

        return (
            <Modal
                className='addAddrModal'
                visible
                centered
                maskClosable
                onCancel={this._onClose}
                footer={false}
                width={480}
            >
                <WrapperModalCmp>
                    <Form style={{width:"100%"}} ref={(e)=>this.formRef=e} onFinish={this._onSubmit}>
                        <Form.Item name="currencyList">
                            <Select bordered={false} className="SelectStyle" defaultValue="币种" onChange={this.changeCurrency.bind(this)}>
                            {currencyList.map((item,index)=>(
                                    <Option key={index} value={item.name}>{item.value}</Option>
                                )) } 
                            </Select>
                        </Form.Item>
                        <Tabs defaultActiveKey="1"  animated={false} onChange={e => this.callback}>
                            <TabPane tab="ERC20" key="1">
                                <Form.Item name="note">
                                    <Input className="tabinput" placeholder="备注"/>
                                </Form.Item>
                                <Form.Item name="address">
                                    <Input className="tabinput" placeholder="地址"/>
                                </Form.Item>
                            </TabPane>
                            <TabPane tab="Omni" key="2">
                                <Form.Item name="note2">
                                    <Input className="tabinput" placeholder="备注"/>
                                </Form.Item>
                                <Form.Item name="address2">
                                    <Input className="tabinput" placeholder="地址"/>
                                </Form.Item>
                            </TabPane>
                        </Tabs>
                        <Form.Item>
                            <Button className="submitBtn" htmlType="submit">提交</Button>
                        </Form.Item>   
                    </Form>
                    <Row>
                      
                    </Row>

                </WrapperModalCmp>
            </Modal>
        );
    }
}

export default AddAddr;