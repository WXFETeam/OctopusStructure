import * as React from "react";
import { WrapperAccountMgtCmp, Content } from './styled';
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
            React.createElement(Content, null, "AddAccount page!")));
    }
}
//# sourceMappingURL=index.js.map