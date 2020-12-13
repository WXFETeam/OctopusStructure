import * as React from "react";
import Aduit from "@webExchangeRoutes/security/subRoutes/kyc/components/submitSuccess/index";
export default class SubmitSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { history, match } = this.props;
        return (React.createElement(Aduit, { user: 'individual', history: history, match: match }));
    }
}
//# sourceMappingURL=index.js.map