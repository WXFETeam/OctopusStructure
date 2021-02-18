import * as React from "react";

type BasicInfoProps = {
    routes: any,
    match: any
}

export default class Mail extends React.Component<BasicInfoProps, {}> {
    constructor(props: BasicInfoProps) {
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