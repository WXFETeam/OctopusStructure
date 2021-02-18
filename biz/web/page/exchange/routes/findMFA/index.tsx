import * as React from "react";

type FindMFAProps = {
    userStore?: any,
    routes: any,
    match: any
}

export default class FindMFA extends React.Component<FindMFAProps, {}> {
    constructor(props: FindMFAProps) {
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