var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { Input } from 'antd';
import { WrapperInstrumentsSearch } from './styled';
let InstrumentList = class InstrumentList extends React.Component {
    constructor(props) {
        super(props);
        this.changeSearchText = ({ target: { value } }) => {
            this.props.instrumentStore.changeSearchText(value);
        };
    }
    render() {
        const { instrumentStore } = this.props;
        return (React.createElement(WrapperInstrumentsSearch, null,
            React.createElement(Input, { placeholder: "Search", onChange: this.changeSearchText, value: instrumentStore.searchText })));
    }
};
InstrumentList = __decorate([
    inject('instrumentStore'),
    observer
], InstrumentList);
export default InstrumentList;
//# sourceMappingURL=instrumentsSearch.js.map