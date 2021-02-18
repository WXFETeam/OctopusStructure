import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedAssetViewCmp } from './styled';
import { observer, inject } from 'mobx-react/index';

type assetViewProps = {
    assetStore?: any
}
@inject('assetStore')
@observer
export default class AssetView extends React.Component<assetViewProps, {}> {
    constructor(props: assetViewProps) {
        super(props);
    }

    render() {
        const { userAccount } = this.props.assetStore;
        return (
            <WrappedAssetViewCmp>
                <div className="assetView">
                    <Col className="assetViewContent">
                        <Row>
                            总资产折算
                        </Row>
                        <Row className="assetViewAmountDetail">
                            <span>{ userAccount && userAccount.amount001  }</span><span>{ userAccount && userAccount.currency }</span><span>￥{ userAccount && userAccount.amount002 }</span>
                        </Row>
                    </Col>
                    {
                        userAccount && userAccount.subAccount ? (
                            <Col span={10} className="assetViewContent subAccount">
                                <Row>
                                    母子账户总资产折算
                                </Row>
                                <Row className="assetViewAmountDetail">
                                    <span>{ userAccount && userAccount.subAccount && userAccount.subAccount.amount001 }</span><span>{ userAccount && userAccount.subAccount && userAccount.subAccount.currency }</span><span>￥{ userAccount && userAccount.subAccount && userAccount.subAccount.amount002}</span>
                                </Row>
                            </Col>
                        ) : ''
                    }
                </div>
            </WrappedAssetViewCmp>
        )
    }
}