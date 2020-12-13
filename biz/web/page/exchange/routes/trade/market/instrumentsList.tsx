import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { Row, Col, Tabs } from 'antd';
const { TabPane } = Tabs;
import { WrapperInstrumentsList } from './styled';
import InstrumentsSearch from './instrumentsSearch';
import InstrumentsDetails from './instrumentsDetails';

type InstrumentsListProps = {
    instrumentStore?: any
}

@inject('instrumentStore')
@observer
export default class InstrumentList extends React.Component<InstrumentsListProps, {}> {
    constructor(props: InstrumentsListProps) {
        super(props);
    }

    changeTabs = () => { this.props.instrumentStore.changeSearchText("") }

    render() {
        return (
            <WrapperInstrumentsList>
                <Tabs defaultActiveKey="all" className="tabNav" onChange={this.changeTabs}>
                    {["favorites", "all", "eth", "btc", "usdt"].map(item =>
                        {
                            if (item == "favorites") {
                                return <TabPane
                                    tab={
                                        <span className="favorite">{capitalize(item)}</span>
                                    }
                                    key={item}
                                >
                                    <InstrumentsSearch />
                                    <InstrumentsDetails searchBasicType={item} />
                                </TabPane>
                            } else {
                                return <TabPane
                                    tab={item.toUpperCase()}
                                    key={item}
                                >
                                    <InstrumentsSearch />
                                    <InstrumentsDetails searchBasicType={item.toUpperCase()} />
                                </TabPane>
                            }
                        })
                    }
                </Tabs>
            </WrapperInstrumentsList>
        );
    }
}