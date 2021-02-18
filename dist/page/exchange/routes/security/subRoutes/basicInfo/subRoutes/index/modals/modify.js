import * as React from "react";
import { Row, Button, Modal, Input } from 'antd';
import { ModifyModalWrapped } from './styled';
export default class ModifyModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleOk = () => {
            this.props._close();
        };
        this.handleCancel = () => {
            this.props._close();
        };
        this.state = {};
    }
    render() {
        return (React.createElement(Modal, { visible: true, centered: true, maskClosable: true, closable: false, title: null, onCancel: this.handleCancel, footer: null, width: 420 },
            React.createElement(ModifyModalWrapped, null,
                React.createElement("h3", { className: 'title' }, "\u4FEE\u6539\u5E10\u6237\u540D"),
                React.createElement(Row, { className: 'info' },
                    React.createElement(Input, { type: 'text', className: 'input', placeholder: '\u8F93\u5165\u65B0\u7684\u5E10\u6237\u540D' })),
                React.createElement(Row, { className: 'btnWrapper' },
                    React.createElement(Button, { className: 'btn', onClick: this.handleCancel.bind(this) }, "\u53D6\u6D88"),
                    React.createElement(Button, { className: 'btn sp', onClick: this.handleOk.bind(this) }, "\u786E\u8BA4")))));
    }
}
//# sourceMappingURL=modify.js.map