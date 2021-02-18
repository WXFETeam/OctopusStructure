import * as React from "react";
export default class KYC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null, renderRoutes(this.props.routes, this.props.match.url)));
    }
}
//# sourceMappingURL=index.js.map