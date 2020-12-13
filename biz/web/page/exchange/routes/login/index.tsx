import * as React from "react";

type LoginProps = {
    routes: any,
    match: any
}

export default class FindMFA extends React.Component<LoginProps, {}> {
    constructor(props: LoginProps) {
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