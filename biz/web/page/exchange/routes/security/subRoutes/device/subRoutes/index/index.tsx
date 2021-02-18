import * as React from "react";
import { Row, Col, Table, Form, Button, DatePicker, Select, Input, message, Pagination, Modal } from 'antd';
import { observer, inject } from 'mobx-react/index';
import { WrappedDeviceCmp, WrappedTableCmp } from './styled';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import ConfirmModal from './modals/delete';
import Email from './modals/email';
import { withRouter } from 'react-router-dom';
import { object } from "prop-types";

const closeIcon = require("@webExchangeImgs/security/close.png");
const upIcon = require("@webExchangeImgs/security/up.png");
const downIcon = require("@webExchangeImgs/security/down.png");


const { Option } = Select;
type DeviceProps = {
    history?:any
}
type DeviceState = {
    dataSource: Array<object>,
    totalRecord: number,
    pageNumber: number,
    showDeleteModal:boolean,
    showEmailModal:boolean,
    curDeviceInfo:object
}
@observer
@renderBreadcrumbs
@(withRouter as any)

export default class Device extends React.Component<DeviceProps, DeviceState> {
    constructor(props: DeviceProps) {
        super(props);
        this.state = {
            dataSource: [],
            totalRecord: 50,
            pageNumber: 1,
            showDeleteModal:false,
            showEmailModal:true,
            curDeviceInfo:{},
        }
    }

    componentDidMount() {
        this.getRecord();
    }

    getRecord=()=>{
        ajax({
            url: 'security.getDeviceList',
            data:{size:10,start:1},
            callback:(data)=> {
                this.setState({
                    dataSource:data || data.list,
                    totalRecord:data.total
                })
            }
        })
    }

    handleDelete = (record) => {
        this.setState({
            showDeleteModal:true,
            curDeviceInfo:record
        });
    }

    showMore = (record) => {
        this.props.history.push(`/security/device/detail?${record.parentId}`);
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

    handleExpand=(onExpand, record)=>{
        ajax({
            url: 'security.getDeviceDetail',
            data:{
                id:record.id,
                size: 10,
                start: 1
            },
            callback:(data)=> {
                let originData = this.state.dataSource;
                let array = [];
                originData.map((item:any,index)=>{
                    if(item.id == record.id){
                        array.push(Object.assign(item,{children:data.length > 1 ? data.slice(0,5).concat({address:'查看更多',showMore:true,parentId:item.id}) : data}));
                    }else{
                        array.push(item);
                    }
                })
                this.setState({dataSource:array},onExpand(record));
            }
        })
    }


    render() {
        let columns = [
            {
                title: '设备',
                dataIndex: 'device',
                key: 'device',
                render: (value,record) => (
                    <div onClick={this.showMore.bind(this,record)}>{value}</div>
                )
            }, {
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
            }, {
                title: '',
                dataIndex: 'delete',
                key: 'delete',
                render: (text, record) => (
                    // record.floor && <img src={closeIcon} style={{ cursor: 'pointer' }} onClick={this.handleDelete.bind(this,record)} />
                    <img src={closeIcon} style={{ cursor: 'pointer' }} onClick={this.handleDelete.bind(this,record)} />
                )
            }
        ];

        return (
            <WrappedDeviceCmp>
                <Row>
                    <div className="title">登录设备管理</div>
                </Row>
                <WrappedTableCmp>
                    <p className='tip'>这些设备已被授权允许登录您的账户</p>
                    <Table
                        className="orderTradedTable"
                        dataSource={this.state.dataSource}
                        columns={columns}
                        pagination={false}
                        rowKey='id'
                        expandable={{
                            expandIcon: ({ expanded, onExpand, record }) =>
                                // record.children ?
                                    expanded ?
                                        <img src={upIcon} onClick={e => onExpand(record, e)} className='expandIcon' />
                                        :
                                        <img src={downIcon} onClick={this.handleExpand.bind(this, onExpand, record)} className='expandIcon' />
                                    // : null
                        }}
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
                {
                    this.state.showDeleteModal && 
                        <ConfirmModal
                            curDeviceInfo={this.state.curDeviceInfo}
                            _close={()=>this.setState({showDeleteModal:false})}
                        />
                }
                {
                    this.state.showEmailModal && 
                    <Email 
                        _close={()=>this.setState({showEmailModal:false})}
                    />
                }
            </WrappedDeviceCmp>
        )
    }
}