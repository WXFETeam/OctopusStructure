import * as React from "react";
import OtherInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/otherInfo/index";

type OtherInfoProps = {
    routes: any,
    match: any
}

export default class OtherInfo extends React.Component<OtherInfoProps, {}> {
    constructor(props: OtherInfoProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <OtherInfoCpt user="individual" />
        )
    }
}