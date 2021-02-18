import * as React from "react";
import Risk from "@webExchangeRoutes/security/subRoutes/kyc/components/riskEvaluation/index";
export default class RiskEvaluation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { history, match } = this.props;
        return (React.createElement(Risk, { user: "institution", match: match, history: history }));
    }
}
//# sourceMappingURL=index.js.map