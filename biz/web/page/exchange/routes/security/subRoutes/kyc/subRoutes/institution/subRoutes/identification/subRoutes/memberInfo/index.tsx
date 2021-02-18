import * as React from "react";
import MemberInfoCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/memberInfo/index";

type MemberInfoProps = {
    routes: any,
    match: any
}

export default class MemberInfo extends React.Component<MemberInfoProps, {}> {
    constructor(props: MemberInfoProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <MemberInfoCpt />
        )
    }
}