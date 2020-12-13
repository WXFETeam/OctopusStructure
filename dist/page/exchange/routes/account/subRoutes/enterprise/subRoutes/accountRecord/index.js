import * as React from "react";
import { WrapperAccountRecordCmp, Content } from './styled';
import SubMenu from '../../../index/components/menu';
export default class AccountRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        };
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(WrapperAccountRecordCmp, null,
            React.createElement(SubMenu, Object.assign({ curSelected: 4 }, this.props)),
            React.createElement(Content, null, "AccountRecord page!")));
    }
}
//# sourceMappingURL=index.js.map