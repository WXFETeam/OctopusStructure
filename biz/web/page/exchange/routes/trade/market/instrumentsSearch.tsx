import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { Row, Col, Input } from 'antd';
import { WrapperInstrumentsSearch } from './styled';

type InstrumentsSearchProps = {
    instrumentStore?: any
}

@inject('instrumentStore')
@observer
export default class InstrumentList extends React.Component<InstrumentsSearchProps, {}> {
    constructor(props: InstrumentsSearchProps) {
        super(props);
    }

    changeSearchText = ({ target: { value }}) => {
        this.props.instrumentStore.changeSearchText(value);
    }

    render() {
        const { instrumentStore } = this.props;
        return (
            <WrapperInstrumentsSearch>
                <Input 
                    placeholder="Search"
                    onChange={this.changeSearchText}
                    value={instrumentStore.searchText}
                />
            </WrapperInstrumentsSearch>
        );
    }
}