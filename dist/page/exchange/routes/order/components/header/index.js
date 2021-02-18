import * as React from "react";
import { WrappedOrderHeaderCmp } from './styled';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title } = this.props;
        return (React.createElement(WrappedOrderHeaderCmp, null, title));
    }
}
//# sourceMappingURL=index.js.map