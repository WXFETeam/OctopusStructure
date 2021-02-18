import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperOpenOrdersCmp } from './styled';
import { Row, Col, Table } from 'antd';
import OpsLine from './opsLine';

type OpenOrdersProps = {
    openOrdersStore?: any,
    instrumentStore?: any,
    scrollY: number
}

type OpenOrdersState = {
    hidePairs: boolean,
    orderType: string
}

@inject('openOrdersStore')
@inject('instrumentStore')
@observer
export default class OpenOrders extends React.Component<OpenOrdersProps, OpenOrdersState> {
    constructor(props: OpenOrdersProps) {
        super(props);
        this.state = {
            hidePairs: false,
            orderType: "All"
        }
    }

    changePairs = (e) => {
        this.setState({ hidePairs: e.target.checked })
    }

    changeTypes = orderType => {
        this.setState({ orderType })
    }

    cancelOrder(orderId) {
        console.log(orderId)
    }

    render() {
        let dataSource = this.state.hidePairs ? 
            this.props.openOrdersStore.openOrdersTableMap.filter(
                item => (item.pair == this.props.instrumentStore.currentInstrument) && (this.state.orderType == "All" ? true : item.type == this.state.orderType) && item.amount > 0
            ) : 
            this.props.openOrdersStore.openOrdersTableMap.filter(
                item => (this.state.orderType == "All" ? true : item.type == this.state.orderType) && item.amount > 0
            );
        let columns = [{
            title: <span style={{paddingLeft: 20}}>Order ID</span>,
            dataIndex: 'orderId',
            key: 'orderId',    
            sorter: (a, b) => a.orderId > b.orderId ? 1 : -1,
            width: 110,
            fixed: 'left' as 'left',
            render: (text, record) => <span style={{paddingLeft: 20}}>{record.orderId}</span>     
        }, {
            title: 'Pair',
            dataIndex: 'pair',
            key: 'pair',   
            width: 100,
            fixed: 'left' as 'left'     
        }, {
            title: 'Side',
            dataIndex: 'side',
            key: 'side',
            width: 60,
            sorter: (a, b) => a.side > b.side ? 1 : -1,
            render: (text, record) => <span className={record.side == "buy" ? "buy" : "sell"}>{capitalize(record.side)}</span>
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => a.type > b.type ? 1 : -1,
            width: 100
        }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            sorter: (a, b) => a.amount - b.amount,                  
            width: 100,
            align: 'right' as 'right'
        }, {
            title: 'Limit Price',
            dataIndex: 'limitPrice',
            key: 'limitPrice',
            sorter: (a, b) => a.limitPrice - b.limitPrice,      
            width: 110,
            align: 'right' as 'right'
        }, {
            title: 'Stop Price',
            dataIndex: 'stopPrice',
            key: 'stopPrice',
            sorter: (a, b) => a.stopPrice - b.stopPrice,      
            width: 110,
            align: 'right' as 'right'
        }, {
            title: 'Shown Amount',
            dataIndex: 'shownAmount',
            key: 'shownAmount',
            sorter: (a, b) => a.shownAmount - b.shownAmount,      
            width: 140,
            align: 'right' as 'right'
        }, {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            sorter: (a, b) => a.duration - b.duration,      
            width: 100,
            align: 'center' as 'center'
        }, {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            sorter: (a, b) => a.total - b.total,      
            width: 100,
            align: 'center' as 'center'
        }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => a.time > b.time ? 1 : -1
        }, {
            title: 'Cancel',
            dataIndex: 'cancel',
            key: 'cancel',
            width: 100,
            fixed: 'right' as 'right',
            align: 'center' as 'center',
            render: (text, record) => <a className="cancelBtn" onClick={this.cancelOrder.bind(this, record.orderId)}>Cancel</a>
        }]
        return (
            <WrapperOpenOrdersCmp>
                <OpsLine type="openOrders" changePairs={this.changePairs} changeTypes={this.changeTypes} dataSource={dataSource} />
                <Table 
                    className="myOrderTable"
                    rowKey="orderId"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowClassName={() => {return "myOrdersTableRow"}}
                    scroll={{ x: 1270, y: this.props.scrollY }}
                />
            </WrapperOpenOrdersCmp>
        );
    }
}