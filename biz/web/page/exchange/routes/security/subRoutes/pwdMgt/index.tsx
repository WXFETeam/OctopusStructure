import * as React from "react";

type PwdProps = {
    routes: any,
    match: any
}

export default class PwdMgt extends React.Component<PwdProps, {}> {
    constructor(props: PwdProps) {
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