import * as React from "react";

type InstitutionProps = {
    routes: any,
    match: any
}

export default class Institution extends React.Component<InstitutionProps, {}> {
    constructor(props: InstitutionProps) {
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