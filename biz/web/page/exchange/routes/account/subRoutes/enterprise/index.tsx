import * as React from "react";

type EnterpriseProps = {
    routes: any,
    match: any
}

export default class Enterprise extends React.Component<EnterpriseProps, {}> {
    constructor(props: EnterpriseProps) {
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