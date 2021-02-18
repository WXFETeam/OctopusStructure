import * as React from "react";
import { Row, Col, Button, Collapse, message, Modal } from 'antd';
import { WrapperMemberInfoCmp, GlobalStyle } from './styled';
import FormItem from './formItem';
const { Panel } = Collapse;

type MemberInfoProps = {
    [props: string]: any
}

type MemberInfoState = {
    userList: any,
    visible: boolean,
    currentIndex: number
}

export default class MemberInfo extends React.Component<MemberInfoProps, MemberInfoState> {
    constructor(props: MemberInfoProps) {
        super(props);
        this.state = {
            userList: [{gender: 0, prefix: '852'}],
            visible: false,
            currentIndex: 0
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    }

    closeModal = () => {
        this.setState({
            visible: false
        });
    }

    saveMemberInfo = () => {
        let memberList = common.getLS('memberList');
        if (!memberList) return;
        let that = this;
        ajax({
            url: 'orgKyc.saveMemberInfo',
            method: 'post',
            needToken: false,
            isFullData: true,
            data: {list: memberList},
            callback(data) {
                console.log(data);
                if (data.errNo === '0') {
                    message.success('保存成功');
                } else {
                    message.success(data.errMsg);
                }
            }
        })
    }

    addMember = () => {
        this.setState({
            userList: this.state.userList.concat([{gender: 0, prefix: '852'}])
        });
    }

    deleteMember = () => {
        let {currentIndex, userList} = this.state;
        let newList = userList;
        newList.splice(currentIndex, 1);
        this.setState({
            userList: newList,
            visible: false
        }, () => {
            common.setLS('memberList', newList);
            message.success('删除成功');
        });
    }

    updateList = (list) => {
        this.setState({
            userList: list
        });
    }

    getExtra = (index) => {
        if (index == 0) {
            return '';
        } else {
            return <div onClick={(e) => {
                e.stopPropagation();
                this.setState({
                    currentIndex: Number(index)
                });
                this.showModal();
            }} className="deleteMember"></div>;
        }
    }

    componentWillMount() {
        let insData = common.getLS('insData');
        let memberList = common.getLS('memberList')
        let list = this.state.userList;
        if ((insData && insData.memberList) || memberList) {
            this.setState({
                userList: memberList || insData.memberList
            });
        }
    }

    render() {
        let {userList, visible} = this.state;
        return (
            <WrapperMemberInfoCmp>
                <GlobalStyle />
                <Modal
                    className="deleteMemberModal"
                    title="确认将该会员从列表中移除么？"
                    visible = {visible}
                    onCancel = {this.closeModal}
                    onOk={this.deleteMember}
                    >
                </Modal>
                <div className="routeName">会员信息</div>
                <div className="memberTitle">您需要提交公司所有企业会员（董事和持股超过25%的股东）的身份、住址等信息</div>
                <div className="memberNotice">注意：根据监管要求，其中一位会员必须提供手持证件+带有“HashKey&今天日期”纸条的自拍照</div>
                <Collapse 
                    defaultActiveKey = {userList[0].userNo ? null : ['1']}
                    expandIconPosition = 'right'
                >
                    {userList.map((item, index) => 
                        <Panel 
                            key={index + 1} 
                            extra={this.getExtra(index)}
                            header={item.firstName ? 
                                <div className="headerTit"><span>{item.lastName.substr(0, 2)}</span>{`${item.lastName}${item.firstName}`}</div> : 
                                <div className="headerTit"><span>{index + 1}</span>{`会员${index + 1}`}</div>}
                        >
                            <FormItem formItem={item} updateList={this.updateList} />
                        </Panel>
                    )}
                </Collapse>
                <div className="addMember" onClick={this.addMember}>
                    <span>新增会员</span>
                </div>
                <div className="memberInfoBtn">
                    <Button className="confirmBlueBtn saveBtn" onClick={this.saveMemberInfo}>保存</Button>
                </div>
            </WrapperMemberInfoCmp> 
        )
    }
}