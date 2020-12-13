import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
import SubMenu from '../../../../../index/components/menu';
export default class AccountMgt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
        };
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(WrapperAccountMgtCmp, null,
            React.createElement(SubMenu, Object.assign({ curSelected: 1 }, this.props)),
            React.createElement(Content, null, "AccountMgt page!")));
    }
}
//# sourceMappingURL=index.js.map