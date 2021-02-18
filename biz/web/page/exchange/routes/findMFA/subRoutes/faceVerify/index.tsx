import * as React from "react";
import { Row, Col } from 'antd';
import { WrapperFaceVerifyCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type FaceVerifyProps = {
    userStore?: any
}

type FaceVerifyState = {

}

@inject('userStore')
@observer
export default class FaceVerify extends React.Component<FaceVerifyProps, FaceVerifyState> {
    constructor(props: FaceVerifyProps) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <WrapperFaceVerifyCmp>
                <Row justify="center" style={{height: '100%', paddingTop: 96}}>
                    <div className="frame">
                        <div className="title">请完成人脸认证</div>
                        <div className="frameItem">
                            <p className="tit">请在手机上打开Hashkey APP通过“扫一扫”扫描下方二维码进行人脸信息认证。</p>
                            <div className="contentBox">
                                <div className="leftBox">
                                    <img src='' />
                                </div>
                                <div className="rightBox">
                                    <p className="content1">没有Hashkey手机客户端？</p>
                                    <p className="content2"><a>下载>></a></p>
                                    <p className="content3">“扫一扫”位于Hashkey APP中“我的”和“首页”页面中，<br/>如果您找不到这个功能，请更新您APP至最新版本</p>
                                </div>
                            </div>
                            <p className="tip">无法使用APP？<a>电脑认证</a>（APP暂未上线，请使用电脑认证）</p>
                        </div>
                    </div>
                </Row>
            </WrapperFaceVerifyCmp>
        )
    }
}