import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { WrapperTradeHistoryCmp } from './styled';
import { Row, Col, Table } from 'antd';
import OpsLine from './opsLine';

type TradeHistoryProps = {
    tradeHistoryStore?: any,
    instrumentStore?: any,
    scrollY: number
}

type TradeHistoryState = {
    hidePairs: boolean
}

@inject('tradeHistoryStore')
@inject('instrumentStore')
@observer
export default class TradeHistory extends React.Component<TradeHistoryProps, TradeHistoryState> {
    constructor(props: TradeHistoryProps) {
        super(props);
        this.state = {
            hidePairs: false
        }
    }

    changePairs = (e) => {
        this.setState({ hidePairs: e.target.checked })
    }

    render() {
        let dataSource = this.state.hidePairs ? this.props.tradeHistoryStore.tradeHistoryTableMap.filter(item => item.pair == this.props.instrumentStore.currentInstrument) : this.props.tradeHistoryStore.tradeHistoryTableMap;

        let columns = [{
            title: <span style={{paddingLeft: 20}}>Trade ID</span>,
            dataIndex: 'tradeId',
            key: 'tradeId',    
            sorter: (a, b) => a.tradeId > b.tradeId ? 1 : -1,
            fixed: 'left' as 'left',
            width: 120,
            render: (text, record) => <span style={{paddingLeft: 20}}>{record.tradeId}</span>          
        }, {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',    
            sorter: (a, b) => a.orderId > b.orderId ? 1 : -1,
            fixed: 'left' as 'left',
            width: 120         
        }, {
            title: 'Pair',
            dataIndex: 'pair',
            key: 'pair',   
            fixed: 'left' as 'left',
            width: 120         
        }, {
            title: 'Side',
            dataIndex: 'side',
            key: 'side',
            sorter: (a, b) => a.side > b.side ? 1 : -1,
            width: 120,
            align: 'center' as 'center',
            render: (text, record) => <span className={record.side == "buy" ? "buy" : "sell"}>{capitalize(record.side)}</span>     
        }, {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            width: 130,
            align: 'right' as 'right'          
        }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            sorter: (a, b) => a.amount - b.amount,
            width: 120,
            align: 'right' as 'right'                   
        }, {
            title: 'Fee',
            dataIndex: 'fee',
            key: 'fee',
            sorter: (a, b) => a.fee - b.fee,
            width: 100,
            align: 'center' as 'center'                        
        }, {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            sorter: (a, b) => a.total - b.total,
            width: 120,
            align: 'center' as 'center'                                         
        }, {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: (a, b) => a.time > b.time ? 1 : -1,
        }]
        
        return (
            <WrapperTradeHistoryCmp>
                <OpsLine type="tradeHistory" changePairs={this.changePairs} />
                <Table 
                    className="myOrderTable"
                    rowKey="tradeId"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowClassName={() => {return "myOrdersTableRow"}}
                    scroll={{ x: 1100, y: this.props.scrollY }}
                />
            </WrapperTradeHistoryCmp>
        );
    }
}