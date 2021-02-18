import * as React from "react";

type DeviceProps = {
    routes: any,
    match: any
}

export default class Device extends React.Component<DeviceProps, {}> {
    constructor(props: DeviceProps) {
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