var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer, inject } from 'mobx-react/index';
import CorrectPwd from '../components/correctPwd';
let Index = class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(CorrectPwd, null));
    }
};
Index = __decorate([
    inject('userStore'),
    observer
], Index);
export default Index;
//# sourceMappingURL=index.js.map