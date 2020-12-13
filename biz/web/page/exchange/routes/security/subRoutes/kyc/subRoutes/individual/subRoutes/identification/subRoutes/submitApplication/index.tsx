import * as React from "react";
import SubmitApplicationCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/submitApplication/index";

type SubmitApplicationProps = {
    routes: any,
    match: any,
    history: any
}

export default class SubmitApplication extends React.Component<SubmitApplicationProps, {}> {
    constructor(props: SubmitApplicationProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        const {history, match} = this.props;
        return (
            <SubmitApplicationCpt user="individual" history={history} match={match} />
        )
    }
}