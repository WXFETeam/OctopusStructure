import * as React from "react";

type ActivityProps = {
    routes: any,
    match: any
}

export default class AccountActivity extends React.Component<ActivityProps, {}> {
    constructor(props: ActivityProps) {
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