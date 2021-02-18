import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { WrapperIndexCmp, WrapHeaderCmp } from './styled';
import { Table, Select, Menu, Row, Col, Button, Switch, Pagination } from "antd";
import { PlusCircleFilled } from "@ant-design/icons"
const whiteListIcon = require("@webExchangeImgs/security/whiteListIcon.png");
import DelAddr from './delAddr';
import AddAddr from './addAddr';
// import GAModal from './gaModal';
import GoogleCodeModal from '@webExchangeComponents/googleCodeModal';
import EmailConfirmModal from './emailConfirm';
const { Option } = Select
const typeList = [{
    name: "全部",
    value: "1"
},
{
    name: "name1",
    value: "2"
},
{
    name: "name2",
    value: "3"
},
]
type IndexProps = {
    userStore?: any,
    history?: any
}

type IndexState = {
    delAddrModal: boolean,
    addAddrModal: boolean,
    currentRecord: any,
    openGAModal: boolean,
    emailConfirmModal: boolean
}

const dataSource = [
    {
        key: '1',
        coinType: 'BTC1',
        info: 'BTC1',
        addr: 'ABCDEFGHIJKLMN1',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '2',
        coinType: 'ETH2',
        info: 'ETH2',
        addr: 'ABCDEFGHIJKLMN2',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '3',
        coinType: 'ETH3',
        info: 'ETH3',
        addr: 'ABCDEFGHIJKLMN3',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '4',
        coinType: 'BTC4',
        info: 'BTC4',
        addr: 'ABCDEFGHIJKLMN4',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '5',
        coinType: 'ETH5',
        info: 'ETH5',
        addr: 'ABCDEFGHIJKLMN5',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }, {
        key: '6',
        coinType: 'ETH6',
        info: 'ETH6',
        addr: 'ABCDEFGHIJKLMN6',
        tag: 'ERC20',
        status: '认证中',
        action: '删除'
    }
];



@inject('userStore')
@observer
@renderBreadcrumbs
export default class Index extends React.Component<IndexProps, IndexState> {
    constructor(props: IndexProps) {
        super(props);
        this.state = {
            delAddrModal: false,
            addAddrModal: false,
            openGAModal: false,
            currentRecord: {},
            emailConfirmModal: false
        }
    }

    delAddr = (record) => {
        this.setState({
            delAddrModal: true,
            currentRecord: record
        });
    }

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a>全部
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a>全部
                    </a>
                </Menu.Item>
            </Menu>
        );

        let columns = [
            {
                title: '币种',
                dataIndex: 'coinType',
                key: 'coinType'
            }, {
                title: '备注',
                dataIndex: 'info',
                key: 'info'
            }, {
                title: '地址',
                dataIndex: 'addr',
                key: 'addr'
            }, {
                title: '标签',
                dataIndex: 'tag',
                key: 'tag'
            }, {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (text, record) => (
                    <div className="status"> <span className="statusIcon statusPending"></span><div>{record.status}</div></div>
                )
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: (text, record) => (
                    <a onClick={this.delAddr.bind(this, record)}>删除</a>
                )
            }
        ];

        return (
            <section style={{ background: "rgb(245,245,245)", paddingBottom: '160px', width: '100%' }}>
                <WrapHeaderCmp>
                    <div>地址管理</div>
                </WrapHeaderCmp>
                <WrapperIndexCmp>
                    <Row className="functionBar">
                        <Col span={16}>
                            <Select style={{ width: "360px", marginRight: "40px" }} bordered={false} defaultValue="全部" className="whiteListSelect" >
                                {typeList.map((item, index) => (
                                    <Option key={index} value={item.value}>{item.name}</Option>
                                ))}
                            </Select>
                            <Button onClick={() => this.setState({ addAddrModal: true })} className="whiteBtn" icon={<PlusCircleFilled style={{ color: "#00A0D2", background: "rgba(236,248,252,1)" }} />}>添加白名单地址</Button>
                            {/* <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                高级设置 
                            </a>n
                        </Dropdown> */}
                        </Col>
                        <Col span={8}>
                            <div className="switchBox">
                                <div>是否开启白名单 &nbsp;</div>
                                <img src={whiteListIcon} alt="" />
                                <Switch checkedChildren='ON' unCheckedChildren='OFF' defaultChecked={false} className='switch'></Switch>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Table
                            className="orderCurrentTable"
                            rowKey="key"
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                            rowClassName={() => { return "orderCurrentTableRow" }} />

                    </Row>
                    
                    <Row>
                        <Pagination className="whitePageBox" total={dataSource.length} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} records`} pageSize={5} defaultCurrent={1} ></Pagination>
                    </Row>
                    {
                        this.state.delAddrModal ? <DelAddr _close={() => this.setState({ delAddrModal: false })} record={this.state.currentRecord} /> : null
                    }
                    {
                        this.state.addAddrModal ? <AddAddr _close={() => this.setState({ addAddrModal: false })} _openGAModal={() => this.setState({ addAddrModal: false, openGAModal: true })} /> : null
                    }
                    {
                        this.state.openGAModal ? <GoogleCodeModal _close={() => this.setState({ openGAModal: false })} /> : null
                    }
                    {
                        this.state.emailConfirmModal ? <EmailConfirmModal _close={() => this.setState({ openGAModal: false })} /> : null
                    }
                </WrapperIndexCmp>
            </section>
        );
    }
}