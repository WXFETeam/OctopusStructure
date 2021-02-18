import * as React from "react";
import SubmitApplicationCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/submitApplication/index";
export default class SubmitApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { history, match } = this.props;
        return (React.createElement(SubmitApplicationCpt, { user: "individual", history: history, match: match }));
    }
}
//# sourceMappingURL=index.js.map