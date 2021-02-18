import * as React from 'react';
import { LoadingWrapper, GlobalStyle } from './styled';
export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dotList = new Array(17);
        for (let i = 0; i < 17; i++) {
            dotList[i] = i;
        }
        let isReady = this.props.isReady;
        return (React.createElement(LoadingWrapper, { className: isReady ? "hide" : "" },
            React.createElement(GlobalStyle, null),
            React.createElement("div", { className: "loading-spinner" }, dotList.map((item, index) => React.createElement("div", { key: index, className: "spinner-item item-" + index },
                React.createElement("div", { className: "spinner-dot" }))))));
    }
}
//# sourceMappingURL=loading.js.map