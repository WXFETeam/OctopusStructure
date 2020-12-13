import * as React from "react";
import CustomerInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/customerInfo/index";

type CustomerInfoProps = {
    routes: any,
    match: any
}

export default class CustomerInfo extends React.Component<CustomerInfoProps, {}> {
    constructor(props: CustomerInfoProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <CustomerInfoCpt user="individudal" />
        )
    }
}