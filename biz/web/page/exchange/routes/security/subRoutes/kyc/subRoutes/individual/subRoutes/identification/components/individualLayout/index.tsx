import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedIndividualLayoutCmp } from './styled';

type IndividualLayoutProps = {
    match: any,
    history: any
}

type IndividualLayoutState = {
    personalData: any
}

export default class IndividualLayout extends React.Component<IndividualLayoutProps, IndividualLayoutState> {
    constructor(props: IndividualLayoutProps) {
        super(props);
        this.state = {
            personalData: {
                kycPersonalCertInfoResponse: null,
                kycPersonalCertResponse: null,
                kycPersonalInfoResponse: null,
                kycPersonalFinanceSaveResponse: null,
                kycPersonalProtocolSaveResponse: null,
                kycPersonalSupplementSaveResponse: null
            }
        };
    }

    componentWillMount() {
        let that = this;
        ajax({
            url: 'personalKyc.getKycPersonalData',
            method: 'get',
            needToken: false,
            urlName: `/2`,
            callback(data) {
                if (data) {
                    common.setLS('personalData', data);
                    that.setState({
                        personalData: data
                    });
                }
            }
        })
    }

    render() {
        const navBarItems = [{
            key: 'customerInfo',
            value: "客户信息",
            interface: 'kycPersonalInfoResponse'
        },{
            key: 'financialInfo',
            value: "财务信息",
            interface: 'kycPersonalFinanceSaveResponse'
        },{
            key: 'agreement',
            value: "签署协议",
            interface: 'kycPersonalProtocolSaveResponse'
        },{
            key: 'otherInfo',
            value: "其他资料",
            interface: 'kycPersonalSupplementSaveResponse'
        },{
            key: 'submitApplication',
            value: "提交申请",
            interface: ''
        }];
        const { history, match } = this.props;
        let personalData = this.state.personalData;
        let list = history.location.pathname.split('identification/');
        let activeItem = list.length > 1 ? list[1] : '';

        return (
            <WrappedIndividualLayoutCmp>
                <div className="layoutCmp">
                    <div className="navBar">
                        {navBarItems.map(item => 
                            <div 
                                className={item.key == activeItem ? item.key + " navItem active" : item.key + " navItem"} 
                                key={item.key}
                                onClick={() => {history.push(`${match.path}/${item.key}`);}}
                            >
                                {item.value}
                                <div className={personalData[item.interface] ? "navIcon hasInfo" : "navIcon"}></div>
                            </div>
                        )}
                    </div>
                </div>
            </WrappedIndividualLayoutCmp>
        )
    }
}