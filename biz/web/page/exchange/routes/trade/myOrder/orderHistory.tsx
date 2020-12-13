import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperOrderHistoryCmp } from './styled';
import { Row, Col, Table } from 'antd';
import OpsLine from './opsLine';

type OrderHistroyProps = {
    orderHistoryStore?: any,
    instrumentStore?: any,
    scrollY: number
}

type OrderHistoryState = {
    hidePairs: boolean
}

@inject('instrumentStore', 'orderHistoryStore')
@observer
export default class OrderHistory extends React.Component<OrderHistroyProps, OrderHistoryState> {
    constructor(props: OrderHistroyProps) {
        super(props);
        this.state = {
            hidePairs: false
        }
    }

    changePairs = (e) => {
        this.setState({ hidePairs: e.target.checked })
    }

    render() {
        let dataSource = this.state.hidePairs ? this.props.orderHistoryStore.orderHistoryTableMap.filter(item => item.pair == this.props.instrumentStore.currentInstrument) : this.props.orderHistoryStore.orderHistoryTableMap;
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
            width: 80,
            fixed: 'left' as 'left'     
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 80,
            align: 'center' as 'center'
        }, {
            title: 'Side',
            dataIndex: 'side',
            key: 'side',
            sorter: (a, b) => a.side > b.side ? 1 : -1,
            width: 80,
            render: (text, record) => <span className={record.side == "buy" ? "buy" : "sell"}>{capitalize(record.side)}</span>
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            sorter: (a, b) => a.type > b.type ? 1 : -1,
            width: 80
        }, {
            title: 'Average',
            dataIndex: 'average',
            key: 'average',
            sorter: (a, b) => a.average - b.average,
            width: 100,
            align: 'right' as 'right'
        }, {
            title: 'Filled%',
            dataIndex: 'filled',
            key: 'filled',
            width: 80,
            align: 'center' as 'center',
            sorter: (a, b) => a.filled - b.filled,      
        }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            width: 100,
            align: 'right' as 'right',
            sorter: (a, b) => a.amount - b.amount,      
        }, {
            title: 'Limit Price',
            dataIndex: 'limitPrice',
            key: 'limitPrice',
            align: 'right' as 'right',
            sorter: (a, b) => a.limitPrice - b.limitPrice,      
            width: 100
        }, {
            title: 'Stop Price',
            dataIndex: 'stopPrice',
            key: 'stopPrice',
            align: 'right' as 'right',
            sorter: (a, b) => a.stopPrice - b.stopPrice,      
            width: 100
        }, {
            title: 'Shown Amount',
            dataIndex: 'shownAmount',
            key: 'shownAmount',
            align: 'right' as 'right',
            sorter: (a, b) => a.shownAmount - b.shownAmount,      
            width: 130
        }, {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            align: 'center' as 'center',
            sorter: (a, b) => a.duration - b.duration,      
            width: 80
        }, {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            sorter: (a, b) => a.total - b.total,      
            width: 120,
            align: 'center' as 'center',
        }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => a.time > b.time ? 1 : -1,      
        }]

        return (
            <WrapperOrderHistoryCmp>
                <OpsLine type="orderHistory" changePairs={this.changePairs} />
                <Table 
                    className="myOrderTable"
                    rowKey="orderId"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowClassName={() => {return "myOrdersTableRow"}}
                    scroll={{ x: 1400, y: this.props.scrollY }}
                />
            </WrapperOrderHistoryCmp>
        );
    }
}