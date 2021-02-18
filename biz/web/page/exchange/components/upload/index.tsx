import * as React from "react";
import { Upload } from 'antd';
import { WrapperUploadCmp } from './styled';
const { Dragger } = Upload;

type UploadCmpProps = {
    [props: string]: any,
    DraggerProps?: any
}

type UploadCmpState = {
    fileList: any
}

export default class UploadCmp extends React.Component<UploadCmpProps, UploadCmpState> {
    constructor(props: UploadCmpProps) {
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
                        response: {data: itemList[0]},
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
                return <div className={file.type ? file.type.split('/')[1] : 'png'}></div>
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
                        val = val + `${item.response.data},${item.name},${item.size},${item.type}|`
                    });
                    onSuccess(keyName, val);
                } else if (status === 'error') {
                    onError();
                }
            },
            onRemove(file) {
            },
            onPreview(file) {
                if (file.type.indexOf('image/') < 0) {
                    window.open(`${document.location.origin}/exchange/api/image/load/${file.response.data}`, '_blank');
                } else {
                    window.open(`${document.location.origin}/exchange/api/image/view/${file.response.data}`, '_blank');
                }
            }
        };
        return (
            <WrapperUploadCmp>
                <Dragger {...props}
                >
                    <div className="uploadText">
                        <p>点击或将文件拖拽到这里<a>上传</a></p>
                        <p>支持扩展名：.pdf .jpg .jpeg .png...</p>
                    </div>
                </Dragger>
            </WrapperUploadCmp> 
        )
    }
}