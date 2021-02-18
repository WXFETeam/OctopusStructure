import * as React from "react";
import { Row, Col, Table, Form, Button, DatePicker, Select, Input, message, Pagination } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedDeviceCmp, WrappedTableCmp } from './styled';

const { Option } = Select;
type DeviceProps = {
    history:any
}
type DeviceState = {
    dataSource: Array<object>,
    totalRecord: number,
    pageNumber: number
}
@observer
@renderBreadcrumbs
export default class Traded extends React.Component<DeviceProps, DeviceState> {
    constructor(props: any) {
        super(props);
        this.state = {
            dataSource: [],
            totalRecord: 20,
            pageNumber: 1
        }
    }

    componentDidMount() {
        this.getRecord();
    }

    getRecord=()=>{
        let id = window.location.search.split('?')[1];
        ajax({
            url: 'security.getDeviceDetail',
            data:{
                id,
                size: 10,
                start: 1
            },
            callback:(data)=> {
                this.setState({
                    dataSource:data,
                    totalRecord:data.total
                })
            }
        })
    }

    handleDelete = () => {
        message.success('delete!')
    }

    showMore = (record) => {
        console.log(record)
    }

    onPageChange = (page) => {
        this.setState({
            pageNumber: page
        }, () => { console.log(this.state.pageNumber) })
    }

    showTotal = (total) => {
        let start = (this.state.pageNumber - 1) * 8 + 1;
        let end = this.state.pageNumber * 8;
        if(end>=this.state.totalRecord){
            end = this.state.totalRecord;
        }
        return `${start} to ${end} of ${total} records`;
    }

    render() {

        let columns = [
            {
                title: '登录所在地',
                dataIndex: 'address',
                key: 'address',
                render: (value, record) => (
                    record.showMore ?
                        <a onClick={this.showMore.bind(this, record)}>{value}</a> :
                        <div>{value}</div>
                )
            }, {
                title: '时间',
                dataIndex: 'loginTime',
                key: 'time',
                render: (value) => (
                    <div>{value}</div>
                )
            }, {
                title: 'IP地址',
                dataIndex: 'ip',
                key: 'ip',
                render: (value) => (
                    <div>{value}</div>
                )
            }
        ];

        return (
            <WrappedDeviceCmp>
                <Row>
                    <div className="title">Chrome V80.0.3987.12 (Mac OS)</div>
                </Row>
                <WrappedTableCmp>
                    <p className='tip'>这些设备已被授权允许登录您的账户</p>
                    <Table
                        className="orderTradedTable"
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                        rowKey='id'
                    />
                    <Row className='paginationWrapper' style={{justifyContent:'flex-end', paddingTop:24}}>
                        <Pagination
                            showTotal={this.showTotal.bind(this)}
                            onChange={this.onPageChange.bind(this)}
                            current={this.state.pageNumber}
                            total={this.state.totalRecord}
                            pageSize={8}
                        />
                    </Row>
                </WrappedTableCmp>
            </WrappedDeviceCmp>
        )
    }
}