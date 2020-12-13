import * as React from "react";
import { WrappedHeaderCmp } from './styled';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title } = this.props;
        return (React.createElement(WrappedHeaderCmp, null, title));
    }
}
//# sourceMappingURL=index.js.map