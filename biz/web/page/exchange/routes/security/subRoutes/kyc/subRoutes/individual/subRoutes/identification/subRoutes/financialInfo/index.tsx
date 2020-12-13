import * as React from "react";
import FinancialInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/financialInfo/index";

type FinancialInfoProps = {
    routes: any,
    match: any
}

export default class FinancialInfo extends React.Component<FinancialInfoProps, {}> {
    constructor(props: FinancialInfoProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <FinancialInfoCpt user="individual" />
        )
    }
}