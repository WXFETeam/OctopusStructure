import * as React from "react";
import { WrapperTradeRecordCmp, Content } from './styled';
import SubMenu from '../../../index/components/menu';
export default class TradeRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(WrapperTradeRecordCmp, null,
            React.createElement(SubMenu, Object.assign({ curSelected: 2 }, this.props)),
            React.createElement(Content, null, "AccountRecord page!")));
    }
}
//# sourceMappingURL=index.js.map