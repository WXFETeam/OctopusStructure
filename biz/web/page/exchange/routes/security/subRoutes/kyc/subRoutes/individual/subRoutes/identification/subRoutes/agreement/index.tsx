import * as React from "react";
import AgreementCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/agreement/index";

type AgreementProps = {
}

export default class Agreement extends React.Component<AgreementProps, {}> {
    constructor(props: AgreementProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <AgreementCpt user="individual" />
        )
    }
}