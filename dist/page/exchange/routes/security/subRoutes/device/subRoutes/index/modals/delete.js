import * as React from "react";
import { Row, Button, message, Modal } from 'antd';
import { ConfirmModalWrapped } from './styled';
export default class ConfirmModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleOk = () => {
            let id = this.props.curDeviceInfo.id;
            ajax({
                url: 'security.delDevice',
                data: { id },
                callback: (data) => {
                    message.success(`delete!`);
                    this.props._close();
                }
            });
        };
        this.handleCancel = () => {
            this.props._close();
        };
        this.state = {};
    }
    render() {
        return (React.createElement(Modal, { visible: true, centered: true, maskClosable: true, closable: false, title: null, onCancel: this.handleCancel, footer: null, width: 420 },
            React.createElement(ConfirmModalWrapped, null,
                React.createElement("h3", { className: 'title' }, "\u786E\u8BA4\u5C06\u4EE5\u4E0B\u8BBE\u5907\u4ECE\u53EF\u4FE1\u5217\u8868\u4E2D\u79FB\u9664\u4E48\uFF1F"),
                React.createElement(Row, { className: 'info', style: { marginTop: 30 } },
                    React.createElement("span", { className: 'des' }, "\u8BBE\u5907\uFF1A"),
                    React.createElement("span", null, 'Chrome V80.0.3987.12')),
                React.createElement(Row, { className: 'info' },
                    React.createElement("span", { className: 'des' }, "IP\u5730\u5740\uFF1A"),
                    React.createElement("span", null, '207.148.88.229')),
                React.createElement(Row, { className: 'btnWrapper' },
                    React.createElement(Button, { className: 'btn', onClick: this.handleCancel.bind(this) }, "\u53D6\u6D88"),
                    React.createElement(Button, { className: 'btn sp', onClick: this.handleOk.bind(this) }, "\u5220\u9664")))));
    }
}
//# sourceMappingURL=delete.js.map