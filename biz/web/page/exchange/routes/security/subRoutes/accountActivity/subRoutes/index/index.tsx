import * as React from "react";
import { Row, Col, Button, Divider, Form, Modal, Tabs, Table, Pagination } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrapperActivityRecordCmp } from './styled';
const { TabPane } = Tabs;


type Indexprops = {
    history: any
}

type IndexState = {
    dataSource: Array<string>,
    pageNumber: number,
    totalRecord: number,
    tabKey: string,
    
}



@inject('userStore')
@observer
@renderBreadcrumbs
export default class Index extends React.Component<Indexprops, IndexState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: [],
            pageNumber: 1,
            totalRecord: 0,
            tabKey: "1"
        }
    }


    callback(key) {
       
        this.getRecord(key);
    }
    componentDidMount() {
        this.getRecord("1");
    }
    getRecord(e) {
        let that = this;
        let data = {
            size: 10,
            start: this.state.pageNumber,
            type: e
        };
        let self = this
        ajax({
            url: 'security.getActivityList',
            method: 'post',
            data: data,
            callback(data) {
                self.setState({
                    dataSource: data.list,
                    totalRecord: data.total
                });
            }
        })
    }

    showTotal = (total) => {
        let start = (this.state.pageNumber - 1) * 8 + 1;
        let end = this.state.pageNumber * 8;
        if (end >= this.state.totalRecord) {
            end = this.state.totalRecord;
        }
        return `${start} to ${end} of ${total} records`;
    }
    onPageChange = (page) => {
        this.setState({
            pageNumber: page
        }, () => { console.log(this.state.pageNumber) })
    }
    handleChange() {
        this.props.history.push('/security/accountActivity/disable');
    }
    render() {

        let columns = [
            {
                title: '时间',
                dataIndex: 'operateTime',
                key: 'operateTime'
            }, {
                title: '来源',
                dataIndex: 'source',
                key: 'source'
            }, {
                title: '活动',
                dataIndex: 'activityName',
                key: 'activityName'
            }, {
                title: '状态',
                dataIndex: 'operateStatus',
                key: 'operateStatus',
                render: (text, record) => (
                    <div className={record.status == 0 ? "failed" : "success"}>{record.status == 0 ? "Failed(2FA错误)" : "成功"}</div>
                )
            }, {
                title: 'IP地址',
                dataIndex: 'ipAddress',
                key: 'ipAddress'
            }
        ];

        return (
            <WrapperActivityRecordCmp>
                <div className="title">近期账户活动</div>
                <div className="tips">账户异常？<span onClick={this.handleChange.bind(this)}>禁用账户</span></div>
                <Row justify="center">
                    <Col className="table">

                        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                            <TabPane tab="登录活动" key="1">
                                <Row className="contentTab1">
                                    <Table
                                        className="orderCurrentTable"
                                        rowKey="key"
                                        dataSource={this.state.dataSource}
                                        columns={columns}
                                        pagination={false}
                                        rowClassName={() => { return "orderCurrentTableRow" }} />
                                </Row>
                                <Row className='paginationWrapper' style={{ justifyContent: 'flex-end', paddingTop: 24 }}>
                                    <Pagination
                                        showTotal={this.showTotal.bind(this)}
                                        onChange={this.onPageChange.bind(this)}
                                        current={this.state.pageNumber}
                                        total={this.state.totalRecord}
                                        pageSize={3}
                                    />
                                </Row>
                            </TabPane>
                            <TabPane tab="安全操作记录" key="2">
                                <Row className="contentTab1">
                                    <Table
                                        className="orderCurrentTable"
                                        rowKey="key"
                                        dataSource={this.state.dataSource}
                                        columns={columns}
                                        pagination={false}
                                        rowClassName={() => { return "orderCurrentTableRow" }} />

                                </Row>
                                <Row className='paginationWrapper' style={{ justifyContent: 'flex-end', paddingTop: 24 }}>
                                    <Pagination
                                        showTotal={this.showTotal.bind(this)}
                                        onChange={this.onPageChange.bind(this)}
                                        current={this.state.pageNumber}
                                        total={this.state.totalRecord}
                                        pageSize={3}
                                    />
                                </Row>
                            </TabPane>

                        </Tabs>
                    </Col>
                </Row>

            </WrapperActivityRecordCmp>

        )
    }
}