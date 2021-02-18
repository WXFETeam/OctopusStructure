import * as React from "react";
import { Upload } from 'antd';
import { WrapperUploadCmp } from './styled';
const { Dragger } = Upload;
export default class UploadCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: []
        };
    }
    componentWillMount() {
        let fileName = this.props.fileName;
        let defaultFileList = [];
        if (fileName) {
            let list = fileName.split('|');
            list.map(item => {
                if (item) {
                    let itemList = item.split(',');
                    defaultFileList.push({
                        uid: itemList[0],
                        name: itemList[1],
                        size: Number(itemList[2]),
                        type: itemList[3],
                        response: { data: itemList[0] },
                        status: 'done'
                    });
                }
            });
            this.setState({
                fileList: defaultFileList
            });
        }
    }
    render() {
        let that = this;
        let { keyName, onSuccess, onError } = this.props;
        let fileList = this.state.fileList;
        const props = {
            name: 'file',
            multiple: false,
            action: `${document.location.origin}/exchange/api/image/store/${keyName}`,
            fileList: fileList,
            iconRender: (file, listType) => {
                return React.createElement("div", { className: file.type ? file.type.split('/')[1] : 'png' });
            },
            onChange(info) {
                console.log(info);
                const { status } = info.file;
                let fileList = info.fileList;
                that.setState({
                    fileList: fileList
                });
                if (status !== 'uploading') {
                }
                if (status === 'done' || status === 'removed') {
                    let val = '';
                    fileList.map(item => {
                        val = val + `${item.response.data},${item.name},${item.size},${item.type}|`;
                    });
                    onSuccess(keyName, val);
                }
                else if (status === 'error') {
                    onError();
                }
            },
            onRemove(file) {
            },
            onPreview(file) {
                if (file.type.indexOf('image/') < 0) {
                    window.open(`${document.location.origin}/exchange/api/image/load/${file.response.data}`, '_blank');
                }
                else {
                    window.open(`${document.location.origin}/exchange/api/image/view/${file.response.data}`, '_blank');
                }
            }
        };
        return (React.createElement(WrapperUploadCmp, null,
            React.createElement(Dragger, Object.assign({}, props),
                React.createElement("div", { className: "uploadText" },
                    React.createElement("p", null,
                        "\u70B9\u51FB\u6216\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u8FD9\u91CC",
                        React.createElement("a", null, "\u4E0A\u4F20")),
                    React.createElement("p", null, "\u652F\u6301\u6269\u5C55\u540D\uFF1A.pdf .jpg .jpeg .png...")))));
    }
}
//# sourceMappingURL=index.js.map