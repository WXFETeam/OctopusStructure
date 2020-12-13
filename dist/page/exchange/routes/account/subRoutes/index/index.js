var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { WrapperIndexCmp } from './styled';
import { observer, inject } from 'mobx-react/index';
const reminderIcon = require("@webExchangeImgs/userCenter/kyc/reminderIcon.svg");
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
        this.goAccount = (key) => {
            let { history, match } = this.props;
            if (key === 'individual') {
                // 个人
                history.push(`${match.path}individual`);
            }
            else {
                // 企业
                history.push(`${match.path}enterprise`);
            }
        };
    }
    componentDidMount() {
        this.goAccount('individual');
    }
    render() {
        return (React.createElement(WrapperIndexCmp, null));
    }
};
Index = __decorate([
    inject('userStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=index.js.map