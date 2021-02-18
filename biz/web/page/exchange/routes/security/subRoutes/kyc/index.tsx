import * as React from "react";

type KYCProps = {
    routes: any,
    match: any
}

export default class KYC extends React.Component<KYCProps, {}> {
    constructor(props: KYCProps) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div>            
                {renderRoutes(this.props.routes, this.props.match.url)}
            </div>     
        )
    }
}