import * as React from "react";
import { Button, Collapse, message, Modal } from 'antd';
import { WrapperMemberInfoCmp, GlobalStyle } from './styled';
import FormItem from './formItem';
const { Panel } = Collapse;
export default class MemberInfo extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = () => {
            this.setState({
                visible: true
            });
        };
        this.closeModal = () => {
            this.setState({
                visible: false
            });
        };
        this.saveMemberInfo = () => {
            let memberList = common.getLS('memberList');
            if (!memberList)
                return;
            let that = this;
            ajax({
                url: 'orgKyc.saveMemberInfo',
                method: 'post',
                needToken: false,
                isFullData: true,
                data: { list: memberList },
                callback(data) {
                    console.log(data);
                    if (data.errNo === '0') {
                        message.success('保存成功');
                    }
                    else {
                        message.success(data.errMsg);
                    }
                }
            });
        };
        this.addMember = () => {
            this.setState({
                userList: this.state.userList.concat([{ gender: 0, prefix: '852' }])
            });
        };
        this.deleteMember = () => {
            let { currentIndex, userList } = this.state;
            let newList = userList;
            newList.splice(currentIndex, 1);
            this.setState({
                userList: newList,
                visible: false
            }, () => {
                common.setLS('memberList', newList);
                message.success('删除成功');
            });
        };
        this.updateList = (list) => {
            this.setState({
                userList: list
            });
        };
        this.getExtra = (index) => {
            if (index == 0) {
                return '';
            }
            else {
                return React.createElement("div", { onClick: (e) => {
                        e.stopPropagation();
                        this.setState({
                            currentIndex: Number(index)
                        });
                        this.showModal();
                    }, className: "deleteMember" });
            }
        };
        this.state = {
            userList: [{ gender: 0, prefix: '852' }],
            visible: false,
            currentIndex: 0
        };
    }
    componentWillMount() {
        let insData = common.getLS('insData');
        let memberList = common.getLS('memberList');
        let list = this.state.userList;
        if ((insData && insData.memberList) || memberList) {
            this.setState({
                userList: memberList || insData.memberList
            });
        }
    }
    render() {
        let { userList, visible } = this.state;
        return (React.createElement(WrapperMemberInfoCmp, null,
            React.createElement(GlobalStyle, null),
            React.createElement(Modal, { className: "deleteMemberModal", title: "\u786E\u8BA4\u5C06\u8BE5\u4F1A\u5458\u4ECE\u5217\u8868\u4E2D\u79FB\u9664\u4E48\uFF1F", visible: visible, onCancel: this.closeModal, onOk: this.deleteMember }),
            React.createElement("div", { className: "routeName" }, "\u4F1A\u5458\u4FE1\u606F"),
            React.createElement("div", { className: "memberTitle" }, "\u60A8\u9700\u8981\u63D0\u4EA4\u516C\u53F8\u6240\u6709\u4F01\u4E1A\u4F1A\u5458\uFF08\u8463\u4E8B\u548C\u6301\u80A1\u8D85\u8FC725%\u7684\u80A1\u4E1C\uFF09\u7684\u8EAB\u4EFD\u3001\u4F4F\u5740\u7B49\u4FE1\u606F"),
            React.createElement("div", { className: "memberNotice" }, "\u6CE8\u610F\uFF1A\u6839\u636E\u76D1\u7BA1\u8981\u6C42\uFF0C\u5176\u4E2D\u4E00\u4F4D\u4F1A\u5458\u5FC5\u987B\u63D0\u4F9B\u624B\u6301\u8BC1\u4EF6+\u5E26\u6709\u201CHashKey&\u4ECA\u5929\u65E5\u671F\u201D\u7EB8\u6761\u7684\u81EA\u62CD\u7167"),
            React.createElement(Collapse, { defaultActiveKey: userList[0].userNo ? null : ['1'], expandIconPosition: 'right' }, userList.map((item, index) => React.createElement(Panel, { key: index + 1, extra: this.getExtra(index), header: item.firstName ?
                    React.createElement("div", { className: "headerTit" },
                        React.createElement("span", null, item.lastName.substr(0, 2)),
                        `${item.lastName}${item.firstName}`) :
                    React.createElement("div", { className: "headerTit" },
                        React.createElement("span", null, index + 1),
                        `会员${index + 1}`) },
                React.createElement(FormItem, { formItem: item, updateList: this.updateList })))),
            React.createElement("div", { className: "addMember", onClick: this.addMember },
                React.createElement("span", null, "\u65B0\u589E\u4F1A\u5458")),
            React.createElement("div", { className: "memberInfoBtn" },
                React.createElement(Button, { className: "confirmBlueBtn saveBtn", onClick: this.saveMemberInfo }, "\u4FDD\u5B58"))));
    }
}
//# sourceMappingURL=index.js.map