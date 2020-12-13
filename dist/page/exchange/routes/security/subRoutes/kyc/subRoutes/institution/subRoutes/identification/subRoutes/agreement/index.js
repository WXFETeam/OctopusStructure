import * as React from "react";
import AgreementCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/agreement/index";
export default class Agreement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(AgreementCpt, { user: "institution" }));
    }
}
//# sourceMappingURL=index.js.map