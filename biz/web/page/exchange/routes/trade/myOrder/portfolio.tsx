import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { WrapperPotfolioCmp } from './styled';
import { Row, Col, Table } from 'antd';
import OpsLine from './opsLine';

type PortfolioProps = {
    portfolioStore?: any,
    instrumentStore?: any,
    scrollY: number
}

type PortfolioState = {
    hidePairs: boolean
}

@inject('instrumentStore', 'portfolioStore')
@observer
export default class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    constructor(props: PortfolioProps) {
        super(props);
        this.state = {
            hidePairs: false
        }
    }

    changePairs = (e) => {
        this.setState({ hidePairs: e.target.checked })
    }

    render() {
        const { portfolioStore, instrumentStore } = this.props;
        let dataSource = this.state.hidePairs ? portfolioStore.portfolioListMap.filter(item => (item.token == instrumentStore.currentBasicCurrency || item.token == instrumentStore.currentTargetCurrency)) : portfolioStore.portfolioListMap;
        let columns = [{
            title: <span style={{paddingLeft: 20}}>Token</span>,
            dataIndex: 'token',
            key: 'token',
            width: '10%',
            render: (text, record) => <span style={{paddingLeft: 20}}>{record.token}</span>     
        }, {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            sorter: (a, b) => a.amount - b.amount,
            width: '10%'
        }, {
            title: 'Average Price',
            dataIndex: 'averagePrice',
            key: 'averagePrice',
            sorter: (a, b) => a.averagePrice - b.averagePrice,
            width: '19%'
        }, {
            title: 'Last Price',
            dataIndex: 'lastPrice',
            key: 'lastPrice',
            sorter: (a, b) => a.lastPrice - b.lastPrice,
            width: '19%'
        }, {
            title: 'P/L',
            dataIndex: 'pl',
            key: 'pl',
            sorter: (a, b) => a['pl'] - b['pl'],
            width: '12%'
        }, {
            title: 'In Order',
            dataIndex: 'inOrder',
            key: 'inOrder',
            sorter: (a, b) => a.inOrder - b.inOrder,
            width: '12%'
        }, {
            title: 'Total Balance',
            dataIndex: 'totalBalance',
            sorter: (a, b) => a.totalBalance - b.totalBalance,
            key: 'totalBalance'
        }];

        return (
            <WrapperPotfolioCmp>
                <OpsLine type="potfolio" changePairs={this.changePairs} />
                <Table
                    className="myOrderTable"
                    rowKey="id"
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    rowClassName={() => { return "myOrdersTableRow" }}
                    scroll={{ x: document.body.offsetWidth > 1365 ? null : 750, y: this.props.scrollY }}
                />
            </WrapperPotfolioCmp>
        );
    }
}