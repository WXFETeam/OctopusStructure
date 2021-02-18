var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import { capitalize } from 'lodash';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { WrapperInstrumentsList } from './styled';
import InstrumentsSearch from './instrumentsSearch';
import InstrumentsDetails from './instrumentsDetails';
let InstrumentList = class InstrumentList extends React.Component {
    constructor(props) {
        super(props);
        this.changeTabs = () => { this.props.instrumentStore.changeSearchText(""); };
    }
    render() {
        return (React.createElement(WrapperInstrumentsList, null,
            React.createElement(Tabs, { defaultActiveKey: "all", className: "tabNav", onChange: this.changeTabs }, ["favorites", "all", "eth", "btc", "usdt"].map(item => {
                if (item == "favorites") {
                    return React.createElement(TabPane, { tab: React.createElement("span", { className: "favorite" }, capitalize(item)), key: item },
                        React.createElement(InstrumentsSearch, null),
                        React.createElement(InstrumentsDetails, { searchBasicType: item }));
                }
                else {
                    return React.createElement(TabPane, { tab: item.toUpperCase(), key: item },
                        React.createElement(InstrumentsSearch, null),
                        React.createElement(InstrumentsDetails, { searchBasicType: item.toUpperCase() }));
                }
            }))));
    }
};
InstrumentList = __decorate([
    inject('instrumentStore'),
    observer
], InstrumentList);
export default InstrumentList;
//# sourceMappingURL=instrumentsList.js.map