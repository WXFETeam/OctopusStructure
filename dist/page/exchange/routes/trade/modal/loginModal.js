import * as React from "react";
import { Button } from 'antd';
import { WrapperLoginModalCmp } from './styled';
export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(WrapperLoginModalCmp, null,
            React.createElement("div", { className: "modalArea" },
                React.createElement("div", { className: "top" },
                    React.createElement(Button, { className: "blueGlBtn" }, "Register")),
                React.createElement("div", { className: "middle" }, "or"),
                React.createElement("div", { className: "bottom" },
                    React.createElement("a", null, "log in")))));
    }
}
//# sourceMappingURL=loginModal.js.map