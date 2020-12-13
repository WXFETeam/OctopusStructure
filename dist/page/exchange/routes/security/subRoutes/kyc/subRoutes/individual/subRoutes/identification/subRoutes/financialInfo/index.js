import * as React from "react";
import FinancialInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/financialInfo/index";
export default class FinancialInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(FinancialInfoCpt, { user: "individual" }));
    }
}
//# sourceMappingURL=index.js.map