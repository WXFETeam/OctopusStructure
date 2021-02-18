import * as React from "react";
import OtherInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/otherInfo/index";
export default class OtherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement(OtherInfoCpt, { user: "institution" }));
    }
}
//# sourceMappingURL=index.js.map