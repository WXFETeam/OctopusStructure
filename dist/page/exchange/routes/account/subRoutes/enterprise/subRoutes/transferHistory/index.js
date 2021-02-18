import * as React from "react";
import { WrapperTransferHistoryCmp, Content } from './styled';
import SubMenu from '../../../index/components/menu';
export default class TransferHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(WrapperTransferHistoryCmp, null,
            React.createElement(SubMenu, Object.assign({ curSelected: 3 }, this.props)),
            React.createElement(Content, null, "TradeHistory page!")));
    }
}
//# sourceMappingURL=index.js.map