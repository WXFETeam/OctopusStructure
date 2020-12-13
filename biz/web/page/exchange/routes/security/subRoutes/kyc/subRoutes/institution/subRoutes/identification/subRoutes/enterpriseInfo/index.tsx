import * as React from "react";
import EnterpriseInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/enterpriseInfo/index";

type EnterpriseInfoProps = {
    routes: any,
    match: any
}

export default class EnterpriseInfo extends React.Component<EnterpriseInfoProps, {}> {
    constructor(props: EnterpriseInfoProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <EnterpriseInfoCpt />
        )
    }
}