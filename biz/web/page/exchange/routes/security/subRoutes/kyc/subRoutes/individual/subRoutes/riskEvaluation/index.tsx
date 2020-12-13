import * as React from "react";
import Risk from "@webExchangeRoutes/security/subRoutes/kyc/components/riskEvaluation/index";

type RiskProps = {
    match: any,
    history: any
}

export default class RiskEvaluation extends React.Component<RiskProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        const {history, match} = this.props;
        return (
            <Risk user="individual" match={match} history={history} />
        )
    }
}