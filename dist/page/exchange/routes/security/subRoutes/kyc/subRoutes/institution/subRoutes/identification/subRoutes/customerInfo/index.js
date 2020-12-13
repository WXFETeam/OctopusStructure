import * as React from "react";
import CustomerInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/customerInfo/index";
export default class CustomerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(CustomerInfoCpt, { user: "institution" }));
    }
}
//# sourceMappingURL=index.js.map