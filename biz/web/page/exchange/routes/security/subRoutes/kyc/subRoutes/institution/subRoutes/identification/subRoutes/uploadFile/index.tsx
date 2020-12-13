import * as React from "react";
import UploadFileCpt from "@webExchangeRoutes/security/subRoutes/kyc/components/uploadFile/index";

type UploadFileProps = {
    routes: any,
    match: any
}

export default class UploadFile extends React.Component<UploadFileProps, {}> {
    constructor(props: UploadFileProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <UploadFileCpt />
        )
    }
}