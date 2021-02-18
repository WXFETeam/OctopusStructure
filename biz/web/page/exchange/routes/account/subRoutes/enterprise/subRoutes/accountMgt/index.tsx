import * as React from "react";

type IndividualProps = {
    routes: any,
    match: any
}

export default class AccountMgt extends React.Component<IndividualProps, {}> {
    constructor(props: IndividualProps) {
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