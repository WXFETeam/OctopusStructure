import * as React from "react";
import { Row } from 'antd';
import { WrapperImageCodeCmp } from './styled';

const icoSuccess = require("@webExchangeImgs/imageCode/reload.png");
const icoError = require("@webExchangeImgs/imageCode/reload.png");
const icoReload = require("@webExchangeImgs/imageCode/reload.png");
const icoSlider = require("@webExchangeImgs/imageCode/reload.png");
const icoClose = require("@webExchangeImgs/imageCode/close.png");
const STATUS_LOADING = 0; // 还没有图片
const STATUS_READY = 1; // 图片渲染完成,可以开始滑动
const STATUS_MATCH = 2; // 图片位置匹配成功
const STATUS_ERROR = 3; // 图片位置匹配失败
const imageWidth = 339;
const imageHeight = 210;
const fragmentSize = 60;
const arrTips = [{ ico: icoSuccess, text: "匹配成功" }, { ico: icoError, text: "匹配失败" }];

type ImageCodeProps = {
    [props: string]: any
}

type ImageCodeState = {
    isMovable: boolean,
    offsetX: number, //图片截取的x
    offsetY: number, //图片截取的y
    startX: number, // 开始滑动的 x
    oldX: number,
    currX: number, // 滑块当前 x,
    status: number,
    showTips: boolean,
    tipsIndex: number,
    imageCodeInfo: any
}

export default class ImageCode extends React.Component<ImageCodeProps, ImageCodeState> {
    constructor(props: ImageCodeProps) {
        super(props);
        this.state = {
            isMovable: false,
            offsetX: 0, //图片截取的x
            offsetY: 0, //图片截取的y
            startX: 0, // 开始滑动的 x
            oldX: 0,
            currX: 0, // 滑块当前 x,
            status: STATUS_LOADING,
            showTips: false,
            tipsIndex: 0,
            imageCodeInfo: null
        };
    }

    componentDidUpdate(prevProps) {
        // 当父组件传入新的图片后，开始渲染
        if (!!this.props.showImageCode && prevProps.showImageCode !== this.props.showImageCode) {
            this.renderImage()
        }
    }


    componentDidMount() {
        this.renderImage();
    }

    getCaptcha = () => {
        let that = this;
        ajax({
            url: 'general.imageCode',
            needToken: false,
            method: 'get',
            callback(data) {
                that.setState({
                    imageCodeInfo: data
                }, () => {
                    that.setState({ status: STATUS_READY })
                });
            }
        })
    }

    onMatch = (x) => {
        let that = this;
        let imageCodeInfo = this.state.imageCodeInfo;
        return new Promise((resolve, reject) => {
            ajax({
                url: 'general.verification',
                needToken: false,
                method: 'get',
                params: {UUID: imageCodeInfo.uuidOne, x: x, y: imageCodeInfo.y},
                callback(data) {
                    resolve(data);
                }
            })
        })
    }

    renderImage = () => {
        // 初始化状态
        this.getCaptcha();
    }
 
    onMoveStart = e => {
        if (this.state.status !== STATUS_READY) {
            return
        }
 
        // 记录滑动开始时的绝对坐标x
        this.setState({ isMovable: true, startX: e.clientX })
    }
 
    onMoving = e => {
        if (this.state.status !== STATUS_READY || !this.state.isMovable) {
            return
        }
        const distance = e.clientX - this.state.startX
        let currX = this.state.oldX + distance
 
        const minX = 0
        const maxX = imageWidth - fragmentSize
        currX = currX < minX ? 0 : currX > maxX ? maxX : currX
 
        this.setState({ currX })
    }
 
    onMoveEnd = () => {
        if (this.state.status !== STATUS_READY || !this.state.isMovable) {
            return
        }
        // 将旧的固定坐标x更新
        this.setState(pre => ({ isMovable: false, oldX: pre.currX }));

        this.onMatch(this.state.currX).then((data: any) => {
            if (data.result) {
                this.setState(pre => ({ status: STATUS_MATCH, currX: pre.offsetX }), this.onShowTips);
                this.props.onClose();
                this.props.onSuccess(data.uuid);
            } else {
                this.setState({ status: STATUS_ERROR }, () => {
                    this.onReset()
                    this.onShowTips()
                })
                this.props.onError()
            }
        });
    }
 
    onReset = () => {
        const timer = setTimeout(() => {
            this.setState({ oldX: 0, currX: 0, status: STATUS_READY })
            clearTimeout(timer)
        }, 1000)
    }
 
    onReload = () => {
        if (this.state.status !== STATUS_READY && this.state.status !== STATUS_MATCH) {
            return
        }
 
        this.setState(
            {
                isMovable: false,
                offsetX: 0, //图片截取的x
                offsetY: 0, //图片截取的y
                startX: 0, // 开始滑动的 x
                oldX: 0,
                currX: 0, // 滑块当前 x,
                status: STATUS_LOADING
            },
            () => {
                this.renderImage();
            }
        )
    }

    onClose = () => {
        this.props.onClose();
    }
 
    onShowTips = () => {
        if (this.state.showTips) {
            return
        }
 
        const tipsIndex = this.state.status === STATUS_MATCH ? 0 : 1
        this.setState({ showTips: true, tipsIndex })
        const timer = setTimeout(() => {
            this.setState({ showTips: false })
            clearTimeout(timer)
        }, 2000)
    }

    render() {
        const imageCodeInfo = this.state.imageCodeInfo;
        const showImageCode = this.props.showImageCode;
        const { currX, showTips, tipsIndex } = this.state
        const tips = arrTips[tipsIndex]

        return (
            <WrapperImageCodeCmp>
                {imageCodeInfo ? <div className={showImageCode ? "main-container" : "main-container close"}>
                    <div className="image-code">
                        <div className="image-container" style={{ height: imageHeight, backgroundImage: `url("data:image/jpeg;base64,${imageCodeInfo.shadeImage}")` }}>
                            <img
                                id="fragmentCanvas"
                                className="canvas"
                                width={fragmentSize}
                                height={fragmentSize}
                                src={`data:image/jpeg;base64,${imageCodeInfo.cutoutImage}`}
                                style={{ top: imageCodeInfo.y + "px", left: currX + "px" }}
                            />
        
                            <div className={showTips ? "tips-container--active" : "tips-container"}>
                                <span className="tips-text">{tips.text}</span>
                            </div>
                        </div>
                        <div className="slider-wrapper" onMouseMove={this.onMoving} onMouseLeave={this.onMoveEnd}>
                            <div className="slider-bar">按住滑块，拖动完成拼图</div>
                            <a
                                className="slider-button"
                                onMouseDown={this.onMoveStart}
                                onMouseUp={this.onMoveEnd}
                                style={{ left: currX + "px" }}
                            >>></a>
                        </div>
                        <div className="reload-container">
                            <div className="reload-close">
                                <a className="reload-wrapper" onClick={this.onReload} style={{ backgroundImage: `url("${icoReload}")` }}></a>
                                <a className="close-wrapper" onClick={this.onClose} style={{ backgroundImage: `url("${icoClose}")` }}></a>
                            </div>
                        </div>
                    </div>
                    <div className="image-bg"></div>
                </div> : ''}
            </WrapperImageCodeCmp>
        )
    }
}