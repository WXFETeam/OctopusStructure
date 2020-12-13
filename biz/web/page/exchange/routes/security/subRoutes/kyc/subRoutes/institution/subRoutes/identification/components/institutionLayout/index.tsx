import * as React from "react";
import { Row, Col } from 'antd';
import { WrappedInstitutionLayoutCmp } from './styled';

type InstitutionLayoutProps = {
    match: any,
    history: any
}

type InstitutionLayoutState = {
    insData: any
}

export default class InstitutionLayout extends React.Component<InstitutionLayoutProps, InstitutionLayoutState> {
    constructor(props: InstitutionLayoutProps) {
        super(props);
        this.state = {
            insData: {
                kycInsControlInfoResponse: null,
                kycInsFileResponse: null,
                kycInsFinanceResponse: null,
                kycInsInfoResponse: null,
                kycInsProtocolResponse: null,
                kycInsSupplementResponse: null,
                memberList: null
            }
        };
    }

    componentWillMount() {
        let that = this;
        ajax({
            url: 'orgKyc.getKycInsData',
            method: 'get',
            needToken: false,
            urlName: `/2`,
            callback(data) {
                if (data) {
                    common.setLS('insData', data);
                    that.setState({
                        insData: data
                    });
                }
            }
        })
    }

    render() {
        const navBarItems = [{
            key: 'customerInfo',
            value: "实际控制人信息",
            interface: 'kycInsControlInfoResponse'
        },{
            key: 'enterpriseInfo',
            value: "企业信息",
            interface: 'kycInsInfoResponse'
        },{
            key: 'uploadFile',
            value: "公司文件",
            interface: 'kycInsFileResponse'
        },{
            key: 'memberInfo',
            value: "会员信息",
            interface: 'memberList'
        },{
            key: 'financialInfo',
            value: "财务信息",
            interface: 'kycInsFinanceResponse'
        },{
            key: 'agreement',
            value: "签署协议",
            interface: 'kycInsProtocolResponse'
        },{
            key: 'otherInfo',
            value: "其他资料",
            interface: 'kycInsSupplementResponse'
        },{
            key: 'submitApplication',
            value: "提交申请",
            interface: ''
        }];
        const { history, match } = this.props;
        let insData = this.state.insData;
        let list = history.location.pathname.split('identification/');
        let activeItem = list.length > 1 ? list[1] : '';

        return (
            <WrappedInstitutionLayoutCmp>
                <div className="layoutCmp">
                    <div className="navBar">
                        {navBarItems.map(item => 
                            <div 
                                className={item.key == activeItem ? item.key + " navItem active" : item.key + " navItem"} 
                                key={item.key}
                                onClick={() => {history.push(`${match.path}/${item.key}`);}}
                            >
                                {item.value}
                                <div className={insData[item.interface] ? "navIcon hasInfo" : "navIcon"}></div>
                            </div>
                        )}
                    </div>
                </div>
            </WrappedInstitutionLayoutCmp>
        )
    }
}