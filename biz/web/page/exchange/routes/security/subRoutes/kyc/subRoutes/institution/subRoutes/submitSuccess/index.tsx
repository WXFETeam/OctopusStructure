import * as React from "react";
import Aduit from "@webExchangeRoutes/security/subRoutes/kyc/components/submitSuccess/index";

type SubmitSuccessProps = {
    routes: any,
    match: any,
    history: any
}

export default class SubmitSuccess extends React.Component<SubmitSuccessProps, {}> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        const {history, match} = this.props;
        return (
            <Aduit user='institution' history={history} match={match} />
        )
    }
}